import React,{ useState } from 'react'

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.youveGotMail(msg);
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value )}
                value={ msg }
            />
            <input type="submit" value="ADD" className="btn" />
        </form>
    );
};

export default MessageForm
