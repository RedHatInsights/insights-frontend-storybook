import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// Styling
import '../../stories.scss';

// Component
import { Main } from '@red-hat-insights/insights-frontend-components';

// README
import MainReadme from '../../docs/components/main/README.md';
import { withReadme }  from 'storybook-readme';

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