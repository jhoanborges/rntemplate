import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import balanceReducer from "./slices/balanceSlice";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};
const rootReducer = combineReducers({
    balance: balanceReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store)