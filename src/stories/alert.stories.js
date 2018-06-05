import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Styling
import '@patternfly/patternfly-next/patternfly.css';
import '../stories.scss';

// Component
import { Alert } from '@red-hat-insights/insights-frontend-components';

storiesOf('Alerts', module)
    .addWithChapters(
        'Overview',
        {
            subtitle: 'Alert styling overview',
            chapters: [
                {
                    title: 'Alert Types',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: () => (
                                <React.Fragment>
                                    <Alert type='success'> Success Alert </Alert>
                                    <Alert type='danger'> Danger Alert </Alert>
                                    <Alert type='warning'> Warning Alert </Alert>
                                    <Alert type='info'> Info Alert </Alert>
                                </React.Fragment>
                            ),
                            options: {
                                showSource: false,
                                allowSourceToggling: false,
                                showPropTables: false,
                                allowPropTablesToggling: false,
                            },
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
                    sectionFn: () => (<Alert type='success'> Success Alert </Alert>)
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
                    sectionFn: () => (<Alert type='danger'> Danger Alert </Alert>)
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
                    sectionFn: () => (<Alert type='warning'> Warning Alert </Alert>)
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
                    sectionFn: () => (<Alert type='info'> Info Alert </Alert>)
                }, ],
            }, ]
        }
    )