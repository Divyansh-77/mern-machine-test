// 1. Express ka 'Router' (special route manager) import karo
const router = require('express').Router();

// 2. Apna 'Todo' model (data blueprint) import karo
let Todo = require('../models/todo.model');

// --- READ (GET) ---
// 3. Agar 'GET' request "/todos/" par aaye... (Full URL: /todos/)
router.route('/').get((req, res) => {
  // 4. Model (Todo) ko bolo: "database se saare (.find()) todos dhoondo"
  Todo.find()
    // 5. Jab mil jaaye (.then), toh 'todos' list ko JSON format mein bhej do
    .then(todos => res.json(todos))
    // 6. Agar error aaye (.catch), toh 400 error bhej do
    .catch(err => res.status(400).json('Error: ' + err));
});

// --- CREATE (POST) ---
// 7. Agar 'POST' request "/todos/add" par aaye... (Full URL: /todos/add)
router.route('/add').post((req, res) => {
  // 8. Request ki body (JSON) se 'description' nikalo
  const description = req.body.description;
  // 9. Naya todo banao, model ka use karke
  const newTodo = new Todo({
    description,
    completed: false // Default
  });

  // 10. Naye todo ko database mein save (.save()) karo
  newTodo.save()
    // 11. Jab save ho jaaye, toh success message bhej do
    // **EXPERT TIP**: Frontend ke liye 'res.json(newTodo)' (poora object) bhejna behtar hai
    .then((savedTodo) => res.status(201).json(savedTodo)) 
    // 12. Agar error aaye, toh 400 error bhej do
    .catch(err => res.status(400).json('Error: ' + err));
});

// --- DELETE (DELETE) ---
// 13. Agar 'DELETE' request "/todos/:id" par aaye... (e.g., /todos/123xyz)
// :id ek variable hai
router.route('/:id').delete((req, res) => {
  // 14. Request ke parameters (URL) se 'id' nikalo
  // 15. Model ko bolo: "is ID waale todo ko dhoondo aur delete karo"
  Todo.findByIdAndDelete(req.params.id)
    // 16. Jab delete ho jaaye, toh success message bhej do
    .then(() => res.json('Todo deleted.'))
    // 17. Agar error aaye, toh 400 error bhej do
    .catch(err => res.status(400).json('Error: ' + err));
});

// 18. Is poore router ko export karo taaki server.js use kar sake
module.exports = router;