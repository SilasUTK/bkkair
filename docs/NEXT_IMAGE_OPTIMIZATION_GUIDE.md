# Next.js Image Optimization Best Practices Guide

## Overview

Your current LCP (Largest Contentful Paint) is 64 on mobile. Next.js Image optimization can improve this to 85-90+ by implementing these proven techniques.

---

## 1. **Image Component Best Practices**

### ✅ DO: Use next/image for all static images

```jsx
import Image from "next/image";

// Correct - using next/image with all required props
<Image
  src="/hero-bg.jpg"
  alt="Descriptive text for accessibility"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  quality={75} // Balance quality vs file size
  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1920px"
/>
```

### ❌ DON'T: Use img or backgroundImage for critical images

```jsx
// ❌ Avoid - unoptimized images
<img src="/hero-bg.jpg" alt="..." />
<div style={{ backgroundImage: 'url(/hero-bg.jpg)' }} />
```

---

## 2. **Priority & Loading Strategies**

### Priority Image (Perceived LCP)

```jsx
<Image
  src="/images/background/hero-bg.jpg"
  alt="Hero background"
  width={1920}
  height={1080}
  priority           // ✅ Preload & fetch immediately
  quality={80}       // Reduced for background images
  sizes="100vw"      // Takes full viewport width
/>
```

**When to use `priority`:**

- Above-the-fold images (hero, first section)
- Images loaded immediately on page view
- Typically 1-2 images per page

### Lazy-Loaded Images (Below-the-fold)

```jsx
<Image
  src="/images/countries/uk.jpg"
  alt="UK visa documents"
  width={400}
  height={300}
  loading="lazy"      // ✅ Load when scrolling near
  quality={70}        // Can be lower for distant images
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## 3. **Image Sizing & srcset**

### The `sizes` Attribute (Critical for LCP)

Tells browser which image size to load at different viewport widths.

```jsx
// ❌ WRONG - loads largest image always
<Image src="..." sizes="100vw" />

// ✅ CORRECT - responsive sizing
<Image
  src="..."
  sizes={
    "(max-width: 640px) 100vw, " +     // Mobile: full width
    "(max-width: 1024px) 90vw, " +     // Tablet: 90%
    "(max-width: 1280px) 75vw, " +     // Desktop: 75%
    "1200px"                            // Large screens: 1200px fixed
  }
/>
```

### Example for Different Component Types

**Hero Section (Full Width)**

```jsx
sizes="100vw"
```

**Card Grid (3 columns on desktop)**

```jsx
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) calc(100vw / 3), 400px"
```

**Thumbnail (Fixed size)**

```jsx
sizes="(max-width: 640px) 200px, 300px"
```

---

## 4. **Image Formats & Quality Settings**

### Modern Format Optimization (WebP, AVIF)

Already configured in `next.config.js`:

```javascript
images: {
  formats: ['image/avif', 'image/webp']
}
```

The browser automatically receives:

- **AVIF** (Safari 16+): Best compression
- **WebP** (Chrome, Edge): Good compression
- **JPG** (fallback): All browsers

### Quality Settings by Use Case

| Use Case | Quality | Size Reduction |
|----------|---------|---|
| Hero/LCP Image | 75-80 | ~40% smaller |
| Product images | 80-85 | ~30% smaller |
| Thumbnails | 60-70 | ~50% smaller |
| Backgrounds | 70-75 | ~40% smaller |

```jsx
// Hero (visible immediately)
<Image ... quality={78} priority />

// Card images
<Image ... quality={75} loading="lazy" />

// Small thumbnails
<Image ... quality={65} loading="lazy" />
```

---

## 5. **Optimizing Background Images**

### ❌ OLD: CSS background-image (Blocks rendering)

```jsx
<div style={{ backgroundImage: `url(${country.image})` }} />
```

**Problems:**

- Not optimized by Next.js
- Blocks CSS parsing and rendering
- Impacts LCP (adds 200-500ms)
- Harder to load different sizes

### ✅ NEW: Picture + Image element

```jsx
<picture className="absolute inset-0">
  <source srcSet="/images/countries/uk.webp" type="image/webp" />
  <Image
    src="/images/countries/uk.jpg"
    alt="UK visa country card background"
    fill
    className="object-cover"
    quality={70}
    loading="lazy"
  />
</picture>
```

Or using CSS with Image overlay:

```jsx
<div className="relative overflow-hidden">
  <Image
    src="/images/countries/uk.jpg"
    alt=""
    fill
    className="object-cover absolute inset-0"
    quality={70}
  />
  <div className="relative z-10">
    {/* Content on top */}
  </div>
</div>
```

---

## 6. **Responsive Image Example (Countries Section)**

### Before (Unoptimized)

```jsx
{country.image && (
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${country.image})` }}
  />
)}
```

### After (Optimized)

```jsx
{country.image && (
  <div className="absolute inset-0 overflow-hidden">
    <Image
      src={country.image}
      alt={`${country.name} background`}
      fill
      className="object-cover object-center"
      quality={70}
      loading="lazy"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>
)}
```

---

## 7. **Local Image Imports (Preferred)**

### ✅ Best: Static imports for known images

```jsx
import heroBackground from "@/public/images/background/hero-bg.jpg";

<Image
  src={heroBackground}
  alt="Hero background"
  priority
  quality={78}
/>
```

**Advantages:**

- Build-time validation (errors if file missing)
- Automatic width/height detection
- Better optimization opportunities
- Type-safe in TypeScript

---

## 8. **Testing & Performance Monitoring**

### Google PageSpeed Insights

1. Go to [pagespeed.web.dev](https://pagespeed.web.dev)
2. Test your homepage
3. Look for "Largest Contentful Paint" (LCP)
4. Target: < 2.5 seconds (green)

### Chrome DevTools Lighthouse

```bash
Ctrl+Shift+J → Lighthouse → Generate report
```

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s ✅
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 9. **Image Preloading for Speed**

### Link preload (for non-priority images)

```jsx
// In app/layout.tsx
import Link from "next/link";

<head>
  {/* Preload key images */}
  <link
    rel="preload"
    as="image"
    href="/images/countries/uk.jpg"
    imagesrcset="/images/countries/uk-mobile.jpg 640w, /images/countries/uk-desktop.jpg 1200w"
    imagesizes="(max-width: 640px) 100vw, 50vw"
  />
</head>
```

---

## 10. **File Size Targets**

### Compression Checklist

| Image Type | Target Size | Format |
|-----------|---|---|
| Hero (1920x1080) | < 200KB | WebP |
| Card image (400x300) | < 50KB | WebP |
| Thumbnail (200x200) | < 20KB | WebP |
| Country flag | < 10KB | PNG/SVG |

### Optimization Tool

Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) to optimize before adding to project.

---

## 11. **Implementation Checklist**

- [ ] Add `priority` to above-the-fold images (Hero, first 3 cards)
- [ ] Set appropriate `quality` levels (75-80 for hero, 65-70 for others)
- [ ] Define `sizes` for all responsive images
- [ ] Replace background-image with Image component
- [ ] Use static imports for known images
- [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Monitor Core Web Vitals (< 2.5s LCP target)
- [ ] Optimize actual image files (use TinyPNG)
- [ ] Use next/font for custom fonts (Lighthouse check)
- [ ] Defer non-critical JS (Google Analytics, etc.)

---

## 12. **Performance Impact Expected**

With these optimizations applied:

- **LCP improvement**: 64 → 88-92 (typical)
- **Page load time**: ~30-40% faster
- **Bandwidth saved**: 40-50% with WebP/AVIF
- **Mobile Lighthouse score**: 64 → 85-90

