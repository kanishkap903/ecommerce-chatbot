Full-Stack E-Commerce Platform with Chatbot
🛒 Project Overview

This is a full-stack e-commerce web application built with React (frontend) and Node.js + Express (backend) with a MongoDB database.
It features a logic-based chatbot that handles product queries and recommendations without using any external AI APIs.

🖥️ Features
Product listing and details
Add to cart and cart management
Checkout with address input
Total calculation for orders
Logic-based chatbot for product assistance
Clean and responsive UI
🛠️ Tech Stack
Frontend: React (with React Router)
Backend: Node.js + Express
Database: MongoDB
API Requests: Axios
Styling: CSS
💾 Installation & Setup
1. Clone the repository
git clone https://github.com/yourusername/ecommerce-chatbot.git
cd ecommerce-chatbot
2. Backend Setup
cd backend
npm install
node server.js
Backend will run on: http://localhost:5000
MongoDB must be running locally or use your own connection string.
3. Frontend Setup
cd client
npm install
npm start
Frontend will run on: http://localhost:3000
📝 Usage
Open the app in your browser (http://localhost:3000)
Browse products and add them to the cart
Go to checkout and place an order
Open the chatbot popup to ask product-related queries


🔗 API Endpoints
Products
GET /api/products → Fetch all products
Cart
GET /api/cart → Get cart items
POST /api/cart → Add item to cart
Orders
POST /api/orders → Place an order with user ID, items, total, and address
Chatbot
POST /api/chat → Send a message to the chatbot and get a response


👨‍💻 Author
Kanishka Padgalwar
