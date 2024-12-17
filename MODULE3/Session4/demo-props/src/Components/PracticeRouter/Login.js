import React, {useRef} from 'react';
function LoginComponent() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleLogin = () =>{
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        const loginInfo ={
            username:username,
            password:password
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