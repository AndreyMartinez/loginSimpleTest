import React ,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

//Containers and components
import {LoginContainer} from '../containers/login/loginContainer'
import {LoginComponent} from '../components/loginComponent/LoginComponent'

class Routers extends Component{
    render() {
        return (
          <Router>
            <Switch>
              <Route path='/' component={LoginContainer(LoginComponent)} />
         </Switch>
          </Router>
        )
      }
    }

    function mapStateToProps(state) {
    }
    

export default connect(mapStateToProps)(Routers);
