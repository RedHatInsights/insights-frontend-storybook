import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

// Component
import { ConditionalFilter, conditionalFilterType } from '@redhat-cloud-services/frontend-components';

// README
import Readme from '../../docs/components/conditional-filter/README.md';
import { withReadme } from 'storybook-readme';
import '@patternfly/patternfly/components/Select/select.css';

storiesOf('Components', module)
    .addDecorator(withReadme(Readme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Conditional Filter',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const types = {
                                    Text: 'text',
                                    Checkbox: 'checkbox',
                                    Radio: 'radio',
                                    Custom: 'custom'
                                }
                                const textGroup = 'text-group';
                                const checkboxGroup = 'checkbox-group';
                                const radioGroup = 'radio-group';
                                const customGroup = 'custom-group'
                                const textFilter = {
                                    value: 'text',
                                    label: text('Text filter label', 'Text', textGroup),
                                    filterValues: {
                                        placeholder: 'Some placeholder'
                                    }
                                };
                                const checkboxFilter = {
                                    value: 'checkbox',
                                    type: select('Checkbox filter type', types, 'checkbox', checkboxGroup),
                                    label: text('Checkbox filter label', 'Checkbox', checkboxGroup),
                                    filterValues: {
                                        items: [
                                            { label: text('Checkbox-1 filter label', 'First value', checkboxGroup) },
                                            {
                                                label: text('Checkbox-2 filter label', 'Second value', checkboxGroup),
                                                value: 'second'
                                            },
                                            { label: text('Checkbox-3 filter label', 'Third value', checkboxGroup) },
                                        ]
                                    }
                                };
                                const radioFilter = {
                                    value: 'radio',
                                    type: select('Radio filter type', types, 'radio', radioGroup),
                                    label: text('Radio filter label', 'Radio', radioGroup),
                                    filterValues: {
                                        items: [
                                            { label: text('Radio-1 filter label', 'First value', radioGroup) },
                                            {
                                                label: text('Radio-2 filter label', 'Second value', radioGroup),
                                                value: 'second'
                                            },
                                            { label: text('Radio-3 filter label', 'Third value', radioGroup) },
                                        ]
                                    }
                                };
                                const customFilter = {
                                    value: 'custom',
                                    label: text('Custom filter label', 'Custom', customGroup)
                                };

                                return (
                                    <ConditionalFilter items={[ textFilter, checkboxFilter, radioFilter, customFilter ]}/>
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Filter types',
                    subtitle: `Can be one of ${Object.values(conditionalFilterType).join(', ')}`,
                    sections: [
                        {
                            title: 'text - full text search',
                            sectionFn: ('', () => (
                                <ConditionalFilter items={[
                                    {
                                        value: 'text',
                                        label: 'Text filter label',
                                        filterValues: {
                                            placeholder: 'Some placeholder'
                                        }
                                    }
                                ]} />
                            ))
                        },
                        {
                            title: 'checkbox - multi value search',
                            sectionFn: ('', () => (
                                <ConditionalFilter items={[
                                    {
                                        value: 'checkbox',
                                        label: 'Checkbox filter label',
                                        type: conditionalFilterType.checkbox,
                                        filterValues: {
                                            items: [
                                                { label: 'Just label' },
                                                { label: 'Label with value', value: 'some-value' }
                                            ]
                                        }
                                    }
                                ]} />
                            ))
                        },
                        {
                            title: 'radio - single value search',
                            sectionFn: ('', () => (
                                <ConditionalFilter items={[
                                    {
                                        value: 'radio',
                                        label: 'Radio filter label',
                                        type: conditionalFilterType.radio,
                                        filterValues: {
                                            items: [
                                                { label: 'Just label' },
                                                { label: 'Label with value', value: 'some-value' }
                                            ]
                                        }
                                    }
                                ]} />
                            ))
                        },
                        {
                            title: 'custom - custom filter',
                            sectionFn: ('', () => (
                                <ConditionalFilter items={[
                                    {
                                        value: 'custom',
                                        type: conditionalFilterType.custom,
                                        label: 'Text filter label',
                                        filterValues: {
                                            children: <div>Custom filter</div>
                                        }
                                    }
                                ]} />
                            ))
                        }
                    ],
                },
            ]
        }
    )
