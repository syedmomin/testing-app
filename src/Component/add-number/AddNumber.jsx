import React, { useState } from 'react';
import './AddNumber.css'


let AddNumber = () => {

    let FirstFun = ({ a, b }) => (
        <>
            <h1>first function same component</h1>
            <h3>Add number is : {parseInt(a) + parseInt(b)} </h3>
        </>
    )

    const [inputs, setInputs] = useState({
        numOne: '',
        numTwo: ''
    });
    const total = inputs.numOne  + inputs.numTwo;

    const handleChange = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);
        setInputs(values => ({ ...values, [name]: value }))
    }

    
    return (
        <div>
            <h4>Add Two Number : {total== NaN ? null: total}</h4>
                <input
                    type="text"
                    name="numOne"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    name="numTwo"
                    onChange={handleChange}
                />  
        </div>
    );


}

export default AddNumber;