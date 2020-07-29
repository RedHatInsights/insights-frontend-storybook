import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// Component
import { Unavailable } from '@redhat-cloud-services/frontend-components';

// README
import UnavailableReadMe from '../../docs/components/unavailable/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(UnavailableReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Unavailable',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                return(
                                    <Unavailable/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )