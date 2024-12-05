 import React, {useEffect, useState} from 'react';
 import {useParams} from "react-router-dom";
 import {productById} from "./Service/products";
function Detail (){
    const[product, setProduct] = useState({id:"" , name:""})
    const{id}=useParams()
    useEffect(()=>{
        setProduct(()=>({
            ...productById(id)
        }));
    },[])
    return(
        <>
            <h3>Chi tiết</h3>
            <p>Id:  {product.id} </p>
            <span>Name: {product.name}</span>
        </>

    )
}
export default Detail