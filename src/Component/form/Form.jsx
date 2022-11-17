import React from 'react'
import './Form.css'
import { useFormik } from 'formik';


export const NormalForm = () => {

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
                        name="firstName"
                        type="text"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <br />

                    <label htmlFor="email">Email Address</label>
                    <input
                        name="email"
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

export const ValidationForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            contact: '',
            email: '',
            password: '',
            conform_password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
             <>
            <div className='fromdiv'>
                <h1>Formik & YUP Form Validation</h1>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        name="firstName"
                        type="text"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        name="lastName"
                        type="text"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <br />

                    <label htmlFor="contact">Contact</label>
                    <input
                        name="contact"
                        type="number"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                    />
                    <br />

                    <label htmlFor="email">Email Address</label>
                    <input
                        name="email"
                        type="email"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <br />

                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <br />

                    <label htmlFor="conform_password">Confirm Password</label>
                    <input
                        name="conform_password"
                        type="password"
                        className='inputField'
                        onChange={formik.handleChange}
                        value={formik.values.conform_password}
                    />
                    <br />

                    <button type="submit"
                        className='formResult'>Submit</button>
                </form>
            </div>
        </>
    )
}
