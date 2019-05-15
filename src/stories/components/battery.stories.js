import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// Component
import { Battery } from '@red-hat-insights/insights-frontend-components';

// README
import BatteryReadme from '../../docs/components/battery/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(BatteryReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Battery',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const label = text('Label', 'Hello World!');
                                return(
                                    <Battery severity='critical' label={label} labelHidden={boolean('Hidden', false)}/>
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Severities',
                    subtitle: 'Can either be a string or a number',
                    sections: [
                        {
                            title: 'Critical',
                            sectionFn: ('', () => {
                                return (
                                    <React.Fragment>
                                        <Battery severity='critical' label='Severity as `critical` string'/>
                                        <Battery severity={4} label='Severity as {4}'/>
                                    </React.Fragment>
                                )
                            })
                        },
                        {
                            title: 'High',
                            sectionFn: ('', () => {
                                return (
                                    <React.Fragment>
                                        <Battery severity='high' label='Severity as `high` string'/>
                                        <Battery severity='error' label='Severity as `error` string'/>
                                        <Battery severity={3} label='Severity as {3}'/>
                                    </React.Fragment>
                                )
                            })
                        },
                        {
                            title: 'Medium',
                            sectionFn: ('', () => {
                                return (
                                    <React.Fragment>
                                        <Battery severity='medium' label='Severity as `medium` string'/>
                                        <Battery severity='warn' label='Severity as `warn` string'/>
                                        <Battery severity={2} label='Severity as {2}'/>
                                    </React.Fragment>
                                )
                            })
                        },
                        {
                            title: 'Low',
                            sectionFn: ('', () => {
                                return (
                                    <React.Fragment>
                                        <Battery severity='low' label='Severity as `low` string'/>
                                        <Battery severity='info' label='Severity as `info` string'/>
                                        <Battery severity={1} label='Severity as {1}'/>
                                    </React.Fragment>
                                )
                            })
                        },
                    ],
                },
            ]
        }
    )