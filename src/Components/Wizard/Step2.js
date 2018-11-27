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
            exampleValue: 'Select One',
        };
        this.onChangeexampleOptions = this.onChangeexampleOptions.bind(this);

        // TODO: Change these to actual example groups
        this.exampleOptions = [
            { value: 'Select One', label: 'Select One', disabled: true },
            { value: 'Value 1', label: 'Value 1', disabled: false },
            { value: 'Value 2', label: 'Value 2', disabled: false },
            { value: 'Value 3 - Disabled', label: 'Value 3 - Disabled', disabled: true }
        ];
    };

    onChangeexampleOptions(exampleValue) {
        this.setState({ exampleValue });
    };


    render() {
        return (
            <React.Fragment>
                <h2> Select values for Example </h2>
                <Form className='example-wizard example-wizard__step-2'>
                    <FormGroup isRequired fieldId="select-example">
                        <Radio id="one-example" name="select-example" label="Example Select" aria-label="Example Select" />
                        <Select value= { this.state.exampleValue } onChange={ this.onChangeexampleOptions } aria-label="Select Input">
                            { this.exampleOptions.map((option, index) => (
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
