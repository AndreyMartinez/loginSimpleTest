import React, { Component } from 'react';

import { connect } from 'react-redux';
import './loginContainer.css'
import Notifications from 'react-notification-system-redux'
import LoadingBar from 'react-redux-loading-bar'

import CSSModules from 'react-css-modules'
import { styleNotification } from '../../config/NotificationsConfig'


export default function (ComposedComponent) {
  class LoginContainer extends Component {
  render(){
    const { notifications } = this.props;
      return (
         <div className="componentContent">
           <LoadingBar scope="sectionBar" style={{ backgroundColor: 'white', height: '10px', with: '100%',position:'none' }} />
           <Notifications notifications={notifications} style={styleNotification} />
             <h1 className="textLogin">Great to see you again!</h1>
              <ComposedComponent {...this.props} />
           </div>
      );
  }
  }
  function mapStateToProps(state) {
    return {
      notifications: state.notifications,
    }
}
  return connect(mapStateToProps)(CSSModules(LoginContainer))
  }

