import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import chaptersAddon from 'react-storybook-addon-chapters';

// Styling
import '@patternfly/patternfly-next/patternfly.css';
import '../stories.scss';

// Component
import { Alert } from '@red-hat-insights/insights-frontend-components';

// README
import ButtonReadme from '../docs/Alert/README.md';
import { withReadme, withDocs }  from 'storybook-readme';

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
                            sectionFn: withReadme(ButtonReadme, () => (
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
                    sectionFn: withReadme(ButtonReadme, () => (<Alert type='success'> Success Alert </Alert>)),
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
                    sectionFn: withReadme(ButtonReadme, () => (<Alert type='danger'> Danger Alert </Alert>)),
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
                    sectionFn: withReadme(ButtonReadme, () => (<Alert type='warning'> Warning Alert </Alert>)),
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
                    sectionFn: withReadme(ButtonReadme, () => (<Alert type='info'> Info Alert </Alert>)),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )