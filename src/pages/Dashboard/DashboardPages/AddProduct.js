import React, { useState } from 'react'
import addPhoto from '../../../assests/icons/add-photo.png'
import axios from 'axios';


const AddProduct = () => {
    const [thumbnail, setThumbnail] = useState(null)
    const [image, setImage] = useState(null)
    const [images, setImages] = useState([])
    const [imagesUrls, setImagesUrls] = useState([])
    const [productDetails, setProductDetails] = useState({
        'title': '',
        "price": "",
        'description': "",
        'catagory': '',
        'thumbnail': '',
        'images': imagesUrls,
        'color': '',
        'pattern': '',
        'ratings': '',

    })



    console.log(productDetails);


    //handle onChange 
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductDetails = { ...productDetails };
        newProductDetails[field] = value;
        setProductDetails(newProductDetails)
    }

    //handleThumbnailChange
    const handleThumbnailChange = (e) => {
        setThumbnail(e.target.files[0])
        const formData = new FormData();
        formData.append('image', thumbnail)
        // console.log(thumbnail);

        const url = "https://api.imgbb.com/1/upload?&key=8484f85b7788ffca18f1fd5d203bc0fa";
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
            //    
                const newProductDetails = { ...productDetails };
                newProductDetails['thumbnail'] = imgData.data.display_url;
                setProductDetails(newProductDetails)
                alert('Thumbnail added successfully')

            }).catch(err => {
                console.log(err);
                alert('Please choose the thumbnail again. ')
            })
    }

    //handleImagesChange 
    const handleImagesChange = (e) => {
        setImage(e.target.files[0])
        setImages([...images, e.target.files[0]])
        const formData = new FormData();
        formData.append('image', image)
        const url = "https://api.imgbb.com/1/upload?&key=8484f85b7788ffca18f1fd5d203bc0fa";

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                setImagesUrls([...imagesUrls, imgData.data.display_url])
                const newProductDetails = { ...productDetails };
                newProductDetails['images'] = imagesUrls;
                setProductDetails(newProductDetails)
                alert('Photo added successfully')

            }).catch(err => {
                console.log(err);
                alert('Could not added pic, Please choose the pic again')
            })

    }

    //handle form submit 
    const handleFormSubmit =  (e) => {
        e.preventDefault()



        console.log(productDetails);

            const url = 'http://localhost:5000/upload/product'

           fetch(url,{
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(productDetails)
            })
                .then(res => {
                    console.log(res);
                    if(res.insertedId){
                     alert('Product Uploaded Successfully')
                    }
                     else{
                        alert('Product upload unsuccessfull, please try again')
                     }
                }).catch(err => {
                    console.log(err);
                })

    }
    return (
        <div className=' max-w-[700px] h-auto p-6 bg-white rounded-lg'>
            <form action="" onSubmit={handleFormSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Product Title" name='title' className="w-full max-w-xs border px-4 py-3 rounded" required onChange={handleOnChange} />

                    <input type="number" placeholder="Product Price in PKR" name='price' onChange={handleOnChange} className="w-full max-w-xs border px-4 py-3 rounded" required />

                    <input type="number" placeholder="Product Rating Out of 5" name='ratings' className="w-full max-w-xs border px-4 py-3 rounded" required onChange={handleOnChange} />



                    <select name='catagory' className="rounded border px-4 py-3 w-full max-w-xs" required onChange={handleOnChange}>
                        <option disabled selected>Catagories</option>
                        <option value='shirts' >Shirts</option>
                        <option value='buttons'>Buttons</option>
                        <option value='tie'>Tie</option>
                        <option value='belts'>Belts</option>
                        <option value='cuffinks and studds'>Cufflinks and studds
                        </option>
                        <option value='vests'>Vests</option>
                    </select>
                    <select name='color' className="rounded border px-4 py-3 w-full max-w-xs" onChange={handleOnChange} >
                        <option disabled selected>Colors</option>
                        <option value='white'>white</option>
                        <option value='blue'>blue</option>
                        <option value='black'>black</option>
                        <option value='red'>red</option>
                        <option value='orange'>orage</option>
                        <option value='purple'>purple</option>
                        <option value='brown'>brown</option>
                        <option value='beige'>Beige</option>
                    </select>
                    <select name='pattern' className="rounded border px-4 py-3 w-full max-w-xs" required onChange={handleOnChange}>
                        <option disabled selected>Patterns</option>
                        <option value='solid'>Solid</option>
                        <option value='printed'>Printed</option>
                        <option value='striped'>Striped</option>

                    </select>

                </div>

                <div className='mt-4'>
                    <textarea name='description' className='w-full border rounded min-h-16 px-4 py-3' placeholder='Product Desciption' required onChange={handleOnChange}></textarea>
                </div>
                <div className='my-2 flex gap-4'>
                    <div>
                        <p className='opacity-70'>Add Thumbnail</p>
                        <input onChange={handleThumbnailChange} type="file" className="file-input w-full max-w-xs border-gray-300" />
                    </div>
                    <div>
                        <p className='opacity-70'>Add Additional Photos</p>
                        <input type="file" className="file-input w-full max-w-xs border-gray-300" onChange={handleImagesChange} />
                    </div>

                </div>
                <div className='mt-4 w-full text-right'>
                    <button type="submit" className="bg-blue-500 text-white text-center px-4 py-3 rounded" >
                        Add This Product
                    </button>

                </div>
            </form>
            <div>
                <div>
                </div>
                <div className='flex gap-6 mt-6'>
                    <div className='w-[25%]'>
                        <p className='mb-4'>Thumbmail</p>
                        <img src={!thumbnail ? ' ' : URL.createObjectURL(thumbnail)} alt="" />
                    </div>
                    <div className='w-[75%]  '>
                        <p className='inline'>Aditional images- don't add more than three images</p>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                images?.length && images.map(image =>
                                    <img src={URL.createObjectURL(image)} alt="" className='mt-4 w-full' />
                                )
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddProduct