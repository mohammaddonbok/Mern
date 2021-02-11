import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [detail, setDetail] = useState({})
    useEffect(() => {
        console.log("hello")
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => {
                setDetail(res.data)
                console.log(res.data)
            }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            <p>{detail.title}</p><br/>
            <p>{detail.price}</p><br/>
            <p>{detail.description}</p>
        </div>
    )
}