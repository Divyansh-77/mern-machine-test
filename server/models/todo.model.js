// 1. "Manager" (Mongoose) ko import karo
const mongoose = require('mongoose');

// 2. Schema (blueprint/format) nikaalo
const Schema = mongoose.Schema;

// 3. Todo ka blueprint banao
const todoSchema = new Schema({
  // Har todo mein 'description' hona chahiye, jo String hoga aur zaroori (required) hai
  description: { type: String, required: true },
  // Har todo mein 'completed' status hoga, jo Boolean (true/false) hoga,
  // aur agar nahi diya toh default mein 'false' hoga
  completed: { type: Boolean, default: false },
}, {
  // Yeh automatically "kab bana" aur "kab update hua" add kar dega
  timestamps: true,
});

// 4. Is blueprint (todoSchema) se ek actual model (Todo) banao
// Mongoose database mein 'Todo' ko 'todos' (plural, small) naam se save karega
const Todo = mongoose.model('Todo', todoSchema);

// 5. Is "Todo" model ko dusri files mein use karne ke liye export karo
module.exports = Todo;