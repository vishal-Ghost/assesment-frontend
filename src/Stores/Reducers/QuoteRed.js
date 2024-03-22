const initialState = {
    loading : false,
    val : [],
    err : ''
}

const QuoteRed = (state = initialState, action) =>{
    switch(action.type){
        case  'QuoteReq' : return {...state,loading:true};
        case 'QuoteSuccess' :return {loading:false, val:action.payload, err:''};
        case 'QuoteError' : return {loading: false , val:[], err:action.payload};
        default : return {...state}
    }
}

export default QuoteRed