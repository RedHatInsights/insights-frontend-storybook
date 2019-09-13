import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// Component
import { Skeleton } from '@redhat-cloud-services/frontend-components';

// README
import SkeletonReadMe from '../../docs/components/skeleton/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(SkeletonReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Skeleton',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Different Sized Skeletons',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                return(
                                    <div className='skeleton-container'>
                                        <Skeleton size='xs' isDark={boolean('isDark', false)}/>
                                        <Skeleton size='sm' isDark={boolean('isDark', false)}/>
                                        <Skeleton size='md' isDark={boolean('isDark', false)}/>
                                        <Skeleton size='lg' isDark={boolean('isDark', false)}/>
                                    </div>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )