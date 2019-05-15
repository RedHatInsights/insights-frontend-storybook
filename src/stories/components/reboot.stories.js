import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// Component
import { Reboot } from '@red-hat-insights/insights-frontend-components';

// README
import RebootReadMe from '../../docs/components/reboot/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(RebootReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Reboot Icon',
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
                                    <Reboot red={boolean('red', false)}/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )