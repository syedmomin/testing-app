import React, { useState } from 'react';
import './Calculator.css'



const Calculator = () => {

    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ];

    const setcalcu = (val) => {
    //     if (val === "=") {
    //         calculate();
    //     }

    //     else if (val === "C") {
    //         reset();
    //     }

    //     else if (val === "CE") {
    //         backspace();
    //     }

    //     else {
    //         setState({
    //             result: this.state.result + val
    //         })
    //     }
    };


    // let reset = () => {
    //     setState({
    //         result: ""
    //     })
    // };

    // let backspace = () => {
    //     setState({
    //         result: this.state.result.slice(0, -1)
    //     })
    // };


    return (
        <>
            <div className="calculator">
                <input type="text" />
            </div>
            <div className="buttonBox">
                {
                    btnValues.flat().map((val, i) => {
                        return (
                            <button
                                key={i}
                                // className={btn === "=" ? "equals" : ""}
                                value={val}
                                onClick={(e) => setcalcu(e.target.value)}
                            >{val}</button>
                        );
                    })
                }
            </div>

        </>
    );
};

export default Calculator


