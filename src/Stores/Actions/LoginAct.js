import axios from "axios";
import Swal from "sweetalert2";

const LoginReq = (val) =>{
    return {
        type : 'LoginReq',
        payload : val
    }
};

const LoginSuccess = (val) =>{
    return {
        type : 'LoginSuccess',
        payload : val
    }
}

const LoginError = (val) =>{
    return {
        type : 'LoginError',
        payload : val
    }
}

export const RestLogin = () =>{
    return {
        type : 'RestLogin'
    }
}


export const FetchLoginData = (userName,password,navigate) =>{

    console.log(import.meta.env.VITE_REACT_APP_URL);
    return (dispatch) =>{
        dispatch(LoginReq())
        // axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/login?userName=${userName}&password=${password}`)
        axios({
            method:'get',
            url : `${import.meta.env.VITE_REACT_APP_URL}/api/login?userName=${userName}&password=${password}`,
            withCredentials: true,
            credentials: 'include',
        })
        .then( (res)=>{
            if(!res.data.valid){
                Swal.fire({
                    icon :'error',
                    title: res.data.message
                })
            }else{
                sessionStorage.setItem('userData',JSON.stringify(res.data.userData))
                navigate('/intro')
            }
            dispatch(LoginSuccess(res.data))
        })
        .catch((Err)=>{
            dispatch(LoginError(Err))
        })
    }
}