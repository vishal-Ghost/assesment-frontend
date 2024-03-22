const initialState = {
    loading : true,
    val : [],
    err : ''
}

const LogoutRed = (state = initialState, action) =>{
    switch(action.type){
        case  'LogoutReq' : return {...state,loading:true};
        case 'LogoutSuccess' :return {loading:false, val:action.payload, err:''};
        case 'LogoutError' : return {loading: false , val:[], err:action.payload};
        default : return {...state}
    }
}

export default LogoutRed