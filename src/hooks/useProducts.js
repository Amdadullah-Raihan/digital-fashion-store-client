import React, { useEffect, useState } from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch("https://digital-fashion-store-server.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false)
            }
            );
    }, [])
    return [products, setProducts, isLoading, setIsLoading ]
}

export default useProducts