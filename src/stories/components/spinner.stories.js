import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// Component
import { Spinner } from '@redhat-cloud-services/frontend-components';

// README
import SpinnerReadMe from '../../docs/components/spinner/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(SpinnerReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Spinner',
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
                                    <Spinner centered={boolean('centered', false)}/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )