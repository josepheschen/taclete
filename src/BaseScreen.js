import React, { Component } from 'react';
import LoginScreen from './LoginScreen.js';
import RegisterScreen from './RegisterScreen';
import AthleteHome from './AthleteHome.js'
import CoachHome from "./CoachHome.js";
import TacleteIconBlue from './Taclete_Icon_Blue.png';
import TacleteWordmarkBlue from "./Taclete_Wordmark_Blue.png";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

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
            snackbarOpen: false,
            snackbarMessage: 'Message Error'
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

    handleRegister = () => {
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);

        // redirecting to login, alerting user of success (no check for duplicates right now)
        this.setState({
            // this.userType = true;
            LOGIN: true
        });
        this.setState({snackbarMessage: 'Account created successfully.', snackbarOpen: true});
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({snackbarOpen: false})
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
                    <img src={TacleteWordmarkBlue} alt="TacleteWordmark"/>
                    <LoginScreen
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}
                        handleSubmit={this.handleSubmit}
                        registerButton={this.registerButton}
                    />
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'middle',
                        }}
                        open={this.state.snackbarOpen}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        message={this.state.snackbarMessage}
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
                </div>
            );
        } else if (this.state.ROTC || this.state.CADRE || this.state.HES) {
            return (
              <div>
                  <img src={TacleteIconBlue} alt="BlueTacleteIcon"/>
                  <CoachHome

                  />
              </div>
            );
        } else if (this.state.CADET) {
            return (
                <div>
                    <img src={TacleteIconBlue} alt="BlueTacleteIcon"/>
                    <AthleteHome

                    />
                </div>
            );
        } else if (this.state.REGISTER) {
            return (
                <div>
                    <img src={TacleteWordmarkBlue} alt="TacleteWordmark"/>
                    <RegisterScreen
                        handleEmailChange={this.handleEmailChange}
                        handlePasswordChange={this.handlePasswordChange}
                        handleRegister={this.handleRegister}
                    />
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

