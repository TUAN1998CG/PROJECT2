import React, {useRef, useState} from 'react';
import {addNewProduct} from "./Service/Products";
import {useNavigate} from "react-router-dom";
import {Field, Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

function Add() {
    const [product, setProduct] = useState({id: "", name: ""});
    const handleSubmit = (value) => {
        addNewProduct(value)
        navigate("/products")

    }
    const handleValidate = Yup.object({
        id: Yup.number().required("Khong duoc de trong").min(1,"Please enter a number"),
        name: Yup.string().required("Khong duoc de trong").
        matches(/^[A-Z][a-z]*(\s[[A-Z][a-z]*)+$/,'Chua dung dinh dang'),
    })

    // let idRef = useRef()
    // let nameRef = useRef()
    const navigate = useNavigate();
    // const handleAddNewProduct = () => {
    //     const product = {
    //         id: idRef.current.value,
    //         name: nameRef.current.value
    //     }
    //     addNewProduct(product)
    //     navigate("/products")
    // }
    return (
        <>
            {/*<form action="">*/}
            {/*    <input ref={idRef} type="text" placeholder={"Enter your name"}/>*/}
            {/*    <input ref={nameRef} type="text" placeholder={"Enter your ID"}/>*/}
            {/*    <button type={'button'} onClick={handleAddNewProduct}>Save</button>*/}
            {/*</form>*/}
            <Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <label>ID:</label>
                        <Field type='text' name='id'/>
                        <ErrorMessage name='id' style={{color:"red"}} component='div'/>
                    </div>
                    <div>
                        <label>Name:</label>
                        <Field type='text' name='name'/>
                        <ErrorMessage name='name' component='div' style={{color:"red"}}/>
                    </div>
                    <div>
                        <button type={'submit'}>Save</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Add
