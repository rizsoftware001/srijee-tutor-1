import React from 'react'
import { cn } from '../../utils/cn.js'

const VARIANTS = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  ghost:     'btn-ghost',
  accent:    'btn-accent',
  outline:   'btn-outline',
  danger:    'btn bg-danger-600 text-white hover:bg-danger-700 active:bg-danger-800 shadow-soft',
  success:   'btn bg-success-600 text-white hover:bg-success-700 active:bg-success-800 shadow-soft',
}
const SIZES = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  icon: 'p-2.5',
}

/**
 * Button — design-system primary button.
 * Supports `as` for polymorphic rendering (e.g. as={Link}).
 */
export const Button = React.forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    as: Comp = 'button',
    className,
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    ...rest
  },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={cn(
        VARIANTS[variant] || VARIANTS.primary,
        SIZES[size] || SIZES.md,
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && (
        <Spinner className="h-4 w-4" />
      )}
      {!loading && leftIcon && <span className="inline-flex">{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span className="inline-flex">{rightIcon}</span>}
    </Comp>
  )
})

function Spinner({ className }) {
  return (
    <svg className={cn('animate-spin', className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default Button
