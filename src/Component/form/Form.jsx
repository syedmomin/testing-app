import React from 'react'
import './Form.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

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



const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    contact: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
        conform_password: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
});

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
        validationSchema: { SignupSchema },
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
                    {/* {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null} */}
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
