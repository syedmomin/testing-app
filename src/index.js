import React ,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let FirstFun = ({ a, b }) => (
    <>
        <h1>first function same component</h1>
        <h3>Add number is : {parseInt(a) + parseInt(b)} </h3>
    </>
)


let SeondFun = (props) => {

    const Addnumber = () => {
        const [setnumber, getnumber] = useState({
            one: "",
            two: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <>
            <FirstFun a="3" b="3" />
            <form>
                <input type="text" />
                <input type="text" />
                <button type='submit'>submit</button>
            </form>
        </>
    )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <SeondFun />
  </React.StrictMode>
);