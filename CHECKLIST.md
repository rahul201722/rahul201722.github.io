# Post-Redesign Checklist

## Immediate Actions Required

### 1. Add Profile Image
- [ ] Replace `/public/profile.jpg` with your actual photo
- [ ] Recommended size: 400x400px or larger
- [ ] Format: JPG or WebP for best performance

### 2. Add Research Figures
- [ ] Add `/public/paper_1_architecture.jpg`
- [ ] Add `/public/paper_2_architecture.jpg`
- [ ] Or update paths in `src/content.js` if images are elsewhere

### 3. Test the Website
- [ ] Open http://localhost:5173 in browser
- [ ] Test all navigation links
- [ ] Click all CTA buttons (Email, LinkedIn, GitHub)
- [ ] Test "Read more" buttons on projects
- [ ] Check mobile responsiveness (resize browser)
- [ ] Test keyboard navigation (Tab key)
- [ ] Verify all links work

### 4. Update Content (if needed)
- [ ] Review all text in `src/content.js`
- [ ] Update contact information
- [ ] Add/remove publications
- [ ] Update experience details
- [ ] Modify project descriptions

## Optional Enhancements

### SEO & Meta Tags
- [ ] Update `index.html` with proper meta tags
- [ ] Add Open Graph tags for social sharing
- [ ] Add favicon
- [ ] Create `robots.txt` and `sitemap.xml`

### Performance
- [ ] Run `npm run build` to test production build
- [ ] Test built site with `npm run preview`
- [ ] Check bundle size
- [ ] Optimize images (use WebP format)

### Analytics
- [ ] Add Google Analytics or alternative
- [ ] Set up conversion tracking for contact button

### Deployment
- [ ] Build for production: `npm run build`
- [ ] Deploy `dist/` folder to your hosting
- [ ] Test deployed site
- [ ] Update DNS if needed

## Testing Checklist

### Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Test portrait and landscape

### Accessibility
- [ ] Test with screen reader
- [ ] Navigate with keyboard only
- [ ] Check color contrast
- [ ] Test with reduced motion enabled

## Known Issues to Check

1. **Profile Image**: If missing, will show broken image
2. **Research Figures**: If missing, will show broken image
3. **External Links**: Verify all URLs are correct

## Deployment Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy (depends on your hosting)
# For GitHub Pages:
# npm run build && git add dist -f && git commit -m "Deploy" && git push
```

## Rollback Instructions

If you need to revert to the old design:

```bash
# Restore old App.jsx
mv src/App.old.jsx src/App.jsx

# Restore old styles in main.jsx
# Change: import './index.css'
# To: import './styles.css'
```

## Support

If you encounter any issues:
1. Check browser console for errors (F12 > Console)
2. Verify all images exist in `/public` folder
3. Check `src/content.js` for any typos
4. Ensure all npm dependencies are installed: `npm install`

---

**Status**: ✅ Website is running at http://localhost:5173
**Next**: Complete the checklist above before deploying to production
