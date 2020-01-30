import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

class BaseScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            onLoginScreen: true,
            onROTCScreen: false,
            onCadreScreen: false,
            onHESScreen: false,
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
                width: 200,
            },
        },
    }));

    render() {
        return (
            <div>
                {this.state.onLoginScreen &&
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
                        value={this.state.password}
                        />
                    <p/>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}> Login </Button>
                    <p/>
                    <Button variant="contained" onClick={this.onSubmit}> Register </Button>
                </form>

                }
            </div>
        );
    }
}
export default BaseScreen;

