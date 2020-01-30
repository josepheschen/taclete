import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    useStyles = makeStyles(theme => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }));

    onEmailChange = (event) => {
        this.setState({
            'email': event.target.value
        }, this.props.handleEmailChange(event.target.value));
    };

    onPasswordChange = (event) => {
        this.setState({
            'password': event.target.value
        }, this.props.handlePasswordChange(event.target.value));

    };

    onSubmit = () => {
        console.log("loginScreen email value: " + this.state.email);
        this.props.handleSubmit();
    };

    render() {
        return (
            <div>
                <form className={this.useStyles.root} noValidate autoComplete="off">
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        type="text"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <p/>
                    <TextField
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    <p/>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}> Login </Button>
                    <p/>
                    <Button variant="contained" onClick={this.props.registerButton}> Register </Button>
                </form>
            </div>
        );
    }
} export default LoginScreen;