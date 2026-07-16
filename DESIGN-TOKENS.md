# Design Tokens — Global Unibridge

Extracted verbatim from `_reference/home.html` (Eduma / Thim "thim-ekits" theme + Elementor Kit 497).
Every value is present in the source CSS — no approximations. Source of truth: `src/styles/tokens.css`.

## Colors

| Token | Value | Source variable | Use |
|-------|-------|-----------------|-----|
| `--color-primary` / `--color-secondary` | `#182c59` | `--e-global-color-primary` / `secondary` | Navy — buttons, links, headings accents |
| `--color-accent` | `#111111` | `--e-global-color-accent` | Near-black — title text |
| `--color-text` | `#4F4F4F` | `--e-global-color-text` / `--thim-font-body-color` | Body copy |
| `--color-white` | `#FFFFFF` | `--e-global-color-5f782af` | Backgrounds |
| `--color-black` | `#000000` | `--e-global-color-6b28c0b` | — |
| `--color-danger` | `#DF0000` | `--e-global-color-d4edbd9` | Errors / required |

### Warm / beige palette
| Token | Value | Source variable |
|-------|-------|-----------------|
| `--color-cream` | `#F8F4EE` | `--e-global-color-7eb20da` |
| `--color-beige` | `#EDE2D4` | `--e-global-color-b663d07` |
| `--color-tan` | `#DDC6AB` | `--e-global-color-c1af41a` |
| `--color-warm-grey` | `#E2E0DB` | `--e-global-color-20b9a19` |

### Neutral greys
`#F5F5F5` · `#E5E5E5` · `#D1D1D1` · `#9D9D9D` · `#737373` · border `#EEEEEE`

## Typography

- **Family (title & body):** `Urbanist`, sans-serif — `--thim-font-title-font-family`, `--thim-font-body-font-family`
- **Base body:** 16px / 1.5em / weight 400 / color `#4F4F4F`
- **Title color:** `#111111`, weight 700
- **Button:** 16px / weight 600 / line-height 1.5em / `text-transform: capitalize`

### Heading scale (Elementor global typography)
| Level | Size | Weight | Line-height | Source |
|-------|------|--------|-------------|--------|
| H1 | 48px | 700 | 1.25em | `typography-722e303` |
| H2 (primary) | 36px | 700 | 1.5em | `typography-primary` |
| H3 | 32px | 700 | 40px | `typography-5a3aa4c` |
| small | 14px | 400/500 | 1.25em | `typography-secondary` |

> Note: source self-hosts Urbanist via `@font-face`. We load it from Google Fonts (`weights 400;500;600;700;800`) for parity.

## Layout

- **Container (desktop boxed):** `1290px` — Elementor `.e-con { --container-max-width: 1290px }`
- **Tablet container:** `1024px` (`@media <=1024`)
- **Mobile container:** `767px` (`@media <=767`)
- **Container side padding:** `15px`

## Breakpoints (Elementor defaults)

- Tablet: `<= 1024px`
- Mobile: `<= 767px`
