import React, { Component } from 'react';
import Select from "react-select";

class TypeSelect extends Component {

    render() {
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