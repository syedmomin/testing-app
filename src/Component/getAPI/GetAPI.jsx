import React, { useState, useEffect } from "react";
import './GetAPI.css'


const GetAPI = () => {

    const [users, setUsers] = useState([]);

    const autoFun = async () => {
        const res = await fetch("https://reqres.in/api/users?page=2");
        const json = await res.json();
        setUsers(json.data);
        console.log(json.data);
    };

    useEffect(() => {
        autoFun();
    }, []);

    return (
        <>
            <div className="mainDiv">
                <h4>Get Dummy API Data</h4>
                {users.length &&
                    users.map((user) => {
                        return (
                            <div className="card" key={user.id}>
                                <div className="card-body">
                                    <div className="user">
                                        <img key={user.avatar} src={user.avatar} />
                                        <div className="user-info">
                                            <h5>{user.first_name} {user.last_name}</h5>
                                            <small>2h ago</small>
                                        </div>
                                    </div>
                                    <span className="tag">{user.email}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default GetAPI