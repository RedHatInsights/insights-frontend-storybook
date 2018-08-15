import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
// Styling
import '../../stories.scss';

// Component
import { Section, Battery } from '@red-hat-insights/insights-frontend-components';
import { Button } from '@patternfly/react-core'

// README
import SectionReadme from '../../docs/components/section/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components', module)
    .addDecorator(withReadme(SectionReadme))
    .addWithChapters(
        'Section',
        {
            chapters: [
                {
                    title: 'There are multiple ways to display layouts',
                    sections: [
                        {
                            title: 'Content',
                            sectionFn: ('', () => {
                                return (
                                    <Section type = 'content'>
                                        <p> Content </p>
                                    </Section>
                                )
                            })
                        },
                        {
                            title: 'Button Group',
                            sectionFn: ('', () => {
                                return (
                                    <Section type = 'button-group'>
                                        <Button> Content </Button>
                                        <Button> Content </Button>
                                        <Button> Content </Button>
                                    </Section>
                                )
                            })
                        },
                        {
                            title: 'Icon Group',
                            sectionFn: ('', () => {
                                return (
                                    <Section type = 'icon-group'>
                                        <Battery severity='critical' label='First'/>
                                        <Battery severity='medium' label='Second'/>
                                        <Battery severity='low' label='Third'/>
                                    </Section>
                                )
                            })
                        },
                        {
                            title: 'Icon Group with distinguished value',
                            sectionFn: ('', () => {
                                return (
                                    <Section type = 'icon-group__with-major'>
                                        <Battery severity='critical' label='First'/>
                                        <Battery severity='medium' label='Second'/>
                                        <Battery severity='low' label='Third'/>
                                        <Battery severity='high' label='This is the distinguished value'/>
                                    </Section>
                                )
                            })
                        }
                    ],
                }
            ]
        }
    )