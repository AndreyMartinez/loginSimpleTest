import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {

    switch (action.type) {

        case types.LOGIN_USER :
            console.log('\n LOGIN_USER'+action.value);
            return action.value
         default: return state;
    }


}
