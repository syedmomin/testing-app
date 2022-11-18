import PropTypes from 'prop-types';

export const BasicReact = () => {

    return (
        <>
            <h3>fregment,Jsx,Set,props,map,foreach,parent to child........</h3>
        </>
    )
}

export const Difference = () => {
    return (
        <>
            <h1>Diffrenece Between Class and Functional Component</h1>
            <table border={2}>
                <tr>
                    <th>Functional Components In React JS</th>
                    <th>Functional Components In React JS</th>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>Components are just like functions that return HTML elements.</li>
                            <li>In older React code bases, you may find Class components primarily used.</li>
                            <li>In React JS, it is now suggested to use Function components, which were added in React 16.8.</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>In React JS, these components are simple classes (made up of multiple functions that add functionality to the application).</li>
                            <li>In React JS, all class based components are child classes for the Component class of ReactJS (React.Component)..</li>
                            <li>In React JS, the class must implement a render() member function which returns a React component to be rendered, similar to a return value of a functional component.</li>
                            <li>In React JS, component name always starts with Capital Letter .</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </>
    );
}

export const PropsDes = (props) => {
    return (
        <>
            <h2>Check Props ---- {props.name}</h2>
        </>
    )
}


export const PropsType = (props) => {
    return (
        <>
            <h4>Props Type</h4>
            <h2>My name is {props.name} {props.desi} and age {props.age}</h2>
        </>
    )
}

// PropsType.PropTypes = {
//     name: PropTypes.string.isRequired,
//     desi: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired
//     }