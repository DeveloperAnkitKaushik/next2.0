"use client"

import { useState } from "react";

const AddNewUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUser = async () => {
        let response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
        });
        response = await response.json();
        console.log(response);
        if (response.ok) {
            alert("created");
        } else {
            alert("error");
        }
    }
    return (
        <div className="">
            <input type="text" placeholder="name" onChange={e => setName(e.target.value)} /><br />
            <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} /><br />
            <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} /><br />
            <button onClick={addUser}>SUBMIT</button>
        </div>
    );
}

export default AddNewUser;