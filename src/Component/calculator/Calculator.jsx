import React, { useState } from 'react';
import './Calculator.css'



const Calculator = () => {

    const [result, setresult] = useState("")
    const [chkMessge, setError] = useState("Happy Calculator")

    const btnValues = [
        [1, 2, 3, "+"],
        [4, 5, 6, "-"],
        [7, 8, 9, "*"],
        [0, ".", "%"],
        ["/", "C", "=","D"],
    ];

    // Main Function 

    const setcalu = (val) => {
        if (val === "=") {
            finalResult();
        } else if (val === "C") {
            clearAll();
        }else if (val === "D") {
            delte();
        } else {
            setresult(result.concat(val))
        }
    }

    // clear all 

    const clearAll = () => {
        setresult("")
    }

    // final result 

    const finalResult = () => {
        try {
            setError("Happy Calculator")
            setresult(eval(result).toString())
        } catch (e) {
            if (e instanceof SyntaxError) {
                setError(e.message);
            }
        }
    }

    // delete digit 

    const delte = () => {
        let str = result.substr(0, result.length - 1);
        setresult(str);
    }

    return (
        <>
            <div className="calculator">
                <p>{chkMessge}</p>
                <input type="text" placeholder="0" value={result} className="resultField" />
                <div className="buttonBox">
                    {
                        btnValues.flat().map((val, i) => {
                            return (
                                <button
                                    key={i}
                                    className={val === "=" || val === "C" || val === "D"? "mainButton" : "subButton"}
                                    value={val}
                                    onClick={(e) => setcalu(e.target.value)}
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


