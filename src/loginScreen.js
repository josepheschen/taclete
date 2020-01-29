import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
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
                width: 200,
                color: 'white',
            },
        },
    }));

    render() {
        return (
            <form className={this.useStyles.root} noValidate autoComplete="off">
                <TextField>
                    id={'standard-basic'}
                    defaultValue={'Email'}

                    onChange={e => this.onChange(e)}
                    value={this.state.email}
                </TextField>
                <br/>
                <TextField>
                    id={'standard-password-input'}
                    defaultValue={'Password'}
                    type={'password'}

                    onChange={e => this.onChange(e)}
                    value={this.state.email}
                </TextField>
            </form>
        );
    }
}
export default LoginScreen;

