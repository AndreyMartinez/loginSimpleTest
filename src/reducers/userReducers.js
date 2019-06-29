import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {

    switch (action.type) {

        case types.AUTH_USER :
            console.log('\n AUTH_USER');
            return action.response.payload.user

        case types.RESET_AUTH_USER:
            console.log('\n RESET_AUTH_USER');
            return action.response
         default: return state;
    }


}
