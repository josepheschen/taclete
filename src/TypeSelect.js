import React, { Component } from 'react';
import Select from "react-select";

class TypeSelect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {accountType} = this.state;
        return (
            <Select
                onChange={this.props.selectAccountType}
                options={this.props.options}
                autoFocus={true}
            />
        );
    }
}

export default TypeSelect;