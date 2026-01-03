# 🐾 PawBuddy – Pet Adoption & Pet Care Marketplace (Frontend)

PawBuddy is a web-based pet adoption and pet care marketplace designed to help users adopt pets, shop for pet food and accessories, and manage pet-related activities from a single platform.  
The application focuses on a friendly user experience, secure authentication, and responsive design to create a smooth and heart-warming pet care journey.

## 🚀 Live Project

- **Live Website:** https://pawbuddy-check.netlify.app/

## 🛠️ Technology Stack

### Frontend
- React.js (Vite)
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- React Router DOM
- Axios / Fetch API

### Authentication & Hosting
- Firebase Authentication
- Netlify

## ✨ Core Features

- 🐶 **Pet Adoption System**  
  Browse pets available for adoption, view detailed pet profiles, and adopt pets through protected routes (login required)

- 🛒 **Pet Shop & Accessories**  
  Explore pet food, toys, grooming items, and accessories with category-based filtering and product detail pages

- 👤 **Authentication & User Dashboard**  
  Email/Password login, Google login, persistent authentication using Firebase, and user profile management

- 📝 **User Actions & Order Management**  
  Add pet listings, manage orders, view “My Orders”, and download order history as a PDF

- 🎨 **UI & User Experience**  
  Clean pet-themed design, animated sliders and banners, responsive layout, elegant navigation, and a custom 404 page

- 🔐 **Security & Route Protection**  
  Environment variables for Firebase keys and protected routes using React Router

## 📦 Dependencies Used

- react
- react-dom
- react-router-dom
- firebase
- axios
- tailwindcss
- daisyui
- react-toastify
- sweetalert2
- jspdf

## 🧑‍💻 Run the Project Locally

1. To run the PawBuddy frontend locally, ensure that **Node.js (v16 or later)** and **npm** are installed on your system. Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/khondhokersazzad/pawbuddy.git
cd pawbuddy

2.Install the required dependencies:
npm install

3. Create a .env.local file in the root directory and add the following environment variables:

VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

4. Make sure the backend server is running locally or that the API URL points to a deployed backend service. Start the development server:

npm run dev

5. The application will be available at:

http://localhost:5173
