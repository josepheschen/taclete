import React, { Component } from 'react';
import LoginScreen from './loginScreen.js';

class BaseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            LOGIN: true,
            ROTC: false,
            CADRE: false,
            HES: false,
            CADET: false,
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
        if(userType === 'HES' || userType === 'ROTC' || userType === 'CADRE') {
            this.setState({
                [userType]: true,
                LOGIN: false,
            });
        }
    };

    registerButton = () => {
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);
    }

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
        }

        return (
            <div>
                <h1> Sucessfully logged in. </h1>
            </div>
        )
    }
}
export default BaseScreen;

