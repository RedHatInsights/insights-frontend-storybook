import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Styling
import '@patternfly/patternfly-next/patternfly.css';
import '../../stories.scss';

// Component
import { Alert } from '@red-hat-insights/insights-frontend-components';

// README
import AlertReadme from '../../Docs/Components/Alert/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components/Alert', module)
    .addDecorator(withReadme(AlertReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Overview',
        {
            subtitle: 'Alert styling overview',
            chapters: [
                {
                    title: 'Demo',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const label = text('Label', 'Hello World!');
                                const types = {
                                    success: 'Success',
                                    danger: 'Danger',
                                    warning: 'Warning',
                                    info: 'Info',
                                };
                                const typeSelector = select('Type', types);
                                return(
                                    <Alert type={typeSelector}> {label} </Alert>
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Alert Types',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => (
                                <React.Fragment>
                                    <Alert type='success'> Success Alert </Alert>
                                    <Alert type='danger'> Danger Alert </Alert>
                                    <Alert type='warning'> Warning Alert </Alert>
                                    <Alert type='info'> Info Alert </Alert>
                                </React.Fragment>
                            ))
                        },
                    ],
                },
            ]
        }
    )

    .addWithChapters(
        'Success', {
            subtitle: 'Success Alert Example',
            chapters: [ {
                sections: [ {
                    title: 'Success',
                    sectionFn: ('', () => {
                        const label = text('Label', 'Hello World!');
                        return(
                            <Alert type='success'> {label} </Alert>
                        )
                    }),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Danger', {
            subtitle: 'Danger Alert Example',
            chapters: [ {
                sections: [ {
                    title: 'Danger',
                    sectionFn: ('', () => {
                        const label = text('Label', 'Hello World!');
                        return(
                            <Alert type='danger'> {label} </Alert>
                        )
                    }),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Warning', {
            subtitle: 'Warning Alert Example',
            chapters: [ {
                sections: [ {
                    title: 'Warning',
                    sectionFn: ('', () => {
                        const label = text('Label', 'Hello World!');
                        return(
                            <Alert type='warning'> {label} </Alert>
                        )
                    }),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Info', {
            subtitle: 'Info Alert Example',
            chapters: [ {
                sections: [ {
                    title: 'Info',
                    sectionFn: ('', () => {
                        const label = text('Label', 'Hello World!');
                        return(
                            <Alert type='info'> {label} </Alert>
                        )
                    }),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )