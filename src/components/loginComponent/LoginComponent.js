import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './loginComponent.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../../actions/userActions'

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        }
      }

      validateForm = e => {
        e.preventDefault();
        console.log('entro')
        this.props.actions.login(this.state.email, this.state.password)
      }

render(){
    return (
        <div className="initialloginComponent">
            <div className="initialformContainer">
            <button className="initialbuttonForm google">Login with Google</button>
            <form className="initialform" onSubmit={this.validateForm}>
                <div className="initialdivInput">
            <input className="initialformInput" type="email" placeholder="username / email"
           required
           ref={email => this.email = email}
           onChange={e => this.setState({ email: e.target.value })}></input>
          </div>
          <div className="initialdivInput">
          <input className="initialformInput" type="password" placeholder="password"
          required
           ref={password => this.password = password}
           onChange={e => this.setState({ password: e.target.value })}
           ></input>
          </div>
         <div>
          <button className="initialbuttonForm">Login</button>
          </div>
           </form>
           </div>
           <div className="initialpassContainer marginTop">
           <span><NavLink to="/password" className="navigationContent">Forgot Password?</NavLink></span>
           <span className="navigationName">No account yet? <NavLink to="/registro" className="navigationContent">Sign up</NavLink></span>
           </div>
           <span className="navigationName marginTop">Looking for the Mac app?<NavLink to="/registro" className="navigationContent">Download here</NavLink></span>
          </div>
    );
}
}

function mapStateToProps(state) {
 
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
