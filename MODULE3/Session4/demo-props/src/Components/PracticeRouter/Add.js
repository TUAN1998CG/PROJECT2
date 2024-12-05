
import React, {useRef} from 'react';
import {addNewProduct} from "./Service/products";
import {useNavigate} from "react-router-dom";
function Add () {
    let idRef=useRef()
    let nameRef=useRef()
    const navigate=useNavigate();
    const handleAddNewProduct = () => {
        const product={
            id: idRef.current.value,
            name :nameRef.current.value
        }
        addNewProduct(product)
        navigate("/products")
    }
    return(
        <>
            <form action="">
                <input ref={idRef} type="text" placeholder={"Enter your name" }/>
                <input ref={nameRef} type="text" placeholder={"Enter your ID" }/>
                <button type={'button'} onClick={handleAddNewProduct}>Save</button>
            </form></>
    )
}
export default Add