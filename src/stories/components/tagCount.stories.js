import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';


// Component
import { TagCount } from '@redhat-cloud-services/frontend-components';

// README
import TagCountReadme from '../../docs/components/tagCount/README.md';
import { withReadme }  from 'storybook-readme';
import { TagIcon } from '@patternfly/react-icons';


// Story
storiesOf('Components', module)
    .addDecorator(withReadme(TagCountReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Tag Count',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const count = number('Count', 0);
                                return (
                                    <TagCount count={count} onTagClick={()=>{}} />
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'States',
                    sections: [
                        {
                            title: 'TagCount 0',
                            sectionFn: ('', () => {
                                return (
                                    <TagCount count={0} onTagClick={()=>{}} />
                                )
                            })
                        },
                        {
                            title: 'TagCount of more than 0',
                            sectionFn: ('', () => {
                                return (
                                    <TagCount count={11} onTagClick={()=>{}} />
                                )
                            })
                        }
                    ]
                }
            ]
        }
    )