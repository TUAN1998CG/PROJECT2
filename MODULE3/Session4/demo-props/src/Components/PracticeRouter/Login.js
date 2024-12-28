import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "./Redux/accountAction";
import {useNavigate} from "react-router-dom";
import {checkLogin} from "./Service/accountService";
import {toast} from "react-toastify";
function LoginComponent() {

    const dispatch = useDispatch();
    const navigate=useNavigate();
    const account=useSelector(state => state.user.account);

    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleLogin = async  () =>{
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        const loginInfo ={
            username:username,
            password:password
        }
        // const account= await checkLogin(loginInfo);
        let isLogin = await dispatch(login(loginInfo));
        if(isLogin){
            toast.success('Dang nhap thanh cong')
            navigate('/products')
        }else{
            toast.error('Dang nhap khong thanh cong')
        }
    }
    return (
        <form action="">
            <h3>Login</h3>
            <div>
                <label htmlFor="">Username</label>
                <input ref={usernameRef} type="text" name={'username'}/>
            </div><div>
                <label htmlFor="">Username</label>
                <input ref={passwordRef} type="text" name={'password'}/>
            </div>
            <div>
                <button onClick={handleLogin} type={'button'}>Login</button>
            </div>
        </form>
    )

}
export default LoginComponent;