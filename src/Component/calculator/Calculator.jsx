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
    return (
            <div className="buttonBox">
                {
                    btnValues.flat().map((val, i) => {
                        return (
                            <button
                                key={i}
                                // className={btn === "=" ? "equals" : ""}
                                value={val}
                                onClick={e => this.props.onClick(e.target.value)}
                            >{val}</button>
                        );
                    })
                }
            </div>
    );
};

export default Calculator


