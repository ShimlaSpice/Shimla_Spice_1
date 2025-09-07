# Shimla Spice – Website

Shimla Spice is a homemade pickle brand website, designed to showcase our story, health benefits of pickles, customer reviews, and allow visitors to connect with us.

---

## 🌐 Live Features

### 🎨 Design & Layout
- Clean minimal UI with slightly off-white background.
- Responsive **navigation bar** with mobile menu toggle.
- **Hero Section** with floating blob + sparkle animation for a premium touch.
- **Slideshow** on homepage to highlight brand story and visuals.

### 📌 Main Sections
1. **Our Story** → Brand intro with slideshow & cards  
2. **Benefits** → 9 health benefits of pickles in card format  
3. **Reviews** → Customer testimonials with responsive images  
4. **Contact Us** → Fully functional form (Formspree integration)

---

## 📬 Contact Form
- Integrated with **Formspree API**.  
- Submits without page reload (AJAX).  
- Shows success/error messages.  
- Redirects back to homepage automatically after 5 seconds.  
- Backup option to email directly: `hello.shimlaspice@gmail.com`.

---

## ⚙️ JavaScript Features
- **Slideshow autoplay** with active slide management.  
- **Mobile Menu Toggle** for small screens.  
- **Contact Form AJAX Handler** with validation & redirect.  
- **Recipe Roulette Function (unused for now):**
  - Returns a random recipe suggestion.
  - Can be enabled later via a button.

---

## ✅ Fixes & Improvements
- Corrected unclosed `<p>` tags in benefits section.
- Fixed typo: “Comming Soon” → **Coming Soon**.
- Ensured only the **first slideshow image** has `active` class.
- Made review images responsive (`max-width: 100%; height: auto;`).
- Corrected footer links (`#benefits`, `#contact`).

---

## ⚠️ Pending / Optional
- **Recipe Roulette**: Function exists but UI integration pending.  
- **Mobile menu resize sync**: Can be improved for smoother UX.  
- **Products Section**: Currently shows "Coming Soon".  
- **Cleanup**: Unused JS functions may be removed in future.  

---

## 🔑 Notes for Future Developers
- Pure **HTML / CSS / JS** (no external frameworks).  
- All CSS is written in `<style>` blocks inside the HTML.  
- All JavaScript included at the bottom of HTML file.  
- Easy migration possible to frameworks like **React / Vue** later.  

---

## 📌 Commit Message Suggestion
