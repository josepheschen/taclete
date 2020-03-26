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
        try {
            await this.checkLoginInfo();
        } catch (err) {
            console.log(err);
        }

        this.props.handleSubmit();
    };

    async checkLoginInfo() {


        // var parse = require('pg-connection-string').parse;
        // var config = parse('postgres://imyylnwjvdlelz:93c407e25f4a0a301263237fe459270e8c7363810a34277e2d6a9306761dfb1a@ec2-52-202-185-87.compute-1.amazonaws.com:5432/d3uqsmnmuncomb')
        //
        // const { Client } = require('pg');
        // // const connectionString = 'postgres://imyylnwjvdlelz:93c407e25f4a0a301263237fe459270e8c7363810a34277e2d6a9306761dfb1a@ec2-52-202-185-87.compute-1.amazonaws.com:5432/d3uqsmnmuncomb';
        //
        // const client = new Client(config);
        //
        // try {
        //     await client.connect();
        //
        //     client.query('SELECT * FROM athlete;', (err, res) => {
        //         console.log(err, res);
        //         client.end();
        //     });
        //
        // } catch (err) {
        //     console.log(err);
        // }



        const { Client } = require('pg');
        var client = new Client({
            connectionString: 'postgres://imyylnwjvdlelz:93c407e25f4a0a301263237fe459270e8c7363810a34277e2d6a9306761dfb1a@ec2-52-202-185-87.compute-1.amazonaws.com:5432/d3uqsmnmuncomb',
            ssl: true,
        });

        try {
            await client.connect();

            await client.query('SELECT * FROM athlete;', (err, res) => {
                if (err) throw err;
                for (let row of res.rows) {
                    console.log(JSON.stringify(row));
                }
                client.end();
            });
        } catch (err) {
            console.log(err);
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