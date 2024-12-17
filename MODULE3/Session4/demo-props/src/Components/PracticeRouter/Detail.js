 import React, {useEffect, useState} from 'react';
 import {useParams} from "react-router-dom";
 import {getAllProducts, productById} from "./Service/Products";
function Detail (){
    const[product, setProduct] = useState({id:"" , name:""})
    const{id}=useParams()
    useEffect(()=>{
        // setProduct(()=>({
        //     ...productById(id)
        // }));
        const fetchData = async () => {
            let p = await productById(id);
            setProduct(p)
        }
        fetchData()
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