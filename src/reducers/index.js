//REDUCER - combines all reducers

import {counterReducer} from './counter';
import { loggedReducer } from "./isLoggedin";
import { combineReducers } from "redux";

export const allReducers = combineReducers (
    {
        counterReducer,  // counterReducer : counterReducer
        loggedReducer   // loggedReducer : loggedReducer
    }
)