import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {getAllProducts} from "./Service/products";




function List() {
    const [products, setProducts] = useState([]);
    const [show,setShow] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null)
    useEffect(() => {
        const listProducts = getAllProducts()
        setProducts(() => (
            [
                ...listProducts
            ]
        ))
    }, []);

    const handleShow = ()=>{
        setShow((pre)=> !pre);
    }
    const handleClose = () => {
        setShow((pre)=> !pre);
    }
    const handleDelete = () => {
        if (productToDelete) {
            // Xóa sản phẩm khỏi danh sách
            const updatedProducts = products.filter(product => product.id !== productToDelete.id);
            setProductToDelete(updatedProducts);
            handleClose(); // Đóng modal sau khi xóa
            console.log(updatedProducts);
        }

    }

    return (
        <>
            <h3>Trang danh sách sản phẩm</h3>
            <Link to={'/products/add'}>Add</Link>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>NAME</th>
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
                        <td><Link to={'/products/detail/'+ p.id} className={'btn btn-secondary'}>Detail</Link></td>
                        <td>
                            <Button variant="primary" onClick={handleShow}>
                               Delete
                            </Button>
                        </td>

                    </tr>
                ))}

                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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