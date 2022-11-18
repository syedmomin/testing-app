import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Component/home/Home'
import AddNumber from './Component/add-number/AddNumber'
import Calculator from './Component/calculator/Calculator';
import TodoList from './Component/todoList/TodoList';
import Digiwatch from './Component/watch/Watch';
import Countimer from './Component/timer/Timer';
import GetAPI from './Component/getAPI/GetAPI'
import { BasicReact, Difference, PropsDes, PropsType } from './Component/basic/Basic'
import { NormalForm, ValidationForm } from './Component/form/Form'

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
                            <li>
                                <Link to="/digiwatch">Digital Watch</Link>
                            </li>
                            <li>
                                <Link to="/timer">Counter Timer</Link>
                            </li>
                            <li>
                                <Link to="/spform">Simple Form</Link>
                            </li>
                            <li>
                                <Link to="/vdform">Valide Form</Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/testing-app" element={<Home />} />
                <Route path="/basic" element={[
                <BasicReact key={1}/>,
                <Difference key={2}/>,
                <PropsDes name="Syed" key={3}/>,
                <PropsDes name="Momin" key={4}/>,
                <PropsType name="momin" desi="developer" age={21} key={5} /> 
                ]}/>
                <Route path="/number" element={<AddNumber />} />
                <Route path="/getapi" element={<GetAPI />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/digiwatch" element={<Digiwatch />} />
                <Route path="/timer" element={<Countimer />} />
                <Route path="/spform" element={<NormalForm />} />
                <Route path="/vdform" element={<ValidationForm />} />
            </Routes>
            <footer className="footer">
                <p>Desgin by DanySAM</p>
            </footer>
        </Router>


    );
}

export default App;

