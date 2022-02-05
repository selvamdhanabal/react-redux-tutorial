import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import CounterReducer from './counter'
import AuthReducer from './auth'

// const counterReducer = (state=initialState, action) => {
//     switch(action.type) {
//         case 'increment':
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             };
//         case 'decrement':
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             };
//         case 'increase':
//             return {
//                 ...state,
//                 counter: state.counter + action.payload
//             }
//         case 'toggle':
//             return {
//                 ...state,
//                 showCounter: !state.showCounter
//             }
//         default:
//             return state;
//     }
// }

// const counterStore = createStore(counterReducer);

const counterStore = configureStore({
    reducer: {
        counter: CounterReducer,
        auth: AuthReducer,
    }
})

export default counterStore
