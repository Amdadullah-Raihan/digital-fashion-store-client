import React from 'react'

const AddProduct = () => {
    return (
        <div className=' max-w-[700px] h-auto p-6 bg-white rounded-lg'>
            <form action="" >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Product Title" className="w-full max-w-xs border px-4 py-3 rounded" />
                    <input type="text" placeholder="Type here" className="w-full max-w-xs border px-4 py-3 rounded" />
                    <input type="text" placeholder="Type here" className="w-full max-w-xs border px-4 py-3 rounded" />
                    <input type="text" placeholder="Type here" className="w-full max-w-xs border px-4 py-3 rounded" />
                    <input type="text" placeholder="Type here" className="w-full max-w-xs border px-4 py-3 rounded" />
                    <input type="text" placeholder="Type here" className="w-full max-w-xs border px-4 py-3 rounded" />
                    <input type="text" placeholder="Type here" className="w-full max-w-xs border px-4 py-3 rounded" />
                    <input type="text" placeholder="Type here" className="w-full max-w-xs border px-4 py-3 rounded" />
                </div>
                <div className='mt-4 w-full text-right'>
                    <input type="submit" value='Add The Product' className='btn' name="" id="" />
                </div>
            </form>
        </div>
    )
}

export default AddProduct