import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// Component
import { Ansible } from '@red-hat-insights/insights-frontend-components';

// README
import AnsibleReadMe from '../../docs/components/ansible/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components', module)
    .addDecorator(withReadme(AnsibleReadMe))
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