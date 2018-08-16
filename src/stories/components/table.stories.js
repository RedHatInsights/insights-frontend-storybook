import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, button } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
// Styling
import '../../stories.scss';

// Component
import { Table, Pagination } from '@red-hat-insights/insights-frontend-components';
import { Button } from '@patternfly/react-core'

// README
import TableReadme from '../../docs/components/table/README.md';
import { withReadme }  from 'storybook-readme';

let cells = ['First', 'Second', 'Third'];

let rows = [
    {cells: ['1-1', '1-2', '1-3']},
    {cells: ['2-1', '2-2', '2-3']},
    {cells: ['3-1', '3-2', '3-3']},
    {cells: ['4-1', '4-2', '4-3']},
    {cells: ['5-1', '5-2', '5-3']}
]

storiesOf('Components', module)
    .addDecorator(withReadme(TableReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Table',
        {
            chapters: [
                {
                    title: 'Simple table with pagination, content can be changed from knobs',
                    sections: [
                        {
                            title: 'Content',
                            sectionFn: ('', () => {
                                return (
                                    <Table 
                                        header={cells.map(oneCell => text(oneCell, oneCell))}
                                        rows={rows.map((oneRow, key) => ({
                                            cells: oneRow.cells.map(oneCell => text(oneCell, oneCell))
                                        }))}
                                        footer={<Pagination numberOfItems={3} />}
                                    />
                                )
                            })
                        }
                    ],
                }
            ]
        }
    )
    