import React from 'react'
import { useState } from 'react'

const AddProduct = ({addProduct}) => {
    const [data, setData] = useState({})
    const onHandleChange = (event) => {
        setData({ "name": event.target.value });
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        addProduct(data);
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Enter Product Name'onChange={onHandleChange} name='name'/>
                <button>Add New</button>
            </form>
        </div>
    )
}
export default AddProduct
