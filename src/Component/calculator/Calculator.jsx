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
    const [result, setresult] = useState("")

    const setcalu = (val) => {
        if (val === "=") {
            finalResult();
        } else if (val === "C") {
            clearAll();
        } else {
            getresult(setresult.concat(val))
        }
    }
    const clearAll = () => {
        setresult("")
    }
    const finalResult = () => {
        setresult(eval(result))
    }

    return (
        <>
            <div className="calculator">
                <input type="text" placeholder="0" value={result} className="resultField" />
                <div className="buttonBox">
                    {
                        btnValues.flat().map((val, i) => {
                            return (
                                <button
                                    key={i}
                                    // className={btn === "=" ? "equals" : ""}
                                    value={val}
                                    onClick={setcalu}
                                >{val}</button>
                            );
                        })
                    }
                </div>
            </div>

        </>
    );
};

export default Calculator


