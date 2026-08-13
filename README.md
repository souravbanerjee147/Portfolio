# 🚀 Full-Stack Developer Portfolio

An engineering-focused, responsive full-stack developer portfolio designed to showcase projects, technical architecture, certifications, and direct recruitment communication channels. Built with **React**, **Tailwind CSS**, **Node.js**, **Express**, and integrated with **EmailJS** for contact delivery.

---

## 🌟 Key Features

* **⚡ Responsive & Adaptive UI:** Mobile-first layout with smooth transitions, custom responsive breakpoints, and custom navigation handling across mobile, tablet, and desktop viewports.
* **🎨 Theme Switching:** Support for **Light**, **Dark**, and **System Preference** display modes using CSS custom properties.
* **✉️ Direct Contact Integrations:**
  * Interactive contact form powered by **EmailJS** for instant client-side message forwarding to Gmail.
  * Native action links for **Email (`mailto:`)**, **Phone Call (`tel:`)**, and **WhatsApp Direct Chat (`wa.me`)**.
  * Custom centered modal overlays for real-time delivery status and failure/quota feedback (replacing native browser alerts).
* **📄 Resume Viewer:** Direct access link to view/download resume documents hosted via Google Drive preview configuration.
* **🌐 Custom Domain Setup:** Infrastructure configured for free developer subdomains via `is-a.dev` DNS automation.

---

## 🛠️ Tech Stack

### Frontend
* **Core:** React.js, JavaScript (ES6+)
* **Styling:** Tailwind CSS, Bootstrap Icons
* **HTTP & Integrations:** Axios, `@emailjs/browser`
* **Deployment:** Vercel

### Backend (Optional API / Microservices)
* **Runtime:** Node.js
* **Framework:** Express.js
* **Deployment:** Render

---

### 📁 Repository Structure

```text
portfolio/
├── frontend/                  # React Frontend Application
|   ├── public/                # contain all the files used throughout the project
│   ├── src/
│   │   ├── component/
│   │   │   ├── Header.jsx    # Responsive navigation & theme toggler
|   |   |   ├── Footer.jsx 
│   │   │   └── Body/
│   │   │       ├── Contact.jsx # Form handling & direct contact links
│   │   │       └── ...       # Projects, Certifications, About sections
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js / tailwind.config.js
│
└── backend/                   # Node.js / Express Backend (Optional API endpoints)
    ├── config
    ├── controllers/
    ├── routes/
    ├── model/
    ├── index.js
    ├── .env
    └── package.json
```


### ⚙️ Local Development Setup

Prerequisites
* Node.js (v18.x or higher)
* npm or yarn

1. Clone the Repository
```Bash
git clone https://github.com/souravbanerjee147/Portfolio.git
cd Portfolio
```

2. Frontend Setup
```Bash
cd frontend
npm install
npm run dev
```
The React development server will start locally (typically at http://localhost:5173).

3. Backend Setup (If running local backend API)
```Bash
cd ../backend
npm install
npm start
```
The Express server will start locally at http://localhost:8080.

---

### 📧 EmailJS Configuration

The contact form uses @emailjs/browser to transmit messages directly to Gmail without requiring backend server SMTP configurations.

Environment Credentials (Contact.jsx)
JavaScript
emailjs.send(
  'YOUR_SERVICE_ID',   // EmailJS Service ID (e.g., service_my2wdzv)
  'YOUR_TEMPLATE_ID',  // EmailJS Template ID (e.g., template_mubqpb5)
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'    // EmailJS Public Key
);

---

### 🚀 Deployment
Frontend: Deployed on Vercel with automatic continuous deployment triggered via main branch pushes.

Backend: Hosted on Render (Web Service).

Domain / DNS: Registered via is-a.dev GitHub DNS records pipeline (devstriks.is-a.dev).

👤 Author
Sourav Banerjee

Portfolio: https://souravbanerjeeportfolio.vercel.app/

GitHub: @souravbanerjee147

Email: souravayrah1@gmail.com

--------------------------------------------------------------------------------------------------------------------------------------------
