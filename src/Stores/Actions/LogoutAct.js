import axios from "axios";
import { persistor } from "../../Store";
import { RestLogin } from "./LoginAct";

const LogoutReq = (val) =>{
    return {
        type : 'LoginReq',
        payload : val
    }
};

const LogoutSuccess = (val) =>{
    return {
        type : 'LoginSuccess',
        payload : val
    }
}

const LogoutError = (val) =>{
    return {
        type : 'LoginError',
        payload : val
    }
}

export const FetchLogoutData = (navigate) =>{

    return (dispatch) =>{
        dispatch(LogoutReq())
        axios({
            method:'post',
            url:`${import.meta.env.VITE_REACT_APP_URL}/api/logOut`,
            withCredentials: true,
            credentials: 'include',
        })
        .then((res)=>{
           dispatch(LogoutSuccess(res.data))
           persistor.purge()
           dispatch(RestLogin())
           navigate('/')
        })
        .catch((Err)=>{
            dispatch(LogoutError(Err))
        })
    }
}