import React, { useEffect, useState } from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://digital-fashion-store-server.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            }
            );
    }, [])
    return [products, setProducts ]
}

export default useProducts