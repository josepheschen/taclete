import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import rotcLogo from "./Images/rotcLogo.png";
import csuRam from "./Images/csuRam.png";
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

    onSubmit = () => {
        this.props.handleSubmit();
    };

    render() {
        return (
            <div>
                <img src={rotcLogo} height="300px" width="300px" alt="logo"/>
                <img src={csuRam} height="300px" width="300px" alt="logo" />
                <br/><br/>
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