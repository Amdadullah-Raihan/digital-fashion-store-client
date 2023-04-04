import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [thumbnail, setThumbnail] = useState('')
    const [images, setImages] = useState([])
    const [products]= useProducts()
    const {handleAddToCart} = useCart()

    //fetching product by id
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
                setThumbnail(data.thumbnail)
                setImages(data.images)
            });
    }, [])

    return (
        <div className='lg:p-8 p-4 lg:flex gap-x-16'>
            {/* left side */}
            <section className='lg:w-[50%] '>
                <img src={thumbnail} alt="" className='w-full shadow'/>
                <div className='grid grid-cols-5 lg:grid-cols-5  gap-2 mt-6 items-center w-full'>
                    {
                        images?.map(image =>

                            <button onClick={() => setThumbnail(image)} className='flex justify-center items-center cursor-pointer py-4 px-2 border hover:border-[#1a2d40] '>
                              <img className='w-full ' src={image} alt="" />
                            </button>

                        )
                    }
                </div>
            </section>
            {/* right side */}
            <section className='lg:w-[50%] mt-8'>
                <div className='text-center'>
                    <h1 className='text-4xl mb-4'>{product.title}</h1>
                    <button className='text-xl border mb-10 p-2'>{product.price} <span className='text-md font-bold'>PKR</span> </button>
                    <p className='mb-4'>
                        {product.description}
                    </p>
                    <button onClick={()=>handleAddToCart(product)} className='text-white bg-[#1a2d40] px-6 py-3 btn rounded-none w-full'>Add to cart <i className="fa-solid fa-cart-plus"></i></button>
                </div>
                <div className='mt-16 leading-8'>
                    <table className='lg:w-[30%] w-full font'>
                        <tbody>
                            <tr>
                                <td>Colour:</td>
                                <td>{product.color}</td>
                            </tr>
                            
                            <tr>
                                <td>Pattern:</td>
                                <td>{product.pattern}</td>
                            </tr>
                            <tr>
                                <td>Length:</td>
                                <td>{product.length} inch</td>
                            </tr>
                            <tr>
                                <td>Width:</td>
                                <td>{product.width} inch</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='w-full border-2 border-[#C19A67] py-4 px-8 text-center mt-6'>
                    <p>
                        Buy 2 or 3 custom garments - get 10% off
                        Buy 4 or more custom garments - get 20% off
                    </p>


                </div>
            </section>

        </div>
    )
}

export default SingleProduct