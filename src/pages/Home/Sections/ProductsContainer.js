import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { useCartContext } from '../../../contexts/CartProvider'



const ProductsContainer = ({ products, isLoading, setIsLoading }) => {


    // const { handleAddToCart } = useCart();
    const { handleAddToCart } = useCartContext();

    return (
        <div className='lg:p-8 w-full px-4'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4 '>
                {
                    isLoading ? <div className='w-full text-center flex gap-x-4 items-center my-auto'>
                        <p className='text-xl'>Loading products</p>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="30"
                            visible={true}
                        />
                    </div>

                        :
                        // !products.length ? <p className='text-red-400 text-xl'>No Product Found!</p> : 
                        products?.map(product =>
                            <div className='shadow min-h-[380px] max-h-[400px] relative'>
                                <Link to={`/products/${product._id}`}>
                                    <img className='w-full h-[60%] mb-4' src={product.thumbnail} alt="" />
                                </Link>
                                <div className=''>
                                    <Link to={`/products/${product._id}`}>
                                        <h5 className='px-4 py-2'>{product.title}</h5>
                                        <div className='flex justify-between px-4 mb-4'>
                                            <p className='text-orange-500'>
                                                {product.ratings}
                                                <i className="fa-solid fa-star ml-1 text-sm"></i>
                                            </p>
                                            <div className=''>

                                                <p>{product.price} <span className='font-bold text-sm'>PKR</span> </p>
                                            </div>
                                        </div>
                                    </Link>
                                    <button className='mx-auto w-full absolute bottom-0 pb-2 ' onClick={() => handleAddToCart(product)}>Add To Cart <i className="fa-solid fa-cart-plus"></i></button>
                                </div>
                            </div>

                        )
                }
            </div>

        </div>
    )
}

export default ProductsContainer