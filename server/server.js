// 1. Saare tools (packages) ko import karo
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// 2. dotenv ko setup karo taaki woh .env file ko padh sake
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// 3. Apna "restaurant" (Express app) create karo
const app = express();
// 4. Port set karo. process.env.PORT Render/Heroku dega, 5000 local par chalega
const port = process.env.PORT || 5000;

// 5. "Bouncer" (CORS) ko use karo.
app.use(cors({
  origin: [
    'http://localhost:3000', // For local testing
    'https://mern-machine-test-five.vercel.app'  // Your live Vercel app
  ]
}));

// 6. "Waiter" (Express) ko bolo ki order JSON format mein lena hai
app.use(express.json());

// 7. --- Database Connection ---
// 8. .env file se apna DB ka address (URI) nikalo
const uri = process.env.ATLAS_URI;
// 9. "Manager" (Mongoose) ko bolo ki is address par connect kare
// Yeh "flags" bas connection ko smooth banate hain
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// 10. Jab connection ho jaaye...
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// 11. --- Routes (Menu Card) ---
// 12. Hamaare "Todo" menu (routes) ko import karo (jo hum abhi banayenge)
const todosRouter = require('./routes/todos');
// 13. Express ko bolo: Agar koi bhi URL "/todos" se shuru ho, 
// toh order "todosRouter" ko de dena
app.use('/todos', todosRouter);

// 14. --- Start Server ---
// 15. "Restaurant" ko port par "chalu" karo
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
// Final deploy trigger - 11:20 AM