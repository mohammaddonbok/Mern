import React, { useState } from  'react';

const Userform =(props)=> {
    const [firstName, setFirstname] = useState("");
    const [firstNameError, setFirstnameError] = useState("");
    const [lastName, setLastname] = useState("");
    const [lastNameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState(""); 
    const [passError, setPassError] = useState("");
    const [confirPassword, setconfirmPassword] = useState("");  
    const [confError, setConfError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password ,confirPassword};
        console.log("Welcome", newUser);
    };
    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstnameError("First name must be 2 characters or longer!");
        }else{setFirstnameError("");}
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLastnameError("Last name must be 2 characters or longer!");
        }else{setLastnameError("");}
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }else{setEmailError("");}
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPassError("password is required!");
        } else if(e.target.value.length < 8) {
            setPassError("Password must be 8 characters or longer!");
        }else{setPassError("");}
    }

    const handleConfPassword = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfError("Passwords not matched");
        } else if(e.target.value.length < 8) {
            setConfError("Password must be 8 characters or longer!");
    }else{setConfError("");}
    }
    return (
    
        <form onSubmit={ createUser }>
        <div>
            <label>First name: </label> 
            <input type="text" onChange={ handleFirstName } />
            {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
        </div>
        
        <div>
            <label>Last name: </label> 
            <input type="text" onChange={ handleLastName } />
            {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
        </div> 
        <div>
            <label>Email Address: </label> 
            <input type="email" onChange={ handleEmail } />
            {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
        </div>
        
        <div>
            <label>Password: </label>
            <input type="password" onChange={ handlePassword } />
            {
                    passError ?
                    <p style={{color:'red'}}>{ passError }</p> :
                    ''
                }
        </div>

        <div>
        <label>Confirm Password: </label>
        <input type="password" onChange={ handleConfPassword } />
        {
                    confError ?
                    <p style={{color:'red'}}>{ confError }</p> :
                    ''
                }
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

export default Userform
