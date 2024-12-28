import React from 'react';
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./Redux/accountAction";

function Header() {

    const account=useSelector(state => state.user.account);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogout = () =>{
        dispatch(logout())
        navigate('/home')

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">List</Link>
                            </li>
                            <li className="nav-item">
                                {!account&& <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item">
                                {account&& <button onClick={handleLogout} >Logout</button>}

                            </li>
                            <li className="nav-item">
                                {account&&account.username}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;