import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class RegisterScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            snackbarOpen: false,
            snackbarMessage: "Message Error"
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfPasswordChange = this.onConfPasswordChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
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

    onConfPasswordChange = (e) => {
        this.setState({
            'confirmPassword': e.target.value
        }, this.props.handlePasswordChange(e.target.value));
    };

    snackbarRef = React.createRef();
    onRegister = () => {
        if (this.state.confirmPassword === this.state.password && this.state.password !== '' && this.state.email !== '') {
            this.props.handleRegister();
        }
        else if(this.state.email === ''){
            this.setState({snackbarMessage: "You must input an email.", snackbarOpen: true});
        }
        else if(this.state.password === ''){
            this.setState({snackbarMessage: "You must input a password.", snackbarOpen: true});
        }
        else if(this.state.confirmPassword !== this.state.password){
            this.setState({snackbarMessage: "Your passwords must match.", snackbarOpen: true});
        }
        else{
            this.setState({snackbarMessage: "Unexpected Error.", snackbarOpen: true});
        }
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

            <TextField
                name="confirmPassword"
                variant="outlined"
                label="Confirm Password"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.onConfPasswordChange}
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
                <Button variant="contained" color="primary" onClick={() =>{
                    this.onRegister();
                    this.handleClick()
                }}> Submit </Button>
                <p/>
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
            </form>
            </div>
            );
    }

    handleClick = () => {
        this.setState({snackbarOpen: true})
    };
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({snackbarOpen: false})
    };
} export default RegisterScreen;