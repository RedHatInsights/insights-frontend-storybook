import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

// Component
import { Dark, PageHeader, PageHeaderTitle, Main } from '@red-hat-insights/insights-frontend-components';

// README
import DarkReadMe from '../../docs/components/dark/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components', module)
    .addDecorator(withReadme(DarkReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Dark Mode',
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
                                    <Dark>
                                        <PageHeader>
                                            <PageHeaderTitle title = 'dark title'/>
                                        </PageHeader>
                                        <Main>
                                            <p> dark body text </p>
                                        </Main>
                                    </Dark>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )