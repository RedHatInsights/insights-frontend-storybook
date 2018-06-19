import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

// Styling
import '../../stories.scss';

// Component
import { Button } from '@patternfly/react-core';

// README
import ButtonReadme from '../../docs/components/button/README.md';
import { withReadme, withDocs }  from 'storybook-readme';

storiesOf('Components/Button', module)
    .addDecorator(withReadme(ButtonReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Overview',
        {
            subtitle: 'Button styling overview',
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const label = text('Label', 'Hello World!');
                                const variant = {
                                    primary: 'Primary',
                                    secondary: 'Secondary',
                                    tertiary: 'Tertiary',
                                    danger: 'Danger',
                                    link: 'Link',
                                    action: 'Action'
                                };
                                const variantSelector = select('Variant', variant);
                                const type = {
                                    button: 'Button',
                                    submit: 'Submit'
                                };
                                const typeSelector = select('Type', type);
                                return(
                                    <Button variant={variantSelector}
                                            type={typeSelector}
                                            isActive={boolean('Active', false)}
                                            isBlock={boolean('Block', false)}
                                            isDisabled={boolean('Disabled', false)}
                                            isFocus={boolean('Focus', false)}
                                            isHover={boolean('Hover', false)}>
                                        {label}
                                    </Button>
                                )
                            }),
                            options: {
                                showSource: true
                            },
                        },
                    ],
                },
                {
                    title: 'Button Variants',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => (
                                <React.Fragment>
                                    <Button variant='primary'> Primary Button </Button>
                                    <Button variant='secondary'> Secondary Button </Button>
                                    <Button variant='tertiary'> Tertiary Button </Button>
                                    <Button variant='danger'> Danger Button </Button>
                                    <Button variant='link'> Link Button </Button>
                                    <Button variant='action'> Action Button </Button>
                                </React.Fragment>
                            ))
                        },
                    ],
                },
                {
                    title: 'Button States',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => (
                                <React.Fragment>
                                    <Button isActive='true'> Active Button </Button>
                                    <Button isDisabled='tue'> Disabled Button </Button>
                                    <Button isFocus='true'> Focus Button </Button>
                                    <Button isHover='true'> Hover Button </Button>
                                </React.Fragment>
                            ))
                        },
                    ],
                },
                {
                    title: 'Button Block',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => (
                                <Button isBlock='true'> Block Button </Button>
                            ))
                        },
                    ],
                },
            ]
        }
    )