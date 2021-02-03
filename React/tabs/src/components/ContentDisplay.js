
import React,{useState}from 'react'

const ContentDisplay = (props) => {
    const[state,setState]=useState("");
    const handleTab=(e,value)=>{
        e.preventDefault()
        setState(value);
    }
    return (
        <>{

            props.currentTab.map( (item, index) => {
    
                return <button key={index} onClick={(e)=>handleTab(e,item.content)}>{item.label}</button>
            })
        }
        <textarea  rows="4" cols="50" value={state} ></textarea>
            </>
    )
}
export default ContentDisplay
