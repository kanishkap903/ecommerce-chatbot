# ecommerce-chatbot
# Full-Stack E-Commerce Platform with Chatbot

## Overview
This project is a full-stack e-commerce web application built using **React** (frontend) and **Node.js + Express** (backend) with **MongoDB** as the database.  
It features a **logic-based chatbot** that can answer product queries, provide recommendations, and assist in navigation.

## Features

### Frontend (React)
- Product listing page
- Cart management
- Checkout flow
- Chatbot interface (logic-based, no AI API)
- Responsive and clean UI

### Backend (Node.js + Express)
- REST APIs for:
  - Products (`/api/products`)
  - Cart (`/api/cart`)
  - Orders (`/api/orders`)
  - Chatbot (`/api/chat`)
- MongoDB integration for storing products, cart, and orders
- Seed script to prepopulate products

### Chatbot
- Handles simple user queries like:
  - “Show laptops”
  - “What products are available?”
  - Recommendations based on product categories
- Logic-based, does not rely on AI APIs

## Tech Stack
- Frontend: React, React Router
- Backend: Node.js, Express
- Database: MongoDB
- Axios for frontend-backend communication

## Installation & Setup

### Backend
1. Open terminal in `backend` folder
2. Install dependencies:
   ```bash
   npm install
