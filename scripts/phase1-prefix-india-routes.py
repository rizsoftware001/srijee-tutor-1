#!/usr/bin/env python3
"""
Phase 1 script: Move existing India routes from / to /in/* by prefixing
all internal Link `to="/..."`, `navigate("/...")`, `redirect="/..."` references
with /in. Also handles `to="/"` (root) → `to="/in"` and `to="/#faq"` → `to="/in#faq"`.

Skips:
- External URLs (https://, http://, //)
- Anchor-only / query-only links (/#..., /?...)
- tel:, mailto: schemes
- The new src/regions/ folder (built fresh with /us, /uk, /ca, /ae prefixes)
- AppRoutes.jsx (rewritten manually in Phase 5)
- nav.js (updated manually — has structured data, easier to edit directly)
"""

import re
import os
from pathlib import Path

PROJECT_ROOT = Path('/home/z/my-project/srijee-tutor-v9/src')
EXCLUDE_DIRS = {'regions'}
EXCLUDE_FILES = {'AppRoutes.jsx', 'nav.js'}

# Regex patterns — match `to="/X"` where X starts with a letter or is empty (root) or is `#` (anchor on root)
# Match: to="/, to='/
# Capture group 1 = the quote char, group 2 = the rest after the leading /
TO_PATTERN = re.compile(r'''(to|href)\s*=\s*(['"])/([a-zA-Z]|$|#)''')

# Match: navigate("/..."), navigate('/...')
NAVIGATE_PATTERN = re.compile(r'''(navigate)\s*\(\s*(['"])/([a-zA-Z])''')

# Match: redirect="/..." or redirect='/...'
REDIRECT_PATTERN = re.compile(r'''redirect\s*=\s*(['"])/([a-zA-Z])''')

# Match: state={{ from: location.pathname }} — no change needed

# Match: redirect = '/login' default in ProtectedRoute (parameter default)
REDIRECT_DEFAULT_PATTERN = re.compile(r'''redirect\s*=\s*(['"])/login(['"])''')

def transform_text(text):
    """Apply all regex transformations to a file's content."""
    # Pattern 1: to="/X" or href="/X" → to="/in/X" or href="/in/X"
    # Where X is a letter, end-of-string (root), or # (anchor on root)
    def to_repl(m):
        attr = m.group(1)
        quote = m.group(2)
        rest = m.group(3)
        if rest == '#':
            # Anchor on root: to="/#faq" → to="/in#faq"
            return f'{attr}={quote}/in#{quote[0:0]}'  # broken; fix below
        if rest == '':
            # Root: to="/" → to="/in"
            return f'{attr}={quote}/in'
        # to="/about" → to="/in/about"
        return f'{attr}={quote}/in/{rest}'
    # Actually let me rewrite this more carefully
    def to_repl2(m):
        attr = m.group(1)
        quote = m.group(2)
        rest = m.group(3)
        if rest == '#':
            return f'{attr}={quote}/in#{quote}'  # close the quote after #
        if rest == '':
            # Root case: to="/" → to="/in" — but our pattern matches /$ which means we already consumed the /
            # The original text was to="/", we matched to=" and /, rest is '' meaning closing quote was next
            # But our pattern requires /([a-zA-Z]|$|#) — the $ matches end-of-string, not end-of-attr
            # This won't match `to="/"` correctly. Need a different approach.
            return m.group(0)
        return f'{attr}={quote}/in/{rest}'
    # The regex (to|href)\s*=\s*(['"])/([a-zA-Z]|$|#) actually only matches when something follows the /
    # For `to="/"`, the next char is `"`, which doesn't match [a-zA-Z] or $ or #, so it won't match.
    # We need a separate pattern for root.
    
    # Root pattern: to="/" or to='' (just slash)
    ROOT_PATTERN = re.compile(r'''(to|href)\s*=\s*(['"])/(['"])''')
    def root_repl(m):
        return f'{m.group(1)}={m.group(2)}/in{m.group(3)}'
    text = ROOT_PATTERN.sub(root_repl, text)
    
    # Anchor-on-root pattern: to="/#..." → to="/in#..."
    ANCHOR_ROOT_PATTERN = re.compile(r'''(to|href)\s*=\s*(['"])/#''')
    def anchor_root_repl(m):
        return f'{m.group(1)}={m.group(2)}/in#'
    text = ANCHOR_ROOT_PATTERN.sub(anchor_root_repl, text)
    
    # General pattern: to="/X..." where X is a letter → to="/in/X..."
    def general_repl(m):
        attr = m.group(1)
        quote = m.group(2)
        next_char = m.group(3)
        return f'{attr}={quote}/in/{next_char}'
    text = TO_PATTERN.sub(general_repl, text)
    
    # navigate("/X") → navigate("/in/X")
    def nav_repl(m):
        fn = m.group(1)
        quote = m.group(2)
        next_char = m.group(3)
        return f'{fn}({quote}/in/{next_char}'
    text = NAVIGATE_PATTERN.sub(nav_repl, text)
    
    # redirect="/X" → redirect="/in/X" (JSX prop form)
    def redir_repl(m):
        quote = m.group(1)
        next_char = m.group(2)
        return f'redirect={quote}/in/{next_char}'
    text = REDIRECT_PATTERN.sub(redir_repl, text)
    
    # redirect = '/login' (function param default)
    def redir_default_repl(m):
        quote = m.group(1)
        end_quote = m.group(2)
        return f"redirect = {quote}/in/login{end_quote}"
    text = REDIRECT_DEFAULT_PATTERN.sub(redir_default_repl, text)
    
    return text


def is_target_file(path):
    """Check if file should be transformed."""
    rel = path.relative_to(PROJECT_ROOT)
    # Exclude regions folder
    if rel.parts[0] in EXCLUDE_DIRS:
        return False
    # Exclude specific files
    if path.name in EXCLUDE_FILES:
        return False
    # Only .jsx and .js files
    if path.suffix not in ('.jsx', '.js'):
        return False
    return True


def main():
    changed_files = []
    for path in PROJECT_ROOT.rglob('*'):
        if not path.is_file():
            continue
        if not is_target_file(path):
            continue
        try:
            original = path.read_text(encoding='utf-8')
        except Exception as e:
            print(f'SKIP {path}: {e}')
            continue
        transformed = transform_text(original)
        if transformed != original:
            path.write_text(transformed, encoding='utf-8')
            changed_files.append(path.relative_to(PROJECT_ROOT))
            print(f'UPDATED {path.relative_to(PROJECT_ROOT)}')
    print(f'\nTotal files updated: {len(changed_files)}')


if __name__ == '__main__':
    main()
