import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";


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
        this.checkLoginInfo = this.checkLoginInfo.bind(this);
    }

    useStyles = makeStyles(theme => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },

            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        },
    }));

    onEmailChange = (e) => {
        this.setState({
            'email': e.target.value
        }, this.props.handleEmailChange(e.target.value));
    };

    onPasswordChange = (e) => {
        this.setState({
            'password': e.target.value
        }, this.props.handlePasswordChange(e.target.value));

    };

    async onSubmit() {
        let username = this.state.email;
        let password = this.state.password;

        let data = {
            'username': username,
            'password': password,
        };

        let accountType = '';

        try {
            accountType = await this.checkLoginInfo(data);
        } catch (err) {
            console.log(err);
        }
        this.props.handleAccountTypeChange(accountType);
        this.props.handleSubmit();

    };

    async checkLoginInfo(data) {

        const response = await fetch('/userLoginAttempt', {
            method:'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data),
        });
        const json  = await response.json();
        return json['accountType'];
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
                    <FormControl style={{minWidth: 120}}>
                        <InputLabel id="accountTypeSelectLabel">Account Type</InputLabel>
                        <Select
                            labelId="accountTypeSelectLabel"
                            id="accountTypeSelect"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'HES'}>HES</MenuItem>
                                <MenuItem value={'CADRE'}>CADRE</MenuItem>
                                <MenuItem value={'ROTC'}>ROTC</MenuItem>
                                <MenuItem value={'CADET'}>CADET</MenuItem>
                        </Select>
                    </FormControl>
                    <p/>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}> Login </Button>
                    <p/>
                    <Button variant="contained" onClick={this.props.registerButton}> Register </Button>
                    <p/>
                </form>
            </div>
        );
    }
} export default LoginScreen;