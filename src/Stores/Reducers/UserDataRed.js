const initialState = {
    loading : false,
    val : [],
    err : ''
}

const UserDataRed = (state = initialState, action) =>{
    switch(action.type){
        case  'UserDataReq' : return {...state,loading:true};
        case 'UserDataSuccess' :return {loading:false, val:action.payload, err:''};
        case 'UserDataError' : return {loading: false , val:[], err:action.payload};
        default : return {...state}
    }
}

export default UserDataRed