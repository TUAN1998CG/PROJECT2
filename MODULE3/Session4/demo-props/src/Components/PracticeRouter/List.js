import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {deleteProduct, getAllProducts, searchProducts} from "./Service/Products";




function List() {
    const [products, setProducts] = useState([]);
    const [show,setShow] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [productToDelete, setProductToDelete] = useState({id:"", name:""})
    const searchRef = useRef();
    useEffect( () => {
      const fetchData= async ()=>{
          const list= await  getAllProducts()
          setProducts(list)
      }
      fetchData()

    }, [isLoading]);

    const handleShow = (product)=>{
        setShow((pre)=> !pre);
        setProductToDelete(product)
    }
    const handleClose = () => {
        setShow((pre)=> !pre);

    }
    const handleDelete = async () => {
        await deleteProduct(productToDelete.id)
        setIsLoading((pre)=> !pre);
        handleClose()
    }
    const handleSearch=()=>{
        let searchName = searchRef.current.value;
        const fetchData= async ()=>{
            const list= await  searchProducts(searchName)
            setProducts(list)
        }
        fetchData()

    }

    return (
        <>
            <h3>Trang danh sách sản phẩm</h3>
            <Link to={'/products/add'}>Add</Link>
            <input ref={searchRef} type="text" name='searchname'/>
            <button type='button' onClick={handleSearch}>Search</button>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Manufeaturer</th>
                    <th>Sim</th>
                    <th>Feature</th>
                    <th>Detail</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map((p, i) => (
                    <tr key={p.id}>
                        <td>{i + 1}</td>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.manufactor.name}</td>
                        <td>{p.sim}</td>
                        <td>{p.fe}</td>
                        <td><Link to={'/products/detail/'+ p.id} className={'btn btn-secondary'}>Detail</Link></td>
                        <td>
                            <Button variant="primary" onClick={()=>{
                                handleShow(p)
                            }}>
                               Delete
                            </Button>
                            <Button>Edit</Button>
                        </td>


                    </tr>
                ))}

                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xoá {productToDelete.name}???!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default List;