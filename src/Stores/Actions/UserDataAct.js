import axios from "axios";
import Swal from "sweetalert2";

const UserDataReq = (val) =>{
    return {
        type : 'UserDataReq',
        payload : val
    }
};

const UserDataSuccess = (val) =>{
    return {
        type : 'UserDataSuccess',
        payload : val
    }
}

const UserDataError = (val) =>{
    return {
        type : 'UserDataError',
        payload : val
    }
}

export const PostUserDataData = (formData,navigate) =>{
    return (dispatch) =>{
        dispatch(UserDataReq())
        axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/userData`,formData)
        .then((res)=>{
            if(res.data.valid){
                dispatch(UserDataSuccess(res.data))
                Swal.fire({
                    title : res.data.message,
                    icon : 'success'
                })
                navigate('/')
            }else{
                dispatch(UserDataSuccess(res.data))
                Swal.fire({
                    icon:'error',
                    title:res.data.message
                })
            }
        })
        .catch((Err)=>{
            dispatch(UserDataError(Err))
        })
    }
}