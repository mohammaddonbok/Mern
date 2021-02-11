import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import PoductsList from '../components/PoductsList';
import axios from 'axios'
export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/findAll')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])
    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <PoductsList product={product}  />}
        </div>
    )
}