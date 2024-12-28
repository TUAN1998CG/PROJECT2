import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {deleteProduct, getAllProducts, searchProducts} from "./Service/Products";
import {useSelector} from "react-redux";
import {getAllManufacturers} from "./Service/manufacservice";




function List() {
    const account=useSelector(state => state.user.account);
    const [products, setProducts] = useState([]);
    const [manu, setManu] = useState([]);
    const [show,setShow] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [productToDelete, setProductToDelete] = useState({id:"", name:""})
    const searchNameRef = useRef();
    const searchManuRef= useRef();
    useEffect( () => {
      const fetchData= async ()=>{
          const list= await  getAllProducts()
          setProducts(list)
      }
        const fetchDataManu=async ()=>{
            const list = await getAllManufacturers()
            setManu(list);
        }
      fetchData()
        fetchDataManu()

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
        let searchName = searchNameRef.current.value;
        let searchManu = searchManuRef.current.value;
        const fetchData= async ()=>{
            const list= await  searchProducts(searchName,searchManu)
            setProducts(list )
        }
        fetchData()
    }

    return (
        <>
            <h3>Trang danh sách sản phẩm</h3>
            <Link to={'/products/add'}>Add</Link>
            <input ref={searchNameRef} type="text" name='searchname'/>
            <select ref={searchManuRef}>
                <option value={""}>--Chon--</option>
                {manu.map(e=>(
                    <option value={e.id}>{e.name}</option>
                ))}
            </select>
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
                            {account&&((account.role=="ADMIN"))? <Button variant="primary" onClick={()=>{
                                handleShow(p)
                            }}>
                                Delete
                            </Button>:('')}
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