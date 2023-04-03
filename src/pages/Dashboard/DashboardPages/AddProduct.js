import React, { useState } from 'react'
import addPhoto from '../../../assests/icons/add-photo.png'
import axios from 'axios';


const AddProduct = () => {
    const [thumbnail, setThumbnail] = useState();
    const [productDetails, setProductDetails] = useState({
        'title':'', 
        "price":"",
        'description':"",
         'catagory':''
    })
    // console.log(thumbnail);

     const handleFormSubmit = (e) => {
         e.preventDefault()
        //  console.log(thumbnail)
        


         let formData = new FormData()
         formData.append('thumbnail', thumbnail);
         const url ='http://localhost:5000/upload/product' 

         axios.post(url, formData)
         .then(res=>{
            console.log(res.data);
         }).catch(err=>{
            console.log(err);
         })
       
     }
    return (
        <div className=' max-w-[700px] h-auto p-6 bg-white rounded-lg'>
            <form action="" onSubmit={handleFormSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Product Title" className="w-full max-w-xs border px-4 py-3 rounded" />

                    <select className="rounded border px-4 py-3 w-full max-w-xs">
                        <option disabled defaultValue>Catagories</option>
                        <option >Shirts</option>
                        <option>Buttons</option>
                        <option>Tie</option>
                        <option>Belts</option>
                        <option>Cufflinks and studds
                        </option>
                        <option>Vests</option>
                    </select>
                    <select className="rounded border px-4 py-3 w-full max-w-xs">
                        <option disabled defaultValue>Colors</option>
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
                        <option disabled defaultValue>Patterns</option>
                        <option>Solid</option>
                        <option>Printed</option>
                        <option>Striped</option>

                    </select>

                </div>

                <div className='mt-4'>
                    <textarea className='w-full border rounded min-h-16 px-4 py-3' placeholder='Product Desciption'></textarea>
                </div>
                <div className='my-6 flex gap-4'>
                    <input type="file" accept='image/*' className='' onChange={(e)=> setThumbnail(e.target.files[0])}/>
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
            <div><img src={!thumbnail ?' ' :  URL.createObjectURL(thumbnail)} alt="" /></div>
        </div>
    )
}

export default AddProduct