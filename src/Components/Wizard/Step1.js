import React, { Component } from 'react';

import {
    Form,
    FormGroup,
    TextInput
} from '@patternfly/react-core';

class Step1 extends Component {

    constructor () {
        super();
        this.state = {
            value: ''
        };
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
    };

    handleTextInputChange = value => {
        this.setState({ value });
    };

    render() {

        const { value } = this.state;

        return (
            <React.Fragment>
                <h2> This is the first step. Each step can be inline or imported.</h2>
                <Form className='example-wizard example-wizard__step-1'>
                    <FormGroup
                        label="Example Name Input"
                        isRequired
                        fieldId="example-name"
                    >
                        <TextInput
                            isRequired
                            type="text"
                            value={value}
                            onChange={this.handleTextInputChange}
                            placeholder="Example Placeholder"
                            aria-label='Name your example'
                        />
                    </FormGroup>
                </Form>
            </React.Fragment>
        );
    }
};

export default Step1;
