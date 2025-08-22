# NextJS Product Management App

A simple Next.js 15 application demonstrating public and protected pages with basic authentication using NextAuth.js. Users can browse products, view details, and add new products after logging in.

---

## Features

### Public Pages
- **Landing Page (`/`)**
  - Includes Navbar, Hero, Product Highlights, and Footer
  - Navigation to Login and Products
  - No authentication required

- **Product List (`/products`)**
  - Fetches and displays a list of products from a mock backend
  - Each product shows name, description, price, and a "Details" button

- **Product Details (`/products/[id]`)**
  - Shows full details of a single product
  - Publicly accessible

### Authentication
- **Login Page (`/login`)**
  - Social login (Google) or credential login using NextAuth.js
  - Redirects to `/products` after successful login

### Protected Pages
- **Add Product (`/dashboard/add-product`)**
  - Accessible only to authenticated users
  - Form to add a new product
  - Stores product data in backend
  - Redirects unauthenticated users to login

### Optional Enhancements
- Loading spinner on form submissions
- Toast notifications on successful product addition
- Theme toggle (light/dark mode)

---

## Technologies Used
- [Next.js 15](https://nextjs.org/) (App Router)
- [NextAuth.js](https://next-auth.js.org/) for authentication
- Route Handlers (/api) for backend operations
- Tailwind CSS for styling (optional)
- Optional: React Toastify for notifications

---

## Project Structure

