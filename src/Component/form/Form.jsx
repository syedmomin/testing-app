import React from 'react'

const NormalForm = () => {


    return (
        <>
            <h1>hello form</h1>
            <form>
                <label>First name:</label><br/>
                <input type="text" /><br/>
                <label>Last name:</label><br/>
                <input type="text" /><br/>
                <label>Email:</label><br/>
                <input type="text" /><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

const ValidationForm = () => {


    return (
        <>
            <h1>hello valid</h1>
        </>
    )
}

export { NormalForm, ValidationForm }