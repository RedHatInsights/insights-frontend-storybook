import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

// Component
import { TableToolbar } from '@redhat-cloud-services/frontend-components';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

// README
import TableToolbarReadMe from '../../docs/components/tableToolbar/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(TableToolbarReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Table Toolbar',
        {
            chapters: [
                {
                    title: 'Demo to be used above the <Table> component',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {

                                return(
                                    <React.Fragment>
                                        <TableToolbar results={number('Results',0)}>
                                            Whatever content you want inside the toolbar (search, buttons, etc)
                                        </TableToolbar>
                                        <Table cells={['Column 1', 'Column 2']} rows={[['1', '2'], ['1', '2']]}>
                                            <TableHeader />
                                            <TableBody />
                                        </Table>
                                    </React.Fragment>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )