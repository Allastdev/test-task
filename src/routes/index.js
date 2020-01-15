import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import connect from "react-redux/es/connect/connect";

import {
    Registration, 
    Login,
    Companies,
    Companie,
    Profile,
    Reviews
} from '../pages/index';
import { auth } from "../store/Routers/action";
import { localStorageGet } from '../helpers/localStorage';

class Index extends Component {
 
  render(){
    const { routers } = this.props;
    const { loginState: { logged_role } } = this.props;
    
    let booleanValue  = false;

    if (localStorageGet('access_token', false) && routers.status){
      booleanValue = true;
      auth();
    } else if (localStorageGet('access_token', false) && !routers.status) {
      booleanValue = true;
      auth();
    }

    return(
      <BrowserRouter>
        {
          booleanValue ?
            <Switch>
              <Route exact path='/' component={ logged_role === 'user' ? Companies : Reviews }/>
              <Route path='/profile' component = { Profile }/>
              { logged_role === 'user' ? <Route path='/reviews' component = { Reviews }/> : null }
              { logged_role === 'user' ? (<Route path='/companies/:id' component = { Companie }/>) : (<Route path='/*' render={() => <Redirect to='/' />} />) }
            </Switch> 
            :
            <Switch>
                <Route exact path='/' component={ Login }/>
                <Route path='/registration' component={Registration}/>
                <Route render={() => <Redirect to='/' />}/>
            </Switch>
        }
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  routers: state.routers,
  userProfile: state.userProfile,
  registerState: state.registration,
  loginState: state.login
});

export default connect(mapStateToProps, null)(Index);