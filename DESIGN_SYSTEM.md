# Visual Design Reference

## Color Palette

```css
/* Primary Colors */
--primary: #18181B      /* Dark text, headings */
--secondary: #3F3F46    /* Medium gray, subtext */
--accent: #2563EB       /* Blue, CTAs, links */
--background: #FAFAFA   /* Off-white background */
--text: #09090B         /* Body text */
--border: #E4E4E7       /* Borders, dividers */
```

## Typography Scale

```css
/* Headings */
h1: 4xl-7xl (2.25rem - 4.5rem) - Poppins Bold
h2: 3xl-4xl (1.875rem - 2.25rem) - Poppins SemiBold
h3: xl-2xl (1.25rem - 1.5rem) - Poppins SemiBold
h4: lg (1.125rem) - Poppins SemiBold

/* Body */
body: base (1rem) - Open Sans Regular
small: sm (0.875rem) - Open Sans Regular
```

## Spacing System

```css
/* Consistent spacing using Tailwind scale */
Gap between sections: py-20 (5rem)
Card padding: p-6 md:p-8 (1.5rem - 2rem)
Button padding: px-6 py-3 (1.5rem x 0.75rem)
Section max-width: max-w-6xl (72rem)
Container padding: px-6 (1.5rem)
```

## Component Styles

### Hero Section
- Full viewport height
- Centered content
- Gradient background (white to blue-50)
- Large profile image (32-40)
- Three CTA buttons with icons

### Navigation
- Fixed position, top-4
- Floating design with backdrop blur
- Rounded full corners
- Active state highlighting

### Cards
- White background
- Border with subtle shadow
- Rounded-xl corners
- Hover effects (shadow increase)
- Consistent padding

### Buttons
- Primary: Blue background, white text
- Secondary: Blue border, blue text
- Hover: Darker shade
- Icons on the left
- Font weight: 600 (semibold)

## Responsive Breakpoints

```css
/* Mobile First */
default: 320px+
md: 768px+
lg: 1024px+
xl: 1280px+
```

## Animation Timing

```css
/* Consistent transitions */
transition-colors: 200ms
transition-shadow: 200ms
hover-scale: none (avoid layout shift)
```

## Icon Guidelines

- Use SVG icons only (no emojis)
- Size: w-5 h-5 (1.25rem) for inline
- Size: w-6 h-6 (1.5rem) for buttons
- Color: currentColor or text-accent
- Stroke width: 2 for outlined icons

## Best Practices Applied

✅ No emoji icons - only SVG
✅ All clickable elements have cursor-pointer
✅ Smooth color transitions (not scale)
✅ Sufficient contrast ratios (WCAG AA)
✅ Visible borders in light mode
✅ Floating nav has proper spacing (top-4)
✅ Reduced motion media query
✅ Semantic HTML tags
✅ ARIA labels for accessibility
