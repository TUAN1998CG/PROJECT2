import React, {useEffect, useRef, useState} from 'react';
import {addNewProduct, productById} from "./Service/Products";
import {useNavigate} from "react-router-dom";
import {Field, Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {getAllManufacturers} from "./Service/manufacservice";
import {options} from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add() {
    const [manusList,setManusList]=useState([]);
    const [product, setProduct] = useState({
        id: "",
        name: "",
        manufactor:"",
        sim:"1",
        fe:[""]
    });
    useEffect(()=>{
        const fetchData = async () => {
            const list = await getAllManufacturers()
            setManusList(list)
        }

        fetchData()
    })
    const handleSubmit = async  (value) => {
        const product={
            ...value,
            manufactor: JSON.parse(value.manufactor),
        }
        await addNewProduct(product);
        toast.success('Them moi thanh cong');
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
                        <label>Number of Sim:</label>
                        <label><Field type='radio' name='sim' value='1'/>1Sim</label>
                        <label><Field type='radio' name='sim' value='2'/>2Sim</label>
                        <ErrorMessage name='name' component='div' style={{color:"red"}}/>
                    </div>
                    <div>
                        <label>Fearture</label>
                        <Field type='checkbox' name='fe' value='Bluetooth'/>Bluetooth
                        <Field type='checkbox' name='fe' value='LTE'/>5G
                        <Field type='checkbox' name='fe' value='ZOOMCAMERA'/>Zoom Camera
                    </div>
                    <div>
                        <label htmlFor="">Manufaturer</label>
                        <Field as='select' name='manufactor'>
                            <option value="">------SELECT-------</option>
                            {manusList.map((m)=>(
                                <option value={JSON.stringify(m)}>{m.name}</option>
                            ))}
                        </Field>
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
