import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, array } from '@storybook/addon-knobs';
import { StateDecorator, Store } from '@sambego/storybook-state';


// Component
import { TagModal } from '@redhat-cloud-services/frontend-components';
import { TagCount } from '@redhat-cloud-services/frontend-components';
// README
import TagModalReadme from '../../docs/components/tagModal/README.md';
import { withReadme }  from 'storybook-readme';
import { TagIcon } from '@patternfly/react-icons';

// Store
const store = new Store({
    isModalOpen: false,
    isModal2Open: false
});


// Story
storiesOf('Components', module)
    .addDecorator(withReadme(TagModalReadme))
    .addDecorator(StateDecorator(store))
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
                                const columns = array('Columns', ['Name','Source']);
                                const numRows = number('Number of Rows', 1);
                                const rows = [numRows];
                                for (let i = 0; i < numRows; i++) {
                                    rows[i] = array('Row ' + i + ' Cells', ['One','Two'])
                                }

                                return (
                                    <div>
                                        <TagCount count={11} onTagClick={() => store.set({ isModalOpen: !store.get("isModalOpen")})} />
                                        <TagModal 
                                            systemName="System" 
                                            isOpen={store.get("isModalOpen")} 
                                            rows={rows} 
                                            columns={columns} 
                                            toggleModal={() => store.set({ isModalOpen: !store.get("isModalOpen")})} />
                                    </div>
                                )
                            })
                        }
                    ]
                },{
                    title: 'Example',
                    sections: [
                        {
                            title: 'Simple example',
                            sectionFn: ('', () => {
                                return (
                                    <div>
                                        <TagCount count={2} onTagClick={() => store.set({ isModal2Open: !store.get("isModal2Open")})} />
                                        <TagModal 
                                            systemName="System" 
                                            isOpen={store.get("isModal2Open")} 
                                            columns={['col1','col2','col3']} 
                                            rows={
                                                [
                                                    ['one','two','three'],
                                                    ['four','five','six']
                                                ]
                                            } 
                                            toggleModal={() => store.set({ isModal2Open: !store.get("isModal2Open")})} />
                                    </div>
                                )
                            })
                        }
                    ]
                }
            ]
        }
    )