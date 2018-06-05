import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Styling
import '@patternfly/patternfly-next/patternfly.css';
import '../stories.scss';

// Component
import { Button } from '@red-hat-insights/insights-frontend-components';

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
                            sectionFn: () => (
                                <React.Fragment>
                                    <Button type='primary'> Primary Button </Button>
                                    <Button type='secondary'> Secondary Button </Button>
                                    <Button type='tertiary'> Tertiary Button </Button>
                                    <Button type='danger'> Danger Button </Button>
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
        'Primary', {
            subtitle: 'Primary Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Primary',
                    sectionFn: () => (<Button type='primary'> Primary Button </Button>)
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Secondary', {
            subtitle: 'Secondary Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Secondary',
                    sectionFn: () => (<Button type='secondary'> Secondary Button </Button>)
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Tertiary', {
            subtitle: 'Tertiary Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Tertiary',
                    sectionFn: () => (<Button type='tertiary'> Tertiary Button </Button>)
                }, ],
            }, ]
        }
    )

    .addWithChapters(
        'Danger', {
            subtitle: 'Danger Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Danger',
                    sectionFn: () => (<Button type='danger'> Danger Button </Button>)
                }, ],
            }, ]
        }
    )