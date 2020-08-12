import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// Component
import { Maintenance } from '@redhat-cloud-services/frontend-components';

// README
import MaintenanceReadMe from '../../docs/components/maintenance/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(MaintenanceReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Maintenance',
        {
            chapters: [
                {
                    title: 'Demo',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                return(
                                    <Maintenance />
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )