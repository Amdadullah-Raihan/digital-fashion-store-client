import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useCart from '../../../hooks/useCart'
import { addToDB } from '../../../utilities/addToDB'
import useProducts from '../../../hooks/useProducts'



const ProductsContainer = () => {

    const [products, setProducts] = useProducts();
    const { cart, setCart } = useCart(products);

    console.log('cart',cart);


    // handle add to cart 
    const handleAddToCart = (product) => {
        let newCart = [];
        const isExist = cart.find(pd=> pd.id === product.id);
        if(isExist){
            isExist.quantity = isExist.quantity + 1;
            const restItems = cart.filter(pd => pd.id !== product.id);
            newCart = [...restItems, product]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDB(product.id)

        
    }

  
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