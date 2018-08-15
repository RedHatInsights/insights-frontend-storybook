import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

// Styling
import '../../stories.scss';

// Component
import { Ansible } from '@red-hat-insights/insights-frontend-components';

// README
import PageHeaderReadme from '../../docs/components/ansible/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components', module)
    .addDecorator(withReadme(PageHeaderReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Ansible Icon',
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
                                    <Ansible unsupported={boolean('unsupported', false)}/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )