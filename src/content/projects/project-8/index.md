---
title: "E-commerce Store"
summary: "A clean and modern full-stack e-commerce platform with React (Vite) frontend and Laravel (SQL) backend, designed for easy product, order, and user management."
date: "Jun 07 2025"
draft: false
tags:
- React
- Vite
- Laravel
- SQL
- Tailwind CSS
- Material UI
- Shadcn
---

![E-commerce Dashboard](public/ecommerce.png)

**HODOCOLLECTION** is a modern **full-stack e-commerce platform** combining a **React.js (Vite)** frontend with a **Laravel + SQL** backend.  
It delivers a **smooth shopping experience** with product browsing, secure checkout, and an intuitive admin panel.  

---

## <kbd>✨ Features</kbd>
- 🛍️ **Product Management** – Add, edit, categorize, and filter products easily.  
- 🔐 **Authentication** – Secure login/registration powered by **Laravel Sanctum**.  
- 🛒 **Shopping Cart & Checkout** – Real-time cart updates and simple checkout flow.  
- 📊 **Admin Dashboard** – Manage products, users, and orders in one place.  
- 🎨 **Modern UI/UX** – Built with **Tailwind CSS**, **Material UI**, and **Shadcn UI**.  
- ⚡ **Fast & Scalable** – Optimized frontend with **React (Vite)** and **REST APIs**.  

---

## <kbd>🛠️ Tech Stack</kbd>
- **Frontend:** React.js (Vite), Tailwind CSS, Material UI, Shadcn UI  
- **Backend:** Laravel, SQL Database  
- **Authentication:** Laravel Sanctum  
- **Styling/UI:** Tailwind CSS, Material UI, Shadcn UI  

---

## <kbd>🚀 Getting Started</kbd>

### Prerequisites
- Node.js (v16+)  
- Composer  
- PHP (v8+)  
- MySQL / SQL Database  

---

### Installation

#### <kbd>Frontend (React + Vite)</kbd>
```bash
# Clone repository
git clone https://github.com/hussainanjan5/hodocollection.git

# Navigate to frontend
cd hodocollection/frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend will run at → <kbd>http://localhost:5173/
</kbd>

<kbd>Backend (Laravel)</kbd>

```bash
# Navigate to backend
cd hodocollection/backend

# Install PHP dependencies
composer install

# Setup environment
cp .env.example .env

# Generate app key
php artisan key:generate

# Run migrations
php artisan migrate

# Start local server
php artisan serve
```

Backend will run at → <kbd>http://localhost:8000/
</kbd>