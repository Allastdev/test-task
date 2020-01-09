import React, {Component} from 'react';
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

class Index extends Component {
 
  render(){
    const { userProfile } = this.props;
    const { routers } = this.props;

    let booleanValue  = false;

    if (localStorage.getItem('access_token') && routers.status){
      booleanValue = true;
      auth();
    } else if (localStorage.getItem('access_token') && !routers.status) {
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

});

export default connect(mapStateToProps, null)(Index);