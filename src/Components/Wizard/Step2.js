import React, { Component } from 'react';

import {
    Form,
    FormGroup,
    Radio,
    Select,
    SelectOption
} from '@patternfly/react-core';

import './wizard.scss';

class Step2 extends Component {

    constructor () {
        super();
        this.state = {
            systemValue: 'Select One',
        };
        this.onChangeSystemOptions = this.onChangeSystemOptions.bind(this);

        // TODO: Change these to actual system groups
        this.systemOptions = [
            { value: 'Select One', label: 'Select One', disabled: true },
            { value: 'Value 1', label: 'Value 1', disabled: false },
            { value: 'Value 2', label: 'Value 2', disabled: false },
            { value: 'Value 3 - Disabled', label: 'Value 3 - Disabled', disabled: true }
        ];
    };

    onChangeSystemOptions(systemValue) {
        this.setState({ systemValue });
    };


    render() {
        return (
            <React.Fragment>
                <h2> Select the system(s) for the plan </h2>
                <Form className='example-wizard example-wizard__step-2'>
                    <FormGroup isRequired fieldId="select-systems">
                        <Radio id="one-system" name="select-systems" label="Example Select" aria-label="Example Select" />
                        <Select value= { this.state.systemValue } onChange={ this.onChangeSystemOptions } aria-label="Select Input">
                            { this.systemOptions.map((option, index) => (
                                <SelectOption isDisabled={ option.disabled } key={ index } value={ option.value } label={ option.label } />
                            )) }
                        </Select>
                    </FormGroup>
                </Form>
            </React.Fragment>
        );
    };
};

export default Step2;
