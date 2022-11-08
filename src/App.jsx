import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Component/home/Home'
import AddNumber from './Component/add-number/AddNumber'
import Calculator from './Component/calculator/Calculator';
import TodoList from './Component/todoList/TodoList';
import GetAPI from './Component/getAPI/GetAPI'

const App = () => {
    return (
        <Router>
            <header>
                <nav className="navbar">
                    <ul>
                        <div>
                            <h2>React Testing App</h2>
                        </div>
                        <div>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/basic">Basic</Link>
                            </li>
                            <li>
                                <Link to="/number">Hooks</Link>
                            </li>
                            <li>
                                <Link to="/getapi">API</Link>
                            </li>
                            <li>
                                <Link to="/calculator">Calculator</Link>
                            </li>
                            <li>
                                <Link to="/todo">Todo List</Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/number" element={<AddNumber />} />
                <Route path="/getapi" element={<GetAPI />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/todo" element={<TodoList />} />
            </Routes>
            <footer class="footer">
                <p>Desgin by DanySAM</p>
            </footer>
        </Router>


    );
}

export default App;

