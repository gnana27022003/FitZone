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


<img width="1920" height="1080" alt="Screenshot (624)" src="https://github.com/user-attachments/assets/f9df9833-4e27-4004-bcba-c2d5a2c1cd88" />

<img width="1920" height="1080" alt="Screenshot (626)" src="https://github.com/user-attachments/assets/5822f7df-d939-48ad-8185-66c0bf3ee6cf" />
<img width="1920" height="1080" alt="Screenshot (621)" src="https://github.com/user-attachments/assets/581ae30e-928f-476b-b3b3-c0d615b0d1f8" />
<img width="1920" height="1080" alt="Screenshot (622)" src="https://github.com/user-attachments/assets/a4ff5867-3040-44d2-8ff1-ae43a2c4028b" />
<img width="1920" height="1080" alt="Screenshot (627)" src="https://github.com/user-attachments/assets/8bb5f2eb-de3c-4132-8f9c-1dc06d24be3d" />
<img width="1920" height="1080" alt="Screenshot (628)" src="https://github.com/user-attachments/assets/3c3d4f1b-1ea3-441e-9c99-f4f13362c6fe" />
<img width="1920" height="1080" alt="Screenshot (629)" src="https://github.com/user-attachments/assets/76fc87a4-bba8-444e-80fe-b29626b95793" />
<img width="1920" height="1080" alt="Screenshot (630)" src="https://github.com/user-attachments/assets/b046e66b-edba-4f3f-89a2-7fcc98deb13a" />

<img width="1920" height="1080" alt="Screenshot (631)" src="https://github.com/user-attachments/assets/728c<img width="1920" height="1080" alt="Screenshot (632)" src="https://github.com/user-attachments/assets/b9723589-a9e7-42ed-ab95-0dfc49137228" />
5233-5678-4c33-ba3d-9727fce1f78f" />
<img width="1920" height="1080" alt="Screenshot (633)" src="https://github.com/user-attachments/assets/5d02bb30-fdae-48d1-b04b-f81f6a3cf24d" />

<img width="1920" height="1080" alt="Screenshot (634)" src="https://github.com/user-attachments/assets/0fe8af86-abb6-4ae9-aa3a-788eecafe92f" />



<img width="1920" height="1080" alt="Screenshot (635)" src="https://github.com/user-attachments/assets/7a2cd0d9-6ae8-4941-8ca2-13b32a5562df" />



<img width="1920" height="1080" alt="Screenshot (636)" src="https://github.com/user-attachments/assets/873ca898-9459-410a-8898-4fdb25bc2bf1" />



<img width="1920" height="1080" alt="Screenshot (637)" src="https://github.com/user-attachments/assets/e280782e-36ab-4aee-8897-8994aad8639a" />

<img width="1920" height="1080" alt="Screenshot (638)" src="https://github.com/user-attachments/assets/28e7f39f-2cf1-4faa-82d3-1b575ce2d50b" />



<img width="1920" height="1080" alt="Screenshot (640)" src="https://github.com/user-attachments/assets/000f2e97-ce67-4897-ba84-13ca3c67dbc5" />



<img width="1920" height="1080" alt="Screenshot (641)" src="https://github.com/user-attachments/assets/15f4500d-e17b-4cd4-acc3-aa373763ec39" />





<img width="1920" height="1080" alt="Screenshot (642)" src="https://github.com/user-attachments/assets/233b37f2-4bd3-42da-92e4-d04e21f6a610" />







<img width="1920" height="1080" alt="Screenshot (643)" src="https://github.com/user-attachments/assets/6caab973-2ecd-4256-82b1-d2d49915abec" />






<img width="1920" height="1080" alt="Screenshot (644)" src="https://github.com/user-attachments/assets/7e9965c7-2705-4a8c-93e2-ed4f3509dfa2" />




<img width="1920" height="1080" alt="Screenshot (645)" src="https://github.com/user-attachments/assets/c481f053-fa1c-4719-8918-ce8c02c45230" />

