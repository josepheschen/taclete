import React, { Component } from 'react';
class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value;
        })
    }

    onSubmit = () => {
        console.log("submitting");
    }

    render() {
        return (
            <div>
                <h3 Login />
                <Input
                    name={'email'}
                    placeHolder={'Email'}
                    onChange={e => this.onChange(e)}
                    value = this.state.email />
                <Input
                    name={'password'}
                    placeHolder={'Password'}
                    type={'password'}
                    onChange={e => this.onChange(e)}
                    value = this.state.email />

                <br/>

                <Button onClick={() => this.onSubmit()} type={"primary"} Go />

            </div>
        );
    }
}
export default LoginScreen;