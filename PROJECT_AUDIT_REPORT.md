# PROJECT AUDIT REPORT

Generated for BKK AIR Next.js project at `C:\Users\siamu\bkkair`.

## Executive Summary

- Current framework surface is primarily **Next.js App Router** under `app/`.
- There is **no `pages/` directory**, no `src/` directory, no `layouts/` directory, and no `middleware.ts`.
- The root homepage (`/`) and the catch-all route (`/[...slug]`) both render `components/AppShell.jsx`, which dynamically loads the legacy client app (`components/legacy/App.jsx`) with SSR disabled.
- Most modern marketing/legal pages use `components/marketing/MarketingShell.jsx`, which shares `components/layout/Navbar.jsx` and `components/layout/Footer.jsx`.
- `next.config.js` rewrites **all `/api/:path*` requests** to `API_PROXY_TARGET` or `http://localhost:5001`. This is important because the project also defines `app/api/send/route.ts`.
- Build passes after stopping a local dev server that was locking `.next/trace`.

## Existing Routes

### Public Pages

App Router pages found:

- `/` -> `app/page.tsx`
- `/blog` -> `app/blog/page.tsx`
- `/contact` -> `app/contact/page.tsx`
- `/cookies-policy` -> `app/cookies-policy/page.tsx`
- `/faq` -> `app/faq/page.tsx`
- `/how-it-works` -> `app/how-it-works/page.tsx`
- `/insurance` -> `app/insurance/page.tsx`
- `/order` -> `app/order/page.tsx`
- `/packages` -> `app/packages/page.tsx`
- `/privacy-policy` -> `app/privacy-policy/page.tsx`
- `/terms` -> `app/terms/page.tsx`

### Dynamic Routes

- `/blog/[slug]` -> `app/blog/[slug]/page.tsx`
  - Static params from `components/marketing/content.js`:
    - `/blog/schengen-visa-documents`
    - `/blog/flight-reservation-for-visa`
    - `/blog/hotel-booking-for-visa`
    - `/blog/uk-visa-documents`
    - `/blog/do-not-buy-real-ticket-before-visa`
- `/visa/[country]` -> `app/visa/[country]/page.tsx`
  - Static params from `components/marketing/content.js`:
    - `/visa/schengen`
    - `/visa/uk`
    - `/visa/usa`
    - `/visa/canada`
    - `/visa/australia`
    - `/visa/japan`
    - `/visa/korea`
- `/[...slug]` -> `app/[...slug]/page.tsx`
  - Catch-all route renders the legacy client app for any unmatched path.
  - This can make non-App-Router paths appear reachable, but they are not clear static routes in the build inventory.

### API Routes

App Router API route found:

- `POST /api/send` -> `app/api/send/route.ts`

Frontend legacy API client references additional backend routes through `components/legacy/services/api.js`:

- `POST /api/admin/auth/login`
- `POST /api/admin/auth/logout`
- `GET /api/admin/auth/me`
- `POST /api/bookings`
- `GET /api/bookings/:code`
- `GET /api/bookings/check/:code`
- `GET /api/admin/bookings`
- `GET /api/admin/bookings/:code`
- `PATCH /api/admin/bookings/:code/status`
- `PATCH /api/admin/bookings/:code/notes`
- `PATCH /api/admin/bookings/:code/assign`
- `PATCH /api/admin/bookings/:code/quotation`
- `PATCH /api/admin/bookings/:code/payment`
- `PATCH /api/admin/bookings/:code/document`
- `PATCH /api/admin/bookings/:code/follow-up`

These backend routes are not implemented in `app/api`; they rely on the proxy in `next.config.js`.

### Legacy/Client Routes Through Catch-All

`components/legacy/App.jsx` maps some browser paths into client-side pages:

- `/check`
- `/contact`
- `/login`
- `/portal`
- `/privacy-policy`
- `/register`
- `/terms-of-service`
- `/admin`
- `/admin/login`
- `/admin/operations`

Because these are rendered inside `/[...slug]`, they do not appear as explicit App Router pages except where an App Router page already exists.

### Archive Static Pages

`public/bkkair-OLD/` contains many old `.html` files and an old Next.js/project archive:

- `index.html`
- `packages.html`
- `contact.html`
- `faq.html`
- `how-it-works.html`
- `insurance.html`
- `order.html`
- `privacy-policy.html`
- `cookies-policy.html`
- `terms.html`
- `thank-you.html`
- `404.html`
- plus old app/components/assets/node_modules/.next files

This folder is an archive/reference folder and should not be treated as current website routing. It is currently untracked in git.

## Missing Routes

Required important pages:

