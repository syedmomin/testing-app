import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddNumber from './Component/add-number/AddNumber'
import Calculator from './Component/calculator/Calculator';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
     <Calculator/>
    </React.StrictMode>
);