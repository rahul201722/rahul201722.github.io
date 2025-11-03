# Academic CV Website - Hugo

This is a modern, professional academic CV website built with Hugo using the DevResume theme.

## Features

- Clean, professional design optimized for academic CVs
- Fully responsive layout for all devices
- Fast static site generation with Hugo
- Easy to customize via TOML configuration
- Automatic deployment to GitHub Pages via GitHub Actions
- SEO-friendly structure

## Structure

The site includes comprehensive sections:
- Professional Summary
- Research Interests
- Education
- Research & Industry Experience
- Publications (Published & Under Review)
- Technical Skills (Programming, ML/DL, DevOps)
- Projects
- Key Achievements
- Awards & Honors
- Contact Information & Social Links

## Deployment

This site is automatically deployed to GitHub Pages at: https://rahul201722.github.io/

The deployment is handled by GitHub Actions (see `.github/workflows/hugo.yml`). Every push to the `main` branch triggers an automatic build and deployment.

## Local Development

### Prerequisites
- Hugo Extended v0.152.2+ ([Installation Guide](https://gohugo.io/installation/))

### Running Locally

```bash
# Clone with submodules (for theme)
git clone --recursive https://github.com/rahul201722/rahul201722.github.io.git

# Or if already cloned, initialize submodules
git submodule update --init --recursive

# Navigate to the directory
cd rahul201722.github.io

# Start Hugo development server
hugo server

# Or with drafts enabled
hugo server -D
```

Then visit `http://localhost:1313` in your browser.

### Building for Production

```bash
hugo --gc --minify
```

The built site will be in the `public/` directory.

## Customization

### Updating CV Information

All content is managed through `hugo.toml`. To update your CV:

1. **Personal Information**: Edit the `[params.profile]` and `[params.contact]` sections
2. **Summary**: Modify `[params.summary]`
3. **Experience**: Add/edit entries in `[[params.experience.list]]`
4. **Education**: Update `[[params.education.list]]`
5. **Skills**: Modify skill categories in `[[params.skills.list]]`
6. **Publications**: Edit entries in `[params.information]`
7. **Projects**: Add/modify `[[params.projects.list]]`

### Updating Profile Photo

Replace `static/profile.jpg` with your photo.

### Updating CV PDF

Replace `static/Rahulranjan_CV.pdf` with your latest CV PDF.

### Theme Customization

The theme is located in `themes/devresume/`. You can override any theme files by creating the same file structure in the root directory under `layouts/`.

## GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy on push to main

## Theme

This site uses the [DevResume Hugo Theme](https://github.com/cowboysmall-tools/hugo-devresume-theme) - a professional resume/CV theme designed for developers and researchers.

## License

This project is open source and available under the [MIT License](LICENSE).