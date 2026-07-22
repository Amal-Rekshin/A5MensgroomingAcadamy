# Implementation Plan: Aura Hair Academy Website

## 1. Project Vision
To create a premium, luxury-focused digital presence for **Aura Hair Academy**. The website will serve as both a brand statement and a high-conversion tool to attract aspiring hairstylists, using modern UI/UX patterns like glassmorphism, smooth animations, and a mobile-first approach.

## 2. Design System (Luxury Dark Theme)

### Color Palette
| Role | Hex Code | Visual Description |
| :--- | :--- | :--- |
| **Base Background** | `#050505` | Deep Obsidian |
| **Surface/Card** | `rgba(255,255,255,0.03)` | Frosted Glass |
| **Primary Accent** | `#D4AF37` | Burnished Gold |
| **Secondary Accent** | `#F1D27B` | Luminous Gold |
| **Text Primary** | `#FFFFFF` | Pure White |
| **Text Secondary** | `#A0A0A0` | Platinum Gray |

### Typography
- **Headings**: `Playfair Display` (Serif) - Weights: 700, 900. Used for elegance and authority.
- **Body/UI**: `Montserrat` (Sans-Serif) - Weights: 400, 500, 600. Used for readability and modern feel.

### Key UI Patterns
- **Glassmorphism**: Cards will use a 10px backdrop blur with a subtle white border (`1px solid rgba(255,255,255,0.1)`).
- **Glow Effects**: Gold buttons will have a `box-shadow: 0 0 20px rgba(212, 175, 55, 0.3)` on hover.
- **Masonry Gallery**: For the \"Student Transformation\" section to showcase visual work dynamically.

---

## 3. Technical Architecture

- **Framework**: React.js (via Vite) for a high-performance Single Page Application (SPA).
- **Styling**: Vanilla CSS with Modern Features (Custom Properties, Flexbox, CSS Grid).
- **Icons**: Lucide React / FontAwesome for clean, scalable iconography.
- **Animations**: CSS Transitions & Intersection Observer for scroll-triggered entry effects.
- **Forms**: Custom validation UI for the inquiry system.

---

## 4. Development Roadmap

### Phase 1: Setup & Core Styles
- [ ] Initialize Vite project and folder structure (`components`, `pages`, `assets`, `styles`).
- [ ] Implement `index.css` with global design tokens (CSS Variables).
- [ ] Create basic Layout wrapper with `Navbar` and `Footer`.

### Phase 2: Home Page - Above the Fold
- [ ] **Hero Section**: Implement full-screen video/image background with gold gradient overlays.
- [ ] **Floating Stats**: Glassmorphism cards with count-up animations.
- [ ] **Sticky Mobile Bar**: Bottom-docked CTA bar with Call/WhatsApp icons.

### Phase 3: Content Sections
- [ ] **Courses Section**: Build interactive cards with hover-to-reveal details.
- [ ] **Bento Grid Gallery**: Implement the practical training showcase using CSS Grid.
- [ ] **Testimonials**: Auto-playing slider with video preview modals.

### Phase 4: Sub-Pages & Interactive Features
- [ ] **Course Detail Page**: Implement syllabus accordions and pricing tables.
- [ ] **Gallery Page**: Filterable masonry grid with Lightbox integration.
- [ ] **Inquiry Form**: Build the contact section with floating labels and success states.

### Phase 5: Polish & SEO
- [ ] Implement scroll animations across all sections.
- [ ] Responsive audit (iPhone, iPad, Desktop testing).
- [ ] SEO Meta tags, Title optimization, and Alt text for all images.

---

## 5. Critical Conversion Features

> [!IMPORTANT]
> The following features are mandatory for meeting the \"Conversion-Focused\" requirement:
> 1.  **Sticky WhatsApp Button**: Floating bubble on the bottom right.
> 2.  **Free Demo CTA**: High-contrast gold button present in the Nav and Hero.
> 3.  **Before/After Slider**: Interactive UI in the Gallery to show student work impact.
> 4.  **Proof Points**: \"5000+ Students\" and \"Partner Salon Logos\" visible above the fold.

---

## 6. Visual Requirements
- **Hero Visual**: Professional stylist in action with a warm gold backlight.
- **Card Style**: Dark background, gold border-top, glass effect.
- **Animations**: Sections should slide up and fade in as the user scrolls.
