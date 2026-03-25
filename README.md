# 🎨 AI Text-to-Image Generator SaaS (MERN + Clipdrop)

A full-stack **AI-powered SaaS application** that converts text prompts
into images using **Clipdrop API**.\
The platform includes **authentication, credit-based image generation,
pricing plans, and downloadable AI images**.

------------------------------------------------------------------------

# 🚀 Features

## 🏠 Homepage

-   Modern landing page with animated hero section
-   Step-by-step explanation of the platform
-   Testimonials section
-   Call-to-action **Generate Image** button

## 🎨 AI Image Generation

-   Generate images from **text prompts**
-   Integrated with **Clipdrop AI API**
-   Loading indicator during generation
-   Results page displaying generated images
-   Download generated images

## 💳 Credit System

-   Each image generation **consumes credits**
-   Users can view credit balance
-   Low-credit notifications
-   Credits stored in MongoDB

## 💰 Pricing Page

-   SaaS-style pricing plans
-   Users can purchase credits

## 🔐 Authentication

-   Custom **login/signup**
-   Secure routes using authentication middleware
-   User profile shown in navbar

## 📊 Dashboard

-   Display user credit balance
-   Generate images from prompts
-   Download generated images

------------------------------------------------------------------------

# 🛠 Tech Stack

## Frontend

-   React.js (Vite)
-   Tailwind CSS
-   React Router

## Backend

-   Node.js
-   Express.js

## Database

-   MongoDB

## Authentication

-   Custom authentication using JWT

## AI Integration

-   Clipdrop API for text-to-image generation

------------------------------------------------------------------------

# 🏗 System Architecture

    Frontend (React + Vite)
            │
            │ REST APIs
            ▼
    Backend (Node.js + Express)
            │
            ▼
    MongoDB Database
            │
            ├── Authentication System
            ├── Credit System
            └── Clipdrop AI Integration

------------------------------------------------------------------------

# 📂 Project Structure

    IMAGE_GENERATOR
    │
    ├── CLIENT
    │   ├── src
    │   │   ├── assets
    │   │   ├── components
    │   │   ├── context
    │   │   ├── pages
    │   │   ├── App.jsx
    │   │   ├── main.jsx
    │   │   └── index.css
    │
    ├── server
    │   ├── config
    │   ├── controllers
    │   │   ├── image.controller.js
    │   │   └── user.controller.js
    │   │
    │   ├── middlewares
    │   │   ├── auth.middleware.js
    │   │   └── auth2.middleware.js
    │   │
    │   ├── models
    │   │   └── userModel.js
    │   │
    │   ├── routes
    │   │   ├── image.route.js
    │   │   └── user.route.js
    │
    └── README.md

------------------------------------------------------------------------

# 📡 API Endpoints

## User Routes

  Method   Endpoint         Description
  -------- ---------------- --------------------
  POST     /user/register   Register user
  POST     /user/login      Login user
  GET      /user/credits    Get credit balance

Example:

``` javascript
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits', userAuth, userCredits);
```

------------------------------------------------------------------------

## Image Routes

  Method   Endpoint                Description
  -------- ----------------------- -------------------
  POST     /image/generate-image   Generate AI image

Example:

``` javascript
imageRouter.post('/generate-image', userAuth, generateImage);
```

------------------------------------------------------------------------

# ⚙️ Installation

## Clone Repository

    git clone https://github.com/keshav62/AI-Text-to-Image-Generator-SaaS-.git

## Install Dependencies

### Backend

    cd server
    npm install

### Frontend

    cd client
    npm install

------------------------------------------------------------------------

# 🔑 Environment Variables

Create `.env` file in **server folder**

    MONGO_URI=your_mongodb_connection
    JWT_SECRET=your_secret_key
    CLIPDROP_API_KEY=your_clipdrop_api_key

------------------------------------------------------------------------

# ▶️ Run Application

### Backend

    npm run server

### Frontend

    npm run dev

------------------------------------------------------------------------

# 🔮 Future Improvements

-   Image generation history
-   Stripe payment integration
-   AI style presets
-   User gallery
-   Admin dashboard

------------------------------------------------------------------------

# 👨‍💻 Author

**Keshav Singh**\

------------------------------------------------------------------------

