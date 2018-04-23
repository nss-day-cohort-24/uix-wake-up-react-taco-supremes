import React, { Component } from 'react';
import { loginWithGoogle, logout  } from '../config/auth';
import {rebase} from '../config/constants';
 

class Login extends Component {


    

    componentDidMount () {
        console.log("login mounted");
        this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
      
          if (user) {
            this.setState({
              authed: true,
              loading: false,
              uid: user.uid,
            });
            
            console.log("Props updated?", this.props.uid);
            //get DB stuff for user here
          } else {
            this.setState({
              authed: false,
              loading: false,
              uid: null,
            })
          }
        })
      }

      componentWillUnmount () {
        console.log("login will unmount");
        this.authListener();
      }

      authenticate(){
        console.log('authentication function running');
        loginWithGoogle()
        .then(() => {
            this.setState({
                authed: true
            });
            
            console.log("Authenticate: ", this);
        });
      }

      logoutApp(){
        console.log('logout function running');
        logout();
      }

    render() {
        return(
            <div className="logIn">
                <button type="button" onClick={() => this.authenticate('google')} className="btn btn-outline-primary btn-lg">G Login</button>
            </div>
        )
    }
}

export default Login;