import axios from "axios";
import Swal from "sweetalert2";

const QuoteReq = (val) =>{
    return {
        type : 'QuoteReq',
        payload : val
    }
};

const QuoteSuccess = (val) =>{
    return {
        type : 'QuoteSuccess',
        payload : val
    }
}

const QuoteError = (val) =>{
    return {
        type : 'QuoteError',
        payload : val
    }
}


export const FetchQuoteData = () => {
    return (dispatch) => {
      dispatch(QuoteReq());
      axios({
        method: 'get',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
          'X-RapidAPI-Key': '7b09bfa855msh7270ec73a547822p1e93aajsn99c7d15646a8',
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        },
        withCredentials: true,
        credentials: 'include',
      })
        .then((res) => {
          dispatch(QuoteSuccess(res.data));
        })
        .catch((err) => {
          dispatch(QuoteError(err));
        });
    };
  };
  