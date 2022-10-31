import React, { useState } from 'react';
import { Textfit } from "react-textfit";
import './Calculator.css'



const Calculator = () => {

    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ];
    const Wrapper = ({ children }) => {
        return <div className="wrapper">{children}</div>;
    };

    return (
        <>
            <Wrapper>
                {/* <Screen value=0 /> */}
                <Textfit className="screen" mode="single" max={70}>
                    {value}
                </Textfit>
                {
                    btnValues.flat().map((btn, i) => {
                        return (
                            <Button
                                key={i}
                                className={btn === "=" ? "equals" : ""}
                                value={btn}
                                onClick={() => {
                                    console.log(`${btn} clicked!`);
                                }}
                            />
                        );
                    })
                }
            </Wrapper>
        </>
    );
};

export default Calculator


