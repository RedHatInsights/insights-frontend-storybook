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
import { Button } from '@red-hat-insights/insights-frontend-components';

// README
import ButtonReadme from '../docs/Button/README.md';
import { withReadme, withDocs }  from 'storybook-readme';

storiesOf('Buttons', module)
    .addWithChapters(
        'Overview',
        {
            subtitle: 'Button styling overview',
            chapters: [
                {
                    title: 'Button Types',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: withReadme(ButtonReadme, () => (
                                <React.Fragment>
                                    <Button type='primary'> Primary Button </Button>
                                    <Button type='secondary'> Secondary Button </Button>
                                    <Button type='tertiary'> Tertiary Button </Button>
                                    <Button type='danger'> Danger Button </Button>
                                </React.Fragment>
                            ))
                        },
                    ],
                },
            ]
        }
    )

    .addWithChapters(
        'Primary', {
            subtitle: 'Primary Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Preview',
                    sectionFn: withReadme(ButtonReadme, () => (<Button type='primary'> Primary Button </Button>)),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Secondary', {
            subtitle: 'Secondary Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Preview',
                    sectionFn: withReadme(ButtonReadme, () => (<Button type='secondary'> Secondary Button </Button>)),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Tertiary', {
            subtitle: 'Tertiary Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Preview',
                    sectionFn: withReadme(ButtonReadme, () => (<Button type='tertiary'> Tertiary Button </Button>)),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Danger', {
            subtitle: 'Danger Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Preview',
                    sectionFn: withReadme(ButtonReadme, () => (<Button type='danger'> Danger Button </Button>)),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )