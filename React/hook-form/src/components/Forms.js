import React, { useState } from  'react';

const Forms =(props)=> {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirPassword, setconfirmPassword] = useState("");  

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password ,confirPassword};
        console.log("Welcome", newUser);
    };

    return (
    
        <form onSubmit={ createUser }>
        <div>
            <label>First name: </label> 
            <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
        </div>
        <div>
            <label>Last name: </label> 
            <input type="text" onChange={ (e) => setLastname(e.target.value) } />
        </div>
        <div>
            <label>Email Address: </label> 
            <input type="text" onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div>
            <label>Password: </label>
            <input type="password" onChange={ (e) => setPassword(e.target.value) } />
        </div>
        <div>
        <label>Confirm Password: </label>
        <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
    </div>
        <input type="submit" value="Create User" />
        <div>
        <div>
                <h1> your form data </h1>
                <p> first name : {firstName}</p>
                <p> last name : {lastName}</p>
                <p>Email : {email}</p>
                <p>Password : password</p>
                <p>Confrim Password : confirmpassword</p>
            </div>
        </div>
    </form>
    
    );
}

export default Forms
