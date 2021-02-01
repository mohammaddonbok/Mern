import React from 'react'

const MessageDisplay = (props) => {
 return (
        <>
            <div>{ props.message.map((item,index)=>{
                let style={  backgroundColor:item}
                return <div key={index} className="box" style={style}></div>} )}</div>
        </>
    );
};

export default MessageDisplay