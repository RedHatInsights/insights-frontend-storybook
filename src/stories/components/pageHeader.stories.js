import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Styling
import '../../stories.scss';

// Component
import { PageHeader, PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';

// README
import PageHeaderReadme from '../../docs/components/pageHeader/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components/PageHeader', module)
    .addDecorator(withReadme(PageHeaderReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Overview',
        {
            subtitle: 'PageHeader styling overview',
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const label = text('Label', 'Hello World!');
                                return(
                                    <PageHeader>
                                        <PageHeaderTitle title = {label}/>
                                    </PageHeader>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )