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
    const { registerState: { register_response } } = this.props;
    const { userProfile } = this.props;
    const { routers } = this.props;
    
    console.log('register_response', register_response)
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
              <Route exact path='/' component={ Companies }/>
              <Route path='/companies/:id' component = { Companie }/>
              <Route path='/profile' component = { Profile }/>
              {userProfile.role === 'user' ? <Route path='/reviews' component = { Reviews }/> : null}
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

});

export default connect(mapStateToProps, null)(Index);