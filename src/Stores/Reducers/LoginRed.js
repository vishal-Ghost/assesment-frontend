const initialState = {
    loading : false,
    val : [],
    err : ''
}

const LoginRed = (state = initialState, action) =>{
    switch(action.type){
        case  'LoginReq' : return {...state,loading:true};
        case 'LoginSuccess' :return {loading:false, val:action.payload, err:''};
        case 'LoginError' : return {loading: false , val:[], err:action.payload};
        case 'RestLogin' : return {loading : false , val : [], err :''}
        default : return {...state}
    }
}

export default LoginRed