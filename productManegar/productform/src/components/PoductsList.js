import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    return (
        
        <div>
            {props.product.map((prod, idx)=>{
            return(  
            <p  key={idx}>
                        <Link to={"/api/product/" + prod._id}>
                            {prod.title},{prod.price},{prod.description} 
                        </Link>
                    </p> )
            })}
        </div>
    );
}