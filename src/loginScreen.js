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

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        });
    };
    
    onSubmit = () => {
        console.log("Email: " + this.state.email);
        console.log("Password: " + this.state.password);
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
                <form className={this.useStyles.root} noValidate autoComplete="off" onChange={this.onChange}>
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        type="text"
                        value={this.state.email}
                        />
                    <p/>
                    <TextField
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={this.state.password}
                        />
                </form>
                <p/>
                <Button variant="contained" onClick={this.onSubmit}> Login </Button>
            </div>
        );
    }
}
export default LoginScreen;

