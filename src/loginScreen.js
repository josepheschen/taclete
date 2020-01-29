import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    onSubmit = () => {
        console.log("submitting");
    };

    useStyles = makeStyles(theme => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                color: 'white',
            },
        },
    }));

    render() {
        return (
            <div>
                <form className={this.useStyles.root} noValidate autoComplete="off">
                    <TextField
                        id="email-outlined"
                        variant="outlined"
                        label="Email"
                        type="text"
                    />
                    <p/>
                    <TextField
                        id="password-input-outlined"
                        variant="outlined"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={this.onChange}
                        
                    />
                </form>
                <p/>
                <Button variant="contained" onClick={this.onSubmit} login> Login </Button>
            </div>
        );
    }
}
export default LoginScreen;

