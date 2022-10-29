import React ,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let FirstFun = ({ a, b }) => (
    <>
        <h1>first function same component</h1>
        <h3>Add number is : {parseInt(a) + parseInt(b)} </h3>
    </>
)


// let SeondFun = (props) => {

//     const Addnumber = () => {
//         const [setnumber, getnumber] = useState({
//             one: "",
//             two: ""
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(e)
//     }

//     return (
//         <>
//             <FirstFun a="3" b="3" />
//             <form>
//                 <input type="text" />
//                 <input type="text" />
//                 <button type='submit'>submit</button>
//             </form>
//         </>
//     )

// }

let SimpleForm =(props) => {
    //create object state
    const [form, setForm] = useState({
        FirstName: '',
        LastName: '',
        age: '',
    });

    const handleChange = event => {
        event.preventDefault();
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <SimpleForm />
  </React.StrictMode>
);