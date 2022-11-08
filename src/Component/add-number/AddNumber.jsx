import React, { useState } from 'react';
import './AddNumber.css'


let AddNumber = () => {

    const [inputs, setInputs] = useState({
        numOne: '',
        numTwo: ''
    });
    const total = inputs.numOne + inputs.numTwo;

    const handleChange = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);
        setInputs(values => ({ ...values, [name]: value }))
    }


    return (
        <div className='add-number'>
            <label>Auto Input Number Add</label>
            <br />
            <input
                type="number"
                name="numOne"
                onChange={handleChange}
            />
            <br />
            <input
                type="number"
                name="numTwo"
                onChange={handleChange}
            />
            <h4>Result : {total == NaN ? null : total}</h4>
        </div>
    );


}

export default AddNumber;