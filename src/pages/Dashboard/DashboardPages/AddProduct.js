import React from 'react'
import addPhoto from '../../../assests/icons/add-photo.png'


const AddProduct = () => {
    return (
        <div className=' max-w-[700px] h-auto p-6 bg-white rounded-lg'>
            <form action="" >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Product Title" className="w-full max-w-xs border px-4 py-3 rounded" />

                    <select className="rounded border px-4 py-3 w-full max-w-xs">
                        <option disabled selected>Catagories</option>
                        <option >Shirts</option>
                        <option>Buttons</option>
                        <option>Tie</option>
                        <option>Belts</option>
                        <option>Cufflinks and studds
                        </option>
                        <option>Vests</option>
                    </select>
                    <select className="rounded border px-4 py-3 w-full max-w-xs">
                        <option disabled selected>Colors</option>
                        <option>white</option>
                        <option>blue</option>
                        <option>black</option>
                        <option>red</option>
                        <option>orage</option>
                        <option>purple</option>
                        <option>brown</option>
                        <option>Beige</option>
                    </select>
                    <select className="rounded border px-4 py-3 w-full max-w-xs">
                        <option disabled selected>Patterns</option>
                        <option>Solid</option>
                        <option>Printed</option>
                        <option>Striped</option>

                    </select>

                </div>

                <div className='mt-4'>
                    <textarea className='w-full border rounded min-h-16 px-4 py-3' placeholder='Product Desciption'></textarea>
                </div>
                <div className='my-6 flex gap-4'>
                    <input type="file" className='hidden' />
                    <label htmlFor="file" className='bg-blue-500 text-white flex itmes-center px-4 py-3 rounded'>
                        <span className="material-symbols-outlined mr-2">
                            add_photo_alternate
                        </span>
                        Choose a Thumbnail
                    </label>
                  
                    
                    <label htmlFor="file" className='bg-blue-500 text-white text-center px-4 py-3 rounded'>
                        <span className="material-symbols-outlined mr-2">
                            add_a_photo
                        </span>
                    </label>
                   
                    <label htmlFor="file" className='bg-blue-500 text-white text-center px-4 py-3 rounded'>
                        <span className="material-symbols-outlined mr-2">
                            add_a_photo
                        </span>
                    </label>
                   
                    <label htmlFor="file" className='bg-blue-500 text-white text-center px-4 py-3 rounded'>
                        <span className="material-symbols-outlined mr-2">
                            add_a_photo
                        </span>
                    </label>
                   
                </div>
                <div className='mt-4 w-full text-right'>
                 <button type="submit" className="bg-blue-500 text-white text-center px-4 py-3 rounded" >
                         Add This Product
                 </button>

                </div>
            </form>
        </div>
    )
}

export default AddProduct