# FitZone

A full-stack fitness gym management and membership platform built with Node.js, Express, and MongoDB.

## 📋 Overview

FitZone is a web-based fitness management system that allows users to sign up, manage memberships, browse gym locations, view fitness plans, and handle account operations. The platform includes both user and admin functionalities for comprehensive gym management.

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose (v9.3.3)
- **Authentication**: bcrypt (v6.0.0) for password hashing
- **Email**: Nodemailer (v8.0.4) for email communications
- **HTTP Client**: Axios (v1.13.6)

### Frontend
- **Template Engine**: EJS (51.7% of codebase)
- **Styling**: CSS (38.2% of codebase)
- **Client-side Logic**: JavaScript (10.1% of codebase)

### Middleware & Security
- Cookie Parser (v1.4.7) for cookie handling
- CORS (v2.8.6) for cross-origin requests
- Custom error middleware for error handling


## ✨ Key Features

### User Features
- **User Authentication**: Sign up, login, and secure password management
- **Email Verification**: OTP-based email verification system
- **Password Recovery**: Forgot password functionality with email notifications
- **Profile Management**: View and manage user profile information
- **Membership Plans**: Browse and subscribe to different fitness plans
- **Gym Locations**: View available gym locations
- **Checkout**: Membership purchase and payment checkout
- **Contact**: Get in touch with support

### Admin Features
- **Admin Dashboard**: Dedicated admin panel (`/admin/` route)
- **User Management**: Manage user accounts and memberships
- **Plan Management**: Create and manage fitness plans
- **Location Management**: Manage gym locations

## 🚀 Getting Started

### Prerequisites
- Node.js (latest version recommended)
- MongoDB database
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gnana27022003/FitZone.git
cd FitZone
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
npm start
📧 Email Configuration
The application uses Nodemailer for sending emails (verification codes, password reset, etc.). Configure your email service in the environment variables or email service configuration.

🔐 Security Features
Password hashing with bcrypt
Cookie-based session management
CORS protection with configured origins
Email-based OTP verification
Error handling middleware for secure error responses

📝 API Routes
User Routes (/)
User authentication endpoints
Profile management
Membership operations
Email verification and OTP handling
Admin Routes (/admin/)
Admin dashboard
User and membership management
Plan and location administration

🛣️ Available Pages
Home (/): Landing page with featured content
Sign Up (/signup): User registration
Login (/login): User login
Profile (/profile): User profile dashboard
About (/about): About FitZone
Locations (/locations): Gym branch locations
Plans (/plans): Fitness membership plans
Contact (/contact): Contact and support form
Checkout (/checkout): Membership purchase
Admin Dashboard (/admin/): Admin panel

📦 Dependencies
Package	Version	Purpose
express	^5.2.1	Web framework
mongoose	^9.3.3	MongoDB ODM
bcrypt	^6.0.0	Password hashing
nodemailer	^8.0.4	Email sending
axios	^1.13.6	HTTP requests
cors	^2.8.6	CORS middleware
cookie-parser	^1.4.7	Cookie parsing
dotenv	-	Environment variables

👤 Author
Created by gnana27022003

Note: This is a development version. Ensure all environment variables are properly configured before deployment to production.
https://github.com/user-attachments/assets/cc3b644a-7d93-4f7a-8ec5-fd61ba9fe568" 


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d32a29a9-83bf-4a02-8548-a779f40f8886" />