- `/` exists.
- `/contact` exists.
- `/faq` exists.
- `/cookies-policy` exists.
- `/privacy-policy` exists.
- `/terms` exists.
- `/order` exists.
- `/packages` exists.

Potentially expected but missing as explicit App Router pages:

- `/check` is not an App Router page. It is handled by the catch-all legacy client app.
- `/login` is not an App Router page. It is handled by the catch-all legacy client app.
- `/portal` is not an App Router page. It is handled by the catch-all legacy client app.
- `/register` is not an App Router page. It is handled by the catch-all legacy client app.
- `/admin/*` is not an App Router route. It is handled by the catch-all legacy client app.
- `/thank-you` exists only in `public/bkkair-OLD/`, not current App Router.

## Homepage Sections

Current homepage composition:

- `app/page.tsx` -> `components/AppShell.jsx` -> `components/legacy/App.jsx` -> `components/legacy/pages/Home.jsx`

Homepage sections and IDs found:

- `#hero` -> `components/home/Hero.jsx`
- `#why-choose-us` -> `components/home/WhyChooseUs.jsx`
- `#workflow` -> `components/home/WorkflowTimeline.jsx`
- `#services` -> wrapper in `components/legacy/pages/Home.jsx`
- `#packages` -> `components/home/ServicePackages.jsx`
- `#countries` -> `components/home/SupportedCountriesSection.jsx`
- `#testimonials` -> `components/home/Testimonials.jsx`
- `#faq` -> `components/home/FAQSection.jsx`
- `#contact` -> `components/layout/Footer.jsx`

Expected anchor IDs are present:

- `services`
- `why-choose-us`
- `workflow`
- `packages`
- `countries`
- `faq`
- `contact`

## Navbar/Footer Issues

### Navbar

Shared component:

- `components/layout/Navbar.jsx`

Used by:

- `components/marketing/MarketingShell.jsx`
- `components/legacy/App.jsx`

Current navbar links:

- Logo -> `/`
- Services dropdown:
  - `/#services`
  - `/#why-choose-us`
  - `/#workflow`
  - `/#countries`
- Supported countries dropdown:
  - `/#countries`
  - `/contact`
- Main links:
  - `/packages`
  - `/faq`
  - `/contact`
- CTA:
  - `/order`

Status:

- Links point to existing pages or homepage anchors.
- Uses `next/link`.
- Has active state for `/packages`, `/faq`, `/contact`.
- Legal pages are not in main nav.

### Footer

Shared component:

- `components/layout/Footer.jsx`

Used by:

- `components/marketing/MarketingShell.jsx`
- `components/legacy/App.jsx`

Current footer links:

- `/`
- `/#services`
- `/packages`
- `/#countries`
- `/#workflow`
- `/faq`
- `/contact`
- `/order`
- `/#why-choose-us`
- `/privacy-policy`
- `/cookies-policy`
- `/terms`

Status:

- Footer internal links use `next/link`.
- Cookie settings button reopens cookie popup by clearing `bkkair_cookie_consent`.
- No current footer links use old `.html` paths.

## Broken Links

Current app/components scan:

- No current `.html` links were found in `app/` or `components/`.
- No bare `href="#"` links were found in current App Router pages.

Potential link concerns:

- `components/legacy/pages/RegisterPage.jsx` contains `href="#terms"` and `href="#privacy"`. These are anchor placeholders inside a legacy page, not global routes. Verify whether matching IDs exist on that page before keeping them.
- `app/packages/page.tsx` contains `Link href="#package-cards"`, which is an in-page anchor and appears intentional.
- Several legal pages use `href={`#${item.id}`}` for table-of-contents links; these are intentional.
- `components/home/ServicePackages.jsx` uses `window.location.href` for package CTA navigation. It works, but it is less idiomatic than `next/link` or `useRouter`.

API routing concern:

- `next.config.js` rewrites `/api/:path*` to a backend proxy. Confirm whether this rewrite shadows or bypasses `app/api/send/route.ts` in the deployed environment. If it does, homepage form email sending may route to the backend instead of the local Next route.

## Orphan Pages

Pages that exist but are not clearly reachable from navbar/footer:

- `/blog`
- `/blog/[slug]`
- `/visa/[country]`
- `/how-it-works`

Pages reachable by content links but not main nav/footer:

- `/insurance` is reachable from package cards and package page CTAs.

Catch-all legacy routes that may be reachable only by direct URL:

- `/check`
- `/login`
- `/portal`
- `/register`
- `/terms-of-service`
- `/admin/*`

Recommendation:

