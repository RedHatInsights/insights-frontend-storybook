import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Styling
import '../../stories.scss';

// Component
import { Section } from '@red-hat-insights/insights-frontend-components';
import { Button } from '@patternfly/react-core'

// README
import SectionReadme from '../../docs/components/section/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components', module)
    .addDecorator(withReadme(SectionReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Section',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const type = {
                                    content: 'Content',
                                    ['button-group']: 'Button Group'
                                };
                                const typeSelector = select('Type', type);
                                switch (typeSelector) {
                                    case 'content':
                                        return(
                                            <Section type = {typeSelector}>
                                                <p> Content </p>
                                            </Section>
                                        );
                                    case 'button-group':
                                        return(
                                            <Section type = {typeSelector}>
                                                <Button> Button 1 </Button>
                                                <Button> Button 1 </Button>
                                                <Button> Button 1 </Button>
                                            </Section>
                                        );
                                }
                            })
                        },
                    ],
                }
            ]
        }
    )