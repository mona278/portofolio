# Mona Sayed Mohamed Emba — Developer Portfolio

A modern, responsive developer portfolio website designed and built for **Mona Sayed Mohamed Emba**, Junior Software Developer.

![Portfolio Preview Banner](assets/images/mona-profile.jpg)

---

## 🌟 Overview & Highlights

- **Professional Identity**: Junior Software Developer studying at Damietta University, ITI .NET graduate (144 hrs), and DEPI Data Engineering Track trainee.
- **Modern Dark Tech Design**: Deep navy / near-black palette (`#070a12`, `#0f172a`), elegant teal, cyan, and violet accents, modern typography (*Plus Jakarta Sans* & *Inter*), and subtle glowing glassmorphism.
- **Authentic Project Showcases**:
  - **Starlight Cinemas**: Cinema discovery and ticket-booking web application built with C#, ASP.NET Core MVC, Razor Views, and Tailwind CSS. Showcases movie discovery, showtimes, interactive seat selection, payment checkout, digital QR admission passes, and layered architecture.
  - **Rafeeq (رفيق)**: Arabic-first healthcare and caregiving web application prototype for elderly and chronic patients with vital sign indicator cards (blood pressure, blood glucose, pulse), clinic visit tracking, and emergency support.
- **Interactive Lightbox & Screenshot Gallery**: Fullscreen accessible modal with thumbnail preview switching, keyboard arrow navigation (`←` / `→`), and `Esc` close behavior.
- **Accredited Certifications**: Verified Information Technology Institute (ITI) 144-hour Web Development using .NET certificate preview with high-resolution inspection.
- **Freelance & Social Profiles**: Direct, verified links to Khamsat, Mostaql, Freelancer, Upwork, GitHub, and LinkedIn.
- **Interactive Contact Form**: Real-time validation for name, email pattern, subject, and message, with automated `mailto:` pre-filling and 1-click clipboard copy.
- **Zero Build Toolchain Required**: Pure HTML5, modern CSS3, and ES6 JavaScript. Runs instantly in any browser and deploys seamlessly to GitHub Pages.

---

## 📂 Project Structure

```text
portfolio/
├── index.html                   # Main semantic website markup
├── README.md                    # Project documentation & deployment guide
├── css/
│   ├── style.css                # Design system variables, layout, components, typography
│   └── animations.css           # Keyframe animations, glow effects, scroll reveals
├── js/
│   ├── main.js                  # Navigation, scrollspy, header states, UX interactions
│   ├── projects-data.js         # Structured data for projects, galleries, and credentials
│   ├── gallery-modal.js         # Accessible fullscreen lightbox with keyboard navigation
│   └── contact-form.js          # Client-side form validation and mailto workflow
└── assets/
    ├── docs/
    │   └── README_CV.txt        # Guide for adding your PDF resume (Mona-Sayed-CV.pdf)
    └── images/
        ├── mona-profile.jpg     # Hero portrait photo
        ├── iti-certificate.jpg  # Official ITI completion certificate photo
        ├── starlight-*.png      # 5 authentic screenshots of Starlight Cinemas
        └── rafeeq-*.png         # 5 authentic screenshots of Rafeeq
```

---

## 🚀 How to Run Locally

### Option 1: Direct Opening (Easiest)
Simply double-click `index.html` in your file explorer, or right-click `index.html` and select **Open with Google Chrome** (or Edge/Firefox).

### Option 2: Python Local Server (Recommended)
Open PowerShell or your terminal in this directory (`c:\Users\MANSY\Desktop\portfolio`):
```powershell
python -m http.server 8000
```
Then open your browser and navigate to:
```text
http://localhost:8000
```

### Option 3: VS Code Live Server
If you use Visual Studio Code:
1. Install the **Live Server** extension (by Ritwick Dey).
2. Right-click `index.html` and click **Open with Live Server**.

---

## 🌐 How to Publish Online with GitHub Pages

You can publish this portfolio for free in just a few minutes using **GitHub Pages**:

### Step 1: Initialize Git and Commit
Open PowerShell in the `portfolio` folder:
```powershell
# Navigate to the portfolio folder
cd c:\Users\MANSY\Desktop\portfolio

# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: professional developer portfolio for Mona Sayed Mohamed Emba"
```

### Step 2: Create a New GitHub Repository
1. Log in to your GitHub account: [github.com/mona278](https://github.com/mona278).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Repository name: enter `portfolio` (or `mona278.github.io`).
4. Set visibility to **Public**.
5. Leave "Add a README file" unchecked (we already have one).
6. Click **Create repository**.

### Step 3: Push Your Code to GitHub
Copy and run the commands shown on GitHub:
```powershell
git remote add origin https://github.com/mona278/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your GitHub repository, click on **Settings** (top menu tab).
2. In the left sidebar, click on **Pages** (under "Code and automation").
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main`, and folder `/ (root)`.
   - Click **Save**.
4. Wait about 60–90 seconds. GitHub will display a message at the top:
   > *"Your site is live at https://mona278.github.io/portfolio/"*

---

## 📝 How to Update Your Information Later

- **Adding Your CV PDF**:
  Place your PDF file in `assets/docs/` and name it `Mona-Sayed-CV.pdf`. The "Download CV" buttons will instantly download it.
- **Updating Screenshots**:
  Replace any image in `assets/images/` or add new project items inside `js/projects-data.js` and `index.html`.
- **Contact Details**:
  Your contact email `monaemba196@gmail.com` and freelance profiles are configured in `index.html` and `js/contact-form.js`.

---

## 📄 License & Credits
© 2026 Mona Sayed Mohamed Emba. All rights reserved.
Built with clean semantic HTML5, modern CSS3, and vanilla JavaScript.