- Decide whether `/blog`, `/visa/[country]`, and `/how-it-works` should be linked from navbar/footer, homepage cards, sitemap, or removed.
- If `/check`, `/portal`, `/login`, `/register`, and `/admin/*` are part of the product, convert them into explicit App Router routes or document the catch-all strategy.

## Duplicate Pages

Potential duplicates between App Router pages and legacy client pages:

- `/contact`
  - App Router: `app/contact/page.tsx`
  - Legacy: `components/legacy/pages/ContactPage.jsx`
- `/privacy-policy`
  - App Router: `app/privacy-policy/page.tsx`
  - Legacy: `components/legacy/pages/PrivacyPolicy.jsx`
- Terms/legal:
  - App Router: `/terms` -> `app/terms/page.tsx`
  - Legacy: `/terms-of-service` -> `components/legacy/pages/TermsOfService.jsx`

Archive duplicates:

- `public/bkkair-OLD/` contains old static pages for contact, faq, packages, policy, terms, order, insurance, and others.

Recommendation:

- Keep App Router pages as canonical public pages.
- Migrate any still-needed legacy pages into App Router or remove the legacy duplicates after confirming admin/customer portal needs.
- Move `public/bkkair-OLD/` out of `public/` or ignore/archive it outside the deployable static directory.

## Duplicate Components

Current shared components:

- Navbar: `components/layout/Navbar.jsx`
- Footer: `components/layout/Footer.jsx`
- Logo: `components/layout/Logo.jsx`

No duplicate current Navbar/Footer components were found under `components/` outside the archive. The archive contains old layout/header/footer files under `public/bkkair-OLD/`, but those should not be treated as current components.

Recommended shared component:

- Keep `components/layout/Navbar.jsx` and `components/layout/Footer.jsx` as the global shared components.
- Keep using `components/marketing/MarketingShell.jsx` for App Router marketing/legal pages.
- Keep legacy `components/legacy/App.jsx` only for admin/customer portal until those routes are migrated.

## Unused Components

Likely used:

- `components/AppShell.jsx`
- `components/CookieConsent.tsx`
- `components/CookieSettingsButton.tsx`
- `components/HeroForm.tsx`
- `components/contact/ContactForm.tsx`
- `components/home/*`
- `components/layout/*`
- `components/marketing/*`
- most `components/legacy/pages/admin/*`
- `components/legacy/components/customer-portal/*`

Unused or questionable candidates:

- `components/legacy/pages/BookingForm.jsx`
  - It is mapped to `activeTab: "book"`, but `getPublicTab()` does not map any browser route to `"book"`.
  - It may be reachable only through old in-app callbacks.
- `components/legacy/pages/PrivacyPolicy.jsx`
  - Duplicates App Router `/privacy-policy`.
- `components/legacy/pages/TermsOfService.jsx`
  - Duplicates App Router `/terms`, but is separately reachable as legacy `/terms-of-service`.
- `components/legacy/pages/ContactPage.jsx`
  - Duplicates App Router `/contact`.
- `components/legacy/pages/LoginPage.jsx`, `RegisterPage.jsx`, `CustomerPortal.jsx`, `CheckBooking.jsx`
  - Reachable through catch-all legacy routing, but not explicit App Router pages.
- `components/legacy/pages/admin/AdminLayout.jsx`
  - Appears exported but not clearly imported by `AdminPortal.jsx`; verify before deleting.
- `components/ui/.gitkeep`
  - Placeholder only.

Do not delete automatically. Confirm usage in runtime navigation first.

## Existing API/Backend Structure

Frontend helper:

- `lib/apiBase.ts`
  - Defaults to `http://localhost:5001`.
  - Uses `NEXT_PUBLIC_API_URL`.

Legacy client API wrapper:

- `components/legacy/services/api.js`
  - Imports `apiUrl` from `lib/apiBase.ts`.
  - Sends public booking and admin requests to backend API.

Next API:

- `app/api/send/route.ts`
  - Handles homepage lead email via SMTP/Nodemailer.
  - Sends to `info@bkkair.com`.
  - Uses SMTP env vars.

Risk:

- `next.config.js` has a broad `/api/:path*` rewrite to backend. Verify deployed route precedence for `/api/send`.

## Images and Videos Currently Used

Detected current usage:

- Logo:
  - `/images/logo/logo.png` -> `components/layout/Logo.jsx`
- Site icon:
  - `/images/icons/site-icon.svg` -> `app/layout.tsx`
- Hero background:
  - `/images/background/hero-bg.jpg` -> `components/home/Hero.jsx`
- Why Choose Us video:
  - `/videos/visa-support.mp4` -> `components/home/WhyChooseUs.jsx`
- Dynamic/admin/customer portal images:
  - `booking.paymentSlipUrl` -> `components/legacy/pages/admin/AdminBookingDetail.jsx`
  - `previewUrl` -> `components/legacy/components/customer-portal/PortalModal.jsx`

Public assets present but not clearly used in current code:

- `/images/countries/*.jpg`
- `/images/pages/home/2nd-section-img-1.png`
- `/images/logo/logo.svg`
- `/assets/logo/logo.png`
- `/images/hero-bg.jpg`
- `/images/home/thank-you-illustration.jpg`
- `/images/home/visa-hero-illustration.jpg`
- `/images/home/workflow-illustration.jpg`

Recommendation:

- Keep required assets: logo png, site icon svg, hero background, visa-support video.
- Audit unused public image assets before deleting.
- Move old/static archive assets out of `public/bkkair-OLD/` if they are not intended to be served.

## Missing SEO/Legal Pages

Present:

- `/privacy-policy`
- `/cookies-policy`
- `/terms`
- `/faq`
- `/contact`
- `/packages`
- `/insurance`
- `/blog`
- `/visa/[country]`

Missing or not found:

- `robots.txt` in current `public/`
- `sitemap.xml` in current `public/`
- `/thank-you`
- Dedicated `/about` page

Recommendation:

- Add current `public/robots.txt` and `public/sitemap.xml` or generate via Next if SEO is a priority.
- Decide whether `/thank-you` is needed for form completion.
- If blog/visa pages remain, include them in sitemap and reachable site navigation.

## Route Groups and Special Files

- No route groups were found.
- `app/[[...slug]]/` directory exists but has no page files. This empty optional catch-all folder should be removed or documented.
- `app/[...slug]/page.tsx` is active and catches unmatched routes.
- No `middleware.ts` found.
- No `pages/` directory found.
- No `src/` directory found.
- No `layouts/` directory found.

## Build Result

Command:

```bash
npm run build
```

Initial run:

- Failed with `EPERM: operation not permitted, open 'C:\Users\siamu\bkkair\.next\trace'`.
- Cause was a running local `bkkair` dev server locking `.next/trace`.

After stopping only the `bkkair` dev server processes:

- Build passed.
- Next.js version: `14.2.33`
- Generated static pages: `27/27`

Build routes reported:

- `/`
- `/_not-found`
- `/[...slug]`
- `/api/send`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/cookies-policy`
- `/faq`
- `/how-it-works`
- `/insurance`
- `/order`
- `/packages`
- `/privacy-policy`
- `/terms`
- `/visa/[country]`

No build warnings were shown after the successful run.

## Recommended Cleanup

1. Decide whether the catch-all legacy app should remain.
   - If yes, document all supported legacy paths.
   - If no, migrate `/admin`, `/check`, `/portal`, `/login`, and `/register` into explicit App Router pages.
2. Resolve `/api/send` versus `next.config.js` broad `/api/:path*` rewrite.
   - Either exclude `/api/send` from the proxy or move send-mail behavior into the backend.
3. Move `public/bkkair-OLD/` outside `public/`.
   - It contains old pages, old app files, `.next`, and `node_modules`.
   - Keeping it under `public/` can accidentally expose old files.
4. Decide whether `/blog`, `/visa/[country]`, and `/how-it-works` should be part of the primary navigation, footer, or sitemap.
5. Convert package card CTAs in `components/home/ServicePackages.jsx` from `window.location.href` to `Link` or `useRouter`.
6. Audit unused public assets before deletion.
7. Consider adding current `robots.txt` and `sitemap.xml`.
8. Remove or document empty `app/[[...slug]]/`.
9. Consolidate duplicate legal/contact pages by preferring App Router pages.
10. Add explicit App Router pages for important product surfaces instead of relying on client catch-all routing.

## Recommended Structure

Suggested long-term structure:

```text
app/
  page.tsx
  layout.tsx
  contact/page.tsx
  packages/page.tsx
  order/page.tsx
  faq/page.tsx
  privacy-policy/page.tsx
  cookies-policy/page.tsx
  terms/page.tsx
  insurance/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  visa/[country]/page.tsx
  admin/... explicit admin routes
  check/page.tsx
  portal/page.tsx
  api/send/route.ts or backend-only equivalent

components/
  layout/
    Navbar.jsx
    Footer.jsx
    Logo.jsx
  home/
  marketing/
  admin/
  portal/

public/
  images/
  videos/
  robots.txt
  sitemap.xml
```

Keep `components/layout/Navbar.jsx` and `components/layout/Footer.jsx` as the single shared navigation system.
