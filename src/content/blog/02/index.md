---
title: "Building an E-Commerce Store with Laravel Backend + React Frontend"
summary: "A step-by-step guide to building an e-commerce store using Laravel for the backend, React with Tailwind CSS for the frontend, and an admin portal for product management."
date: "September 26, 2025"
draft: false
tags:
- Tutorial
- Laravel
- React
- Tailwind CSS
- APIs
- E-Commerce
---

### Introduction

In this tutorial, I'll walk you through building a full-stack e-commerce store using Laravel for the backend, React with Tailwind CSS for the frontend, and an admin portal for managing products. We'll create RESTful APIs with Laravel, connect them to a React frontend, and deploy the app using Vercel.

### Why This Tech Stack?

- **Laravel**: A robust PHP framework with an elegant ORM (Eloquent) for database management
- **React**: A flexible library for building dynamic, component-based UIs
- **Tailwind CSS**: A utility-first CSS framework for rapid, responsive styling
- **MySQL**: A reliable relational database for storing products and orders
- **Vercel**: Simplifies deployment for the React frontend
- **Git/GitHub**: For version control and collaboration

### Prerequisites

- PHP  <kbd>8.1+</kbd>, Composer, and Laravel 10
- <kbd>Node.js </kbd>18+ and npm
- MySQL database
- Basic knowledge of Laravel, React, and Git

### Step 1: Setting Up the Laravel Backend

#### Initialize Laravel Project

Create a new Laravel project and navigate into it:

```bash
composer create-project laravel/laravel ecommerce-backend
cd ecommerce-backend

Output:
A new Laravel project is created with the folder structure, and you're now in the ecommerce-backend directory.
```
Configure MySQL Database
Update the <kbd>.env</kbd> file with your MySQL credentials:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ecommerce
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations to set up the database:
 ```bash
 php artisan migrate
 ```
 Output:
 ```bash
 Migration table created successfully.
Migrated: 2014_10_12_000000_create_users_table
Migrated: 2019_08_19_000000_create_failed_jobs_table
```
Create Product Model and Migration
Generate a Product model with a migration:
```bash
php artisan make:model Product -m
```

Output:

```bash
Model created successfully.
Created Migration: 2025_09_26_103900_create_products_table
```

Update the migration file <kbd>(database/migrations/2025_09_26_103900_create_products_table.php)</kbd>:

```bash
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->decimal('price', 8, 2);
            $table->integer('stock');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};
```

Run the migration:
```bash
php artisan migrate
```
Output:
```bash
Migrated: 2025_09_26_103900_create_products_table
```
<b>Create Product API Routes</b>
Define API routes in routes/api.php:

```bash
<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
```
<b>Create Product Controller</b>
Generate a controller for products:

```bash
php artisan make:controller ProductController
```
Output:
```bash
Controller created successfully.
```
Update <kbd>app/Http/Controllers/ProductController.php </kbd>:
```bash
<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        $product = Product::create($validated);
        return response()->json($product, 201);
    }
}
```
<b>Start Laravel Server</b>
Run the development server:

```bash
php artisan serve
```

Output:

```bash
Starting Laravel development server: http://127.0.0.1:8000
```

The backend API is now available at <kbd>http://127.0.0.1:8000/api/products</kbd>.

<b>Step 2: Setting Up the React Frontend with Vite</b>
Initialize React Project with Vite
Create a new React project using Vite and navigate into it:

```bash
npm create vite@latest ecommerce-frontend -- --template react
cd ecommerce-frontend
```

Output:
```bash
✓ Project name: ... 'ecommerce-frontend'
✓ Select a framework: › React
✓ Select a variant: › JavaScript
Scaffolding project in /path/to/ecommerce-frontend...
Done. Now run:
  cd ecommerce-frontend
  npm install
  npm run dev
  ```

  Install the project dependencies:

  ```bash
  npm install
```
<b>Install Required Dependencies </b>
Install React Router for navigation and Axios for API calls

```bash
npm install react-router-dom axios
```

<b> Install and Configure Tailwind CSS </b>
Install Tailwind CSS and its peer dependencies:

```bash
Install and Configure Tailwind CSS
```

Output:

```bash
Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
```

Update <kbd>tailwind.config.js</kbd> to include your template paths:

```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Replace the contents of <kbd>src/index.css</kbd> with the Tailwind directives:

 ```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
``` 

<b>Create the Product List Component</b>
Create <kbd>src/components/ProductList.jsx</kbd>:

```bash
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with your Laravel API endpoint
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center p-8">Loading products...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-green-600 font-bold text-lg">${product.price}</p>
            <p className="text-sm text-gray-500">In Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
```

<b>Set Up Routing and Update Main App Component</b>
Update <kbd>src/App.jsx</kbd> to set up routing and include the navigation bar

```bash
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import AdminPortal from './components/AdminPortal';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-xl font-bold">MyStore</Link>
            <div>
              <Link to="/" className="mr-4 hover:text-gray-300">Home</Link>
              <Link to="/admin" className="hover:text-gray-300">Admin</Link>
            </div>
          </div>
        </nav>

        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

<b>Start the Vite Development Server</b>
Run the development server:

```bash
npm run dev
```
Output:

```bash
  VITE v5.0.0  ready in 320 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ```

Your React frontend is now running on <kbd>http://localhost:5173</kbd> and will fetch product data from your Laravel backend API

<b>Step 3: Building the Admin Portal</b>
Create Admin Route in Laravel
Add an admin route to create products in <kbd>routes/api.php</kbd>:

```bash
Route::post('/admin/products', [ProductController::class, 'store']);
```
<b>Create Admin Component in React</b>
Create <kbd>src/components/AdminPortal.tsx</kbd>:

```bash
import React, { useState } from 'react';

const AdminPortal: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Product added successfully!');
      setFormData({ name: '', description: '', price: 0, stock: 0 });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Portal</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <label className="block text-sm font-medium mt-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <label className="block text-sm font-medium mt-2">Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            className="w-full p-2 border rounded"
          />
          <label className="block text-sm font-medium mt-2">Stock</label>
          <input
            type="number"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
```

Update <kbd>src/App.tsx</kbd> to include a simple navigation:

```bash
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css';
import ProductList from './components/ProductList';
import AdminPortal from './components/AdminPortal';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 text-white p-4">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

Install react-router-dom:

Update src/App.tsx to include a simple navigation:

```bash
npm install react-router-dom
```
Output:
```bash
+ react-router-dom@6.26.1
added 1 package
```

<b>Step 4: Version Control with Git</b>
Initialize a Git repository and push to GitHub:

```bash
# In ecommerce-backend
git init
git add .
git commit -m "Initial commit for Laravel backend"
git remote add origin https://github.com/yourusername/ecommerce-backend.git
git push -u origin main

# In ecommerce-frontend
git init
git add .
git commit -m "Initial commit for React frontend"
git remote add origin https://github.com/yourusername/ecommerce-frontend.git
git push -u origin main
```

<b>Step 5: Deploying to Vercel</b>
Deploy the React frontend to Vercel:

> Push the frontend code to a GitHub repository
> Log in to Vercel, create a new project, and connect your GitHub repository
> Configure the build settings (use default React settings)
> Deploy the app

<b>Challenges and Lessons Learned</b>

- CORS Issues: I added the cors middleware in Laravel to allow requests from the React frontend
- Type Safety: Using TypeScript in React ensured type-safe API responses, catching errors early
- Styling: Tailwind CSS's utility classes made it easy to create a responsive grid for products and a clean admin form

<!-- Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session. -->