import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter as Router } from 'react-router-dom';

// Component
import { InvalidObject } from '@redhat-cloud-services/frontend-components';

// README
import InvalidObjectReadMe from '../../docs/components/invalidObject/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(InvalidObjectReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Invalid Object',
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
                                    <Router>
                                        <InvalidObject />
                                    </Router>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )