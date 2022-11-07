import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import AddNumber from './Component/add-number/AddNumber'
import Calculator from './Component/calculator/Calculator';
import TodoList from './Component/todoList/TodoList';
import GetAPI from './Component/getAPI/GetAPI'

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <header>
                        <nav className="navbar">
                            <ul>
                                <div>
                                    <h2>React Testing App</h2>
                                </div>
                                <div>
                                    {/* <li>
                                        <Link to="/">Home</Link>
                                    </li> */}
                                    <li>
                                        <Link to="/addnumber">Add Number</Link>
                                    </li>
                                    <li>
                                        <Link to="/getapi">Get API</Link>
                                    </li>
                                    <li>
                                        <Link to="/todolist">Todo List</Link>
                                    </li>
                                    <li>
                                        <Link to="/calculator">Calculator</Link>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </header>


                    <Switch>
                        {/* <Route path="/">
                            <Home />
                        </Route> */}
                        <Route path="/addnumber">
                            <AddNumber />
                        </Route>
                        <Route path="/getapi">
                            <GetAPI />
                        </Route>
                        <Route path="/getapi">
                            <GetAPI />
                        </Route>
                        <Route path="/todolist">
                            <TodoList />
                        </Route>
                        <Route path="/calculator">
                            <Calculator />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;

