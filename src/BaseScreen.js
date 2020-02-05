import React, { Component } from 'react';
import LoginScreen from './LoginScreen.js';
import RegisterScreen from './RegisterScreen';
import Snackbar from './Snackbar';


class BaseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            accountType: '',
            groupType: '',
            LOGIN: true,
            ROTC: false,
            CADRE: false,
            HES: false,
            CADET: false,
            REGISTER: false,
            showPopUp: false,
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerButton=this.registerButton.bind(this);
    }

    handleEmailChange = (value) => {
        this.setState({
            'email': value
        });
    };

    handlePasswordChange = (value) => {
        this.setState({
            'password': value
        });
    };
    
    handleSubmit = () => {
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);

        // this will change but this is how we are going to manage flow for now
        const userType = this.state.email;
        if(userType === 'HES' || userType === 'ROTC' || userType === 'CADRE' || userType === 'CADET') {
            this.setState({
                [userType]: true,
                LOGIN: false,
            });
        }
    };

    snackbarRef = React.createRef();
    handleRegister = (userType) => {
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);

        // redirecting to login, alerting user of success (no check for duplicates right now)
        this.setState({
            // this.userType = true;
            LOGIN: true
        });
        this.snackbarRef.current.openSnackBar('Account created successfuly.')
    };


    registerButton = () => {
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);

        //this will change state to register
        this.setState({
            LOGIN: false,
            REGISTER: true,
        });

    };

    render() {

        if (this.state.LOGIN) {
            return (
                <div>
                    <LoginScreen
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}
                        handleSubmit={this.handleSubmit}
                        registerButton={this.registerButton}
                    />
                </div>
            );
        } else if (this.state.ROTC || this.state.CADRE || this.state.HES) {
            return (
              <div>
                  <p>Coach View</p>
              </div>
            );
        } else if (this.state.CADET) {
            return (
                <div>
                    <p>Cadet View</p>
                </div>
            );
        } else if (this.state.REGISTER) {
            return (
                <div>
                    <RegisterScreen
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}
                        handleRegister={this.handleRegister}
                    />
                    <Snackbar ref = {this.snackbarRef} />
                </div>
            );
        }

        return (
            <div>
                <h1> Sucessfully logged in. </h1>
            </div>
        )
    }
}
export default BaseScreen;

