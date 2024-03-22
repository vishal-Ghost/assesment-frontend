import { combineReducers } from "redux";
import LoginRed from "./LoginRed";
import QuoteRed from "./QuoteRed";
import LogoutRed from "./LogoutRed";
import UserDataRed from "./UserDataRed";

const rootReducers = combineReducers({
    LoginRed,
    QuoteRed,
    LogoutRed,
    UserDataRed
})

export default rootReducers