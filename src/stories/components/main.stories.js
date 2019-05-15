import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// Component
import { Main } from '@red-hat-insights/insights-frontend-components';

// README
import MainReadme from '../../docs/components/main/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(MainReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Main',
        {
            chapters: [
                {
                    title: 'Main',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                return(
                                    <Main>
                                        <p>
                                            This is the main content of the page
                                        </p>
                                    </Main>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )