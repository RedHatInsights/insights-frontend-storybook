import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, array } from '@storybook/addon-knobs';


// Component
import { TagModal } from '@redhat-cloud-services/frontend-components';
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
        'Tag Modal',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const isOpen = boolean('isOpen', false);
                                const columns = array('Columns', ['Name','Source']);
                                const numRows = number('Number of Rows', 1);
                                const rows = [numRows];
                                for (let i = 0; i < numRows; i++) {
                                    rows[i] = array('Row ' + i + ' Cells', ['One','Two'])
                                }
                                return (
                                    <div>
                                        <TagCount count={11} onTagClick={()=>{isOpen = true;}} />
                                        <TagModal systemName="System" isOpen={isOpen} rows={rows} columns={columns} toggleModal={()=>{isOpen = false;}} />
                                    </div>
                                )
                            })
                        }
                    ]
                }
            ]
        }
    )