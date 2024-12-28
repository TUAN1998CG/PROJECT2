import {checkLogin} from "../Service/accountService";


export function login(loginInfo ) {

    // return{
    //     type:"LOGIN",
    //     payload: account
    // }
    return async (dispatch)=>{
        const account=await checkLogin(loginInfo);
        if(account!=null){
            dispatch({
                type:'LOGIN',
                payload:account
            })
            return true;
        }else {
            console.log("Login khong thanh cong ")
            return false;
        }

    }
}
export function logout() {

    return{
        type:"LOGOUT",
        payload: null
    }
}