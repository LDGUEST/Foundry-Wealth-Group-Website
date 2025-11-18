# Logo Setup Instructions

## Adding Your Logo

1. Place your Foundry Wealth Group logo file in this `public` folder
2. Name it: `foundry-logo.png` (or update the filename in `components/Logo.tsx`)
3. Recommended formats: PNG, SVG, or WebP
4. Recommended size: At least 120x120px for high-resolution displays

## Logo Specifications

Based on your logo design:
- Stylized "F" with metallic silver/grey appearance
- Dark red/maroon middle bar
- "FOUNDRY" text in bold dark grey
- "WEALTH GROUP" text in lighter grey

## File Naming

The component expects: `/foundry-logo.png`

If your logo has a different name, update `components/Logo.tsx`:
```tsx
src="/your-logo-filename.png"
```

## Alternative: SVG Logo

If you have an SVG version, you can:
1. Place it as `foundry-logo.svg`
2. Update the component to use SVG
3. Or use it inline for better scalability

## Current Implementation

The logo component:
- Shows logo image on all screen sizes
- Shows text ("FOUNDRY WEALTH GROUP") on screens larger than `sm` breakpoint
- Is clickable and links to homepage
- Has hover effects
- Uses Next.js Image optimization

