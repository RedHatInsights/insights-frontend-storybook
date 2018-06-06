import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Styling
import '@patternfly/patternfly-next/patternfly.css';
import '../stories.scss';

// Component
import { Button } from '@red-hat-insights/insights-frontend-components';

// README
import ButtonReadme from '../docs/Button/README.md';
import { withReadme, withDocs }  from 'storybook-readme';

storiesOf('Buttons', module)
    .addDecorator(withKnobs)
    .addWithChapters(
        'Overview',
        {
            subtitle: 'Button styling overview',
            chapters: [
                {
                    title: 'Demo',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: withReadme(ButtonReadme, () => {
                                const label = text('Label', 'Hello World!');
                                const types = {
                                    null: 'none',
                                    primary: 'Primary',
                                    secondary: 'Secondary',
                                    tertiary: 'Tertiary',
                                    danger: 'Danger',
                                };
                                const typeSelector = select('Type', types);
                                const states = {
                                    null: 'none',
                                    focused: 'focus',
                                    active: 'active',
                                    disabled: 'disabled',
                                };
                                const stateSelector = select('State', states);
                                return(
                                    <Button type={typeSelector} state={stateSelector}> {label} </Button>
                                )
                            })
                        },
                    ],
                },
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
                    sectionFn: withReadme(ButtonReadme, () =>
                    {
                        const label = text('Label', 'Hello World!');
                        return(
                            <Button type='primary'> {label} </Button>
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
        'Secondary', {
            subtitle: 'Secondary Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Preview',
                    sectionFn: withReadme(ButtonReadme, () =>
                    {
                        const label = text('Label', 'Hello World!');
                        return(
                            <Button type='secondary'> {label} </Button>
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
        'Tertiary', {
            subtitle: 'Tertiary Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Preview',
                    sectionFn: withReadme(ButtonReadme, () =>
                    {
                        const label = text('Label', 'Hello World!');
                        return(
                            <Button type='tertiary'> {label} </Button>
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
            subtitle: 'Danger Button Example',
            chapters: [ {
                sections: [ {
                    title: 'Preview',
                    sectionFn: withReadme(ButtonReadme, () =>
                    {
                        const label = text('Label', 'Hello World!');
                        return(
                            <Button type='danger'> {label} </Button>
                        )
                    }),
                    options: {
                        showSource: true
                    },
                }, ],
            }, ]
        }
    )