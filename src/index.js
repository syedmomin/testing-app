import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let FirstFun = ({ a, b }) => (
    <>
        <h1>first function same component</h1>
        <h3>Add number is : {parseInt(a) + parseInt(b)} </h3>
    </>
)


let SeondFun = (props) => {




    const [numOne, setOne] = useState()
    const [numTwo, setTwo] = useState()
    let total = numOne + numTwo;

    const handleSubmit = (e) => {
        e.preventDefault()
let costs = setTwo;
console.log(costs)
        // console.log(e)
    }

    return (
        <div>
            <h4>Add Two Number : {total}</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setOne(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    onChange={(e) => setTwo(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SeondFun />
    </React.StrictMode>
);