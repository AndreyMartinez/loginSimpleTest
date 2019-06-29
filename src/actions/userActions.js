import userApi from '../api/user';
import * as types from './actionTypes';
import { error, success } from 'react-notification-system-redux';
import { succes_login, error_login} from '../config/NotificationsConfig';
import { showLoading, hideLoading } from 'react-redux-loading-bar'


/**
 * @author Raphael Martinez
 * @description Action que permite realizar el respectivo login
 * @param {String} email :email del usuario
 * @param {Strig} password :password del usuario 
 */

export function login(email, password) {
  return dispatch => {
    dispatch(showLoading("sectionBar"));
    userApi.login(email, password).then(response => {
     dispatch(loginSuccess(response));
      dispatch(hideLoading("sectionBar"));
      dispatch(success(succes_login));
    }).catch(err => {
      dispatch(hideLoading("sectionBar"));
      dispatch(error(error_login));
    })
  }
}

export function loginSuccess(response) {
  return { type: types.AUTH_USER, response };
}



