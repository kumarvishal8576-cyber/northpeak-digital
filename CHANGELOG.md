# Optimization Changelog

## Changes made
- Added `preconnect` hints for Google Fonts domains (fonts.googleapis.com, fonts.gstatic.com) to reduce connection setup time before font requests.
- Reduced font weights loaded — only the weights actually used in the UI: Inter (400, 500), Space Grotesk (600, 700), IBM Plex Mono (400) — removed unused weights that were being downloaded unnecessarily.
- Built with plain semantic HTML and native form elements, which kept the accessibility tree clean without needing extra ARIA patching.
- Kept CSS and JS lightweight throughout — no heavy libraries beyond lucide-react for icons.

## Results
- Performance: 60 → 100 (PageSpeed Insights)
- Accessibility: 100 → 100 (already perfect, maintained)
- First Contentful Paint: 1.2s
- Largest Contentful Paint: 1.2s
- Total Blocking Time: 0ms
- Cumulative Layout Shift: 0

## What I'd do differently
- Would have scoped the font weights down from the very start instead of loading the full default set and trimming later — same result, less back-and-forth.