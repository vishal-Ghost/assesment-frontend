import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducers from "./Stores/Reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducers);


export const Store = createStore(persistedReducer,applyMiddleware(thunk))
export const persistor = persistStore(Store);
