import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [thumbnail, setThumbnail] = useState('')
    const [images, setImages] = useState([])

    //fetching product by id
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
                setThumbnail(data.thumbnail)
                setImages(data.images)
            });
    }, [])

    return (
        <div className='p-8 flex gap-x-16'>
            {/* left side */}
            <section className='lg:w-[50%]'>
                <img src={thumbnail} alt="" className='w-full shadow'/>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 mt-6 '>
                    {
                        images?.map(image =>

                            <button onClick={() => setThumbnail(image)} className='flex justify-center items-center cursor-pointer py-4 px-2 border hover:border-[#1a2d40]'>
                              <img className='w-full ' src={image} alt="" />
                            </button>

                        )
                    }
                </div>
            </section>
            {/* right side */}
            <section className='w-[50%]'>
                <div>
                    <h1 className='text-4xl mb-4'>{product.title}</h1>
                    <button className='text-xl border mb-10 p-2'>{product.price} <span className='text-md font-bold'>PKR</span> </button>
                    <p className='mb-4'>
                        {product.description}
                    </p>
                    <button className='text-white bg-[#1a2d40] px-6 py-3'>Add to cart <i className="fa-solid fa-cart-plus"></i></button>
                </div>
                <div className='mt-16 leading-8'>
                    <table className='w-[30%] font'>
                        <tbody>
                            <tr>
                                <td>Colour:</td>
                                <td>Blue</td>
                            </tr>
                            
                            <tr>
                                <td>Pattern:</td>
                                <td>Stirped</td>
                            </tr>
                            <tr>
                                <td>Length:</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <td>Width:</td>
                                <td>8 cm cm</td>
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