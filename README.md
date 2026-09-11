# Akash Vashista - GitHub Pages Profile Website

Clean, modern, and high-performance developer portfolio website for **Akash Vashista**, Senior QA Automation Engineer. Built with semantic HTML5, modern vanilla CSS3 (featuring Apple iOS frosted glass transparency) and lightweight vanilla JavaScript.

Zero build dependencies — 100% native static hosting on GitHub Pages.

---

## Live Site URL
- **GitHub Pages**: `https://skyvas.github.io/` (or repository-specific URL)

---

## Features
- **Apple iOS Frosted Glass & Transparency**: Translucent cards (`backdrop-filter: blur(24px)`), ambient backlight orbs, 1px subtle hairline borders, and smooth squircles.
- **Key Sections**:
  - **About**: Executive summary of 6+ years in QA automation, enterprise consulting, and cloud resilience.
  - **Projects**: Showcase of open-source engineering, featuring the Playwright Automation Framework & QA Agent Scaffold.
  - **Core Strengths**: 4-column widget grid (UI/API Automation, AI-Assisted Testing, Cloud & Resilience, CI/CD & Agile QA).
  - **Professional Experience**: History at Plato (ESDC, Nutrien, AMD Silo AI), Imperva (Cybersecurity Data Security Fabric), and Wipro.
  - **Education**: Master of Science (Western University) & Bachelor of Technology.
  - **Direct Actions**: Direct email (`mailto:`) and phone (`tel:`) communication actions, direct resume PDF download.

---

## How to Publish to GitHub Pages

1. **Push this repository to GitHub**:
   ```bash
   # Add remote origin if not already added
   git remote add origin https://github.com/skyvas/skyvas.github.io.git
   # Or for a sub-repository (e.g. github-profile)
   # git remote add origin https://github.com/skyvas/github-profile.git

   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/skyvas/<repo-name>`
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**
   - Under **Branch**, select `main` and folder `/ (root)`
   - Click **Save**
   - Your site will be live within 60 seconds!

---

## Local Development
Run a local static server using Python:
```bash
python3 -m http.server 8080
```
Open `http://localhost:8080` in your browser.
