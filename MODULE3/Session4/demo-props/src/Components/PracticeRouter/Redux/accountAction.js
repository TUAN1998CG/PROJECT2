

// account={
//     username:"",
//     password:"",
//     role:""
// }

export function login(account ) {

    return{
        type:"LOGIN",
        payload: loginInfo
    }
}export function logout(account ) {

    return{
        type:"LOGOUT",
        payload: null
    }
}