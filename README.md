# Professional Portfolio Website

A modern, responsive, and feature-rich portfolio website built with HTML, CSS, and JavaScript. Showcases projects, skills, experience, and education with smooth animations and an elegant design.

## 🎨 Features

### Design & Layout
- **Modern Glassmorphism Design** - Contemporary UI with frosted glass effects
- **Gradient Color Scheme** - Beautiful purple, pink, and blue gradients
- **Responsive Layout** - Fully responsive design that works on all devices
- **Smooth Animations** - CSS animations and transitions throughout
- **Interactive Elements** - Hover effects and dynamic interactions

### Sections
1. **Navigation Bar** - Fixed navigation with smooth scroll
2. **Hero Section** - Eye-catching landing with CTA buttons
3. **About Section** - Personal introduction with statistics
4. **Skills Section** - Technical skills organized by category
5. **Experience Timeline** - Professional experience with timeline view
6. **Projects Showcase** - Featured projects with descriptions and links
7. **Education** - Educational background and certifications
8. **Contact Form** - Functional contact form with validation
9. **Footer** - Quick links and copyright information

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE

### Installation
1. Clone or download the portfolio files
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`

3. Open `index.html` in your web browser

## 🎯 Customization Guide

### 1. Personal Information
Edit these fields in `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">Your Name</span></h1>
<p class="hero-subtitle">Your Title | Your Focus | Your Specialty</p>

<!-- Contact Information -->
<a href="mailto:youremail@example.com">youremail@example.com</a>
<a href="tel:+91-1234567890">+91 1234567890</a>
```

### 2. Add Your Images
Replace placeholder images:
- Remove the `.placeholder-image` elements
- Add `<img>` tags with your images
- Update the image paths

```html
<!-- Example: Hero Image -->
<div class="hero-image">
    <img src="your-profile-image.jpg" alt="Your Name" class="profile-img">
</div>
```

### 3. Update Skills
Edit the skills section in `index.html`:

```html
<div class="skill-category">
    <h3 class="category-title">Your Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
        <span class="skill-tag">Skill 3</span>
    </div>
</div>
```

### 4. Update Experience
Modify the experience timeline:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3 class="timeline-title">Your Job Title</h3>
        <p class="timeline-company">Company Name</p>
        <p class="timeline-date">Start Date - End Date</p>
        <p class="timeline-description">Job description...</p>
    </div>
</div>
```

### 5. Add Projects
Update the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-tags">
            <span>Tech 1</span>
            <span>Tech 2</span>
        </div>
        <div class="project-links">
            <a href="github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="live-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### 6. Customize Color Scheme
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;        /* Main brand color */
    --secondary-color: #764ba2;      /* Secondary accent */
    --tertiary-color: #f093fb;       /* Light accent */
    --accent-color: #4facfe;         /* Additional accent */
    --dark-bg: #0f0f1e;              /* Dark background */
    --light-bg: #f8f9ff;             /* Light background */
    --text-dark: #1a1a2e;            /* Dark text */
    --text-light: #ffffff;           /* Light text */
    --text-muted: #6c757d;           /* Muted text */
}
```

### 7. Customize Fonts
Update Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
```

Available font weights:
- **Poppins**: Used for body text (300, 400, 600, 700, 800)
- **Space Mono**: Used for code-like elements (400, 700)
- **Playfair Display**: Used for headings (700, 800)

## 🔧 Advanced Customization

### Add Dark Mode Toggle
The JavaScript includes theme functionality. Uncomment and customize:

```javascript
// In your HTML, add:
<button onclick="toggleTheme()" class="theme-toggle">🌙</button>

// In styles.css, add:
[data-theme="dark"] {
    --text-dark: #ffffff;
    --text-light: #1a1a2e;
    --light-bg: #0f0f1e;
    /* ... other dark mode variables ... */
}
```

### Modify Animation Speeds
Adjust timing in `styles.css`:

```css
:root {
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);      /* Change 0.3s */
    --transition-fast: all 0.15s ease;                        /* Change 0.15s */
    --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* Change 0.5s */
}
```

### Form Submission
Currently, the form shows a success message but doesn't send data. To enable email:

1. Use a service like **Formspree**, **Netlify Forms**, or **EmailJS**
2. Update the form handler in `script.js`

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST" class="contact-form">
    <!-- form fields -->
</form>
```

## 📊 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🎬 Animation Classes

The website includes several reusable animation classes:

- `fadeInUp` - Fade in with upward movement
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `float` - Floating motion
- `bounce` - Bouncing motion
- `shimmer` - Shimmer effect
- `gradientShift` - Gradient brightness shift

Apply animations to custom elements:
```css
.custom-element {
    animation: fadeInUp 0.6s ease-out;
}
```

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: Below 480px

## 🚀 Performance Tips

1. **Optimize Images**
   - Use modern formats (WebP)
   - Compress images (use TinyPNG)
   - Use responsive images

2. **Lazy Loading**
   - Add `data-src` attribute to images
   - JavaScript handles lazy loading automatically

3. **Minify Code** (for production)
   - Use CSS/JS minifiers
   - Remove unused CSS

4. **Caching**
   - Set proper cache headers
   - Use CDN for static files

## 📝 SEO Optimization

Update meta tags in `index.html`:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
```

## 🎯 Social Media Links

Update social links in the hero section:

```html
<a href="https://github.com/yourprofile" class="social-icon">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/yourprofile" class="social-icon">
    <i class="fab fa-linkedin"></i>
</a>
```

## 🐛 Troubleshooting

### Animations not working
- Check browser compatibility
- Ensure CSS file is loaded
- Clear browser cache

### Images not showing
- Verify image paths are correct
- Check image file formats
- Ensure images are in the same directory

### Form not working
- Verify form validation
- Check browser console for errors
- Ensure all input fields are properly named

## 📄 License

This portfolio template is free to use and modify for personal or commercial projects.

## 🤝 Support

For issues or customization help:
1. Check the file structure
2. Review console for errors (F12)
3. Verify all files are in the same directory
4. Ensure CSS and JS files are linked in HTML

## 🎓 Learning Resources

- [CSS Tricks](https://css-tricks.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)

---

**Happy Portfolio Building! 🚀**

Feel free to customize this template to match your personal brand and showcase your work!
