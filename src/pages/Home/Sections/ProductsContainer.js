import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import pkr from '../../../assests/pakistan-rupee-currency-symbol (1).png'

const ProductsContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data.products)
            }
            );
    }, [])
    return (
        <div className='lg:w-[75%]'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product =>
                        <div className='shadow min-h-[380px] max-h-[400px] relative'>
                            <Link to={`/products/${product.id}`}>
                                <img className='w-full h-[60%] mb-4' src={product.thumbnail} alt="" />
                            </Link>
                            <div className=''>
                                <Link to={`/products/${product.id}`}>
                                    <h5 className='px-4 py-2'>{product.title}</h5>
                                    <div className='flex justify-between px-4 mb-4'>
                                        <p className='text-orange-500'>
                                            {product.rating}
                                            <i className="fa-solid fa-star ml-1 text-sm"></i>
                                        </p>
                                        <div className=''>

                                            <p>{product.price} <span className='font-bold text-sm'>PKR</span> </p>
                                        </div>
                                    </div>
                               </Link>
                                <button className='mx-auto w-full absolute bottom-0 pb-2 '>Add To Cart <i className="fa-solid fa-cart-plus"></i></button>
                            </div>
                        </div>

                    )
                }
            </div>

        </div>
    )
}

export default ProductsContainer