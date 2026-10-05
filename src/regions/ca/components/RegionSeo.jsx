// Re-export so each regional frontend can use its own self-contained import:
//   import RegionSeo from '../components/RegionSeo.jsx'
// The implementation lives in src/regions/us/components/RegionSeo.jsx
// (it accepts any path/title/description props — region-agnostic).
export { default } from '../../us/components/RegionSeo.jsx'
