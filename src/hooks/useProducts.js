import React, { useEffect, useState } from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data.products)
            }
            );
    }, [])
    return [products, setProducts ]
}

export default useProducts