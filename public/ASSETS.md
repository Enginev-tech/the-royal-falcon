# Assets checklist (The Royal Falcon)

This project references assets via **absolute paths** like `/video/events.mp4` and `/background/main-bg.png`.

That means files must live under `public/` with **exact filenames**.

## Required (site will look incomplete without these)

| Purpose | File path | Used by |
| --- | --- | --- |
| Hero videos (route-based) | `public/video/events.mp4`, `public/video/eten2.mp4`, `public/video/drinken2.mp4`, `public/video/entertainment.mp4`, `public/video/events2.mp4`, `public/video/events3.mp4`, `public/video/drinken1.mp4` | `src/ui/components/HeroVideo.tsx` (route mapping) |
| Main background image | `public/background/main-bg.png` | `src/styles/theme.css` (`--bg-main`) |
| Section background image | `public/background/Falcon-section.png` | `src/styles/theme.css` (`--bg-section`) |
| Pattern background image | `public/background/BG.png` | `src/styles/theme.css` (`--bg-pattern`) |

## Optional (nice-to-have)

| Purpose | File path | Used by |
| --- | --- | --- |
| Ambient video token (only if you decide to use it later) | `public/video/entertainment2.mp4` | `src/styles/components.css` (`--video-ambient`) |
| Footer background photo | `public/footer/snooker-small-03.png` | `src/styles/components.css` (`--footer-bg-image`) |
| Hero fallback image | `public/hero/hero-retrobar.png` | `src/styles/components.css` (`--hero-bg-image`) |

## Gallery images (recommended)

The current Bar Gallery now uses real images from `public/hero/`.

## Notes

- Keep filenames lowercase and exact.
- Video should be `mp4` (H.264) for best browser compatibility.
- Images can be `png` or `jpg`.
