import React from 'react'
import './Form.css'
import { useFormik } from 'formik';


const NormalForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <div className='fromdiv'>
                <h1>Formik Form</h1>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <br />

                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <br />

                    <button type="submit"
                        className='formResult'>Submit</button>
                </form>
            </div>
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