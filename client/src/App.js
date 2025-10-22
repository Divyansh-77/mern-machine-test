// 1. React se 'useState' (memory) aur 'useEffect' (on-load) ko import karo
import React, { useState, useEffect } from 'react';
// 2. 'axios' (API caller) ko import karo
import axios from 'axios';

// 3. API ka base URL. Isse change karna aasaan hoga
const API_URL = 'http://localhost:5000/todos/';

// 4. Apna main component (App) banao
function App() {
  // 5. State (memory) banao.
  // 'todos' ek memory hai, 'setTodos' usko update karne ka function hai
  // Default value: [] (khaali list)
  const [todos, setTodos] = useState([]);

  // 'input' ek memory hai input box ke liye
  // Default value: "" (khaali string)
  const [input, setInput] = useState('');

  // 6. useEffect: Yeh code tab chalega jab component (page) load hoga
  // '[]' (khaali array) ka matlab hai "sirf ek baar chalaana"
  useEffect(() => {
    // 'fetchTodos' function ko call karo jab page load ho
    fetchTodos();
  }, []);

  // 7. --- DATA FUNCTIONS ---

  // Function: Saare todos ko backend se laao (READ)
  const fetchTodos = () => {
    axios.get(API_URL) // GET request maaro
      .then(response => {
        // 8. Jab data aa jaaye, toh 'todos' state ko update kar do
        setTodos(response.data);
      })
      .catch(error => console.log(error));
  };

  // Function: Naya todo add karo (CREATE)
  // 'e' (event) form se aa raha hai
  const addTodo = (e) => {
    // 9. Form ko refresh hone se roko (default behavior)
    e.preventDefault();

    // 10. Agar input box khaali hai, toh kuch mat karo
    if (!input) return; 

    // 11. Backend ko POST request maaro, description bhej kar
    axios.post(API_URL + 'add', { description: input })
      .then(response => {
        // 12. Jab success ho, toh 'todos' state update karo
        // Purani 'todos' list (...) lo aur usmein naya todo (response.data) add kardo
        setTodos([...todos, response.data]);
        // 13. Input box ko khaali kar do
        setInput('');
      })
      .catch(error => console.log(error));
  };

  // Function: Todo ko delete karo (DELETE)
  // 'id' button click se aayegi
  const deleteTodo = (id) => {
    // 14. Backend ko DELETE request maaro, ID ke saath
    axios.delete(API_URL + id)
      .then(() => {
        // 15. Jab success ho, toh 'todos' state update karo
        // .filter() use karke uss todo ko hata do jiski ID match hoti hai
        setTodos(todos.filter(todo => todo._id !== id));
      })
      .catch(error => console.log(error));
  };

  // 16. --- HTML (JSX) ---
  // Yeh woh hai jo screen par dikhega
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>My To-Do List</h1>

      {/* Add Todo Form */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          // 17. Input box ki value ko 'input' state se connect karo
          value={input}
          // 18. Jab bhi type karo, 'input' state ko update karo
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
      <ul>
        {/* 19. 'todos' state (list) par .map() chalao */}
        {/* Har 'todo' item ke liye ek 'li' (list item) return karo */}
        {todos.map(todo => (
          // 20. 'key' zaroori hai React ke liye, 'todo._id' unique hai
          <li key={todo._id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {/* 21. Todo ka description dikhao */}
            {todo.description}

            {/* 22. Delete button, click hone par 'deleteTodo' function call karega 'id' ke saath */}
            <button onClick={() => deleteTodo(todo._id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 23. App component ko export karo taaki index.js use kar sake
export default App;