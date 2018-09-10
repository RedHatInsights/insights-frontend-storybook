import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, text, button, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// Styling
import '../../../stories.scss';

// Component
import { Table, Pagination, TableVariant } from '@red-hat-insights/insights-frontend-components';

// README
import TableReadme from '../../../docs/components/table/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Components/Table', module)
    .addDecorator(withReadme(TableReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Basic',
        {
            chapters: [
                {
                    title: 'Simple table',
                    sections: [
                        {
                            title: 'With pagination',
                            sectionFn: ('', () => {
                                return (
                                    <Table
                                        hasCheckbox
                                        header={['First', 'Second', 'Third']}
                                        sortBy={
                                          {
                                            index: select('Sort by', ['0', '1', '2'], '0'),
                                            direction: select('Sort direction', ['up', 'down'], 'up')
                                          }
                                        }
                                        rows={[
                                          {cells: ['1-1', '1-2', '1-3']},
                                          {cells: ['2-1', '2-2', '2-3']},
                                          {cells: ['3-1', '3-2', '3-3']},
                                          {cells: ['4-1', '4-2', '4-3']},
                                          {cells: ['5-1', '5-2', '5-3']}
                                        ]}
                                        onItemSelect={action('on-select')}
                                        onSort={action('on-sort')}
                                        onItemSelect={action('on-item-select')}
                                        onRowClick={action('on-row-click')}
                                        footer={<Pagination numberOfItems={5} />}
                                    />
                                )
                            })
                        },
                        {
                          title: 'Large',
                          sectionFn: ('', () => {
                              return (
                                  <Table
                                      hasCheckbox
                                      variant={TableVariant.large}
                                      header={['First', 'Second', 'Third']}
                                      sortBy={
                                        {
                                          index: select('Sort by', ['0', '1', '2'], '0'),
                                          direction: select('Sort direction', ['up', 'down'], 'up')
                                        }
                                      }
                                      rows={[
                                        {cells: ['1-1', '1-2', '1-3']},
                                        {cells: ['2-1', '2-2', '2-3']},
                                        {cells: ['3-1', '3-2', '3-3']},
                                        {cells: ['4-1', '4-2', '4-3']},
                                        {cells: ['5-1', '5-2', '5-3']}
                                      ]}
                                      onItemSelect={action('on-select')}
                                      onSort={action('on-sort')}
                                      onItemSelect={action('on-item-select')}
                                      onRowClick={action('on-row-click')}
                                      footer={<Pagination numberOfItems={5} />}
                                  />
                              )
                          })
                      }
                    ],
                },
                {
                  title: 'Custom header config',
                  sections: [
                    {
                      title: 'Width',
                      sectionFn: ('', () => (
                        <Table 
                          header={[{
                            title: 'First',
                            fitContent: true,
                          },
                          {
                            title: 'Second',
                            width: 30
                          },
                          {
                            title: 'Third',
                            width: 'max'
                          }]}
                          sortBy={
                            {
                              index: select('Sort by', ['0', '1', '2'], '0'),
                              direction: select('Sort direction', ['up', 'down'], 'up')
                            }
                          }
                          rows={[
                            {cells: ['1-1', '1-2', '1-3']},
                            {cells: ['2-1', '2-2', '2-3']},
                            {cells: ['3-1', '3-2', '3-3']}
                          ]}
                          onSort={action('on-sort')}
                          onItemSelect={action('on-item-select')}
                          onRowClick={action('on-row-click')}
                          footer={<Pagination numberOfItems={3} />}
                        />
                        )
                      )
                    },
                    {
                      title: 'Sorting on/off',
                      sectionFn: ('', () => (
                        <Table 
                          header={[
                            'First',
                            {title: 'Second', hasSort: false},
                            {title: 'Third', hasSort: 'true' === select('Sort by Third', ['true', 'false'], 'true')}
                          ]}
                          sortBy={
                            {
                              index: select('Sort by', ['0', '1', '2'], '0'),
                              direction: select('Sort direction', ['up', 'down'], 'up')
                            }
                          }
                          rows={[
                            {cells: ['1-1', '1-2', '1-3']},
                            {cells: ['2-1', '2-2', '2-3']},
                          ]}
                          onSort={action('on-sort')}
                          onItemSelect={action('on-item-select')}
                          onRowClick={action('on-row-click')}
                          footer={<Pagination numberOfItems={2} />}
                        />
                      )
                    )
                    }
                  ]
                },
                {
                  title: 'Custom cell config',
                  sections: [
                    {
                      title: 'Object as row',
                      sectionFn: ('', () => (<Table
                          hasCheckbox
                          header={['First', 'Second', 'Third']}
                          sortBy={
                            {
                              index: select('Sort by', ['0', '1', '2'], '0'),
                              direction: select('Sort direction', ['up', 'down'], 'up')
                            }
                          }
                          rows={{
                            first: {cells: ['1-1', '1-2', '1-3']},
                            second: {cells: ['2-1', '2-2', '2-3']},
                            third: {cells: ['2-1', '2-2', '2-3']}
                          }}
                          onSort={action('on-sort')}
                          onItemSelect={action('on-item-select')}
                          onRowClick={action('on-row-click')}
                          onItemSelect={action('on-select')}
                          footer={<Pagination numberOfItems={3} />}
                        />
                        )
                      )
                    },
                    {
                      title: 'IDs for keys as id',
                      sectionFn: ('', () => (<Table
                          hasCheckbox
                          header={['First', 'Second', 'Third']}
                          sortBy={
                            {
                              index: select('Sort by', ['0', '1', '2'], '0'),
                              direction: select('Sort direction', ['up', 'down'], 'up')
                            }
                          }
                          rows={[
                            {
                              id: 10004,
                              cells: ['1-1', '1-2', '1-3']
                            },
                            {
                              id: 10057,
                              cells: ['2-1', '2-2', '2-3']
                            },
                            {
                              id: 10093,
                              cells: ['2-1', '2-2', '2-3']
                            }
                          ]}
                          onSort={action('on-sort')}
                          onItemSelect={action('on-item-select')}
                          onRowClick={action('on-row-click')}
                          onItemSelect={action('on-select')}
                          footer={<Pagination numberOfItems={3} />}
                        />
                        )
                      )
                    },
                    {
                      title: 'Custom classes',
                      sectionFn: ('', () => (<Table
                          header={['First', 'Second', 'Third']}
                          sortBy={
                            {
                              index: select('Sort by', ['0', '1', '2'], '0'),
                              direction: select('Sort direction', ['up', 'down'], 'up')
                            }
                          }
                          rows={[
                            {cells: [{title: '1-1', className: text('Custom class', 'pf-c-table__action pf-m-shrink')}, '1-2', '1-3']},
                            {cells: ['2-1', '2-2', '2-3']},
                            {cells: ['2-1', '2-2', '2-3']},
                          ]}
                          onSort={action('on-sort')}
                          onItemSelect={action('on-item-select')}
                          onRowClick={action('on-row-click')}
                          footer={<Pagination numberOfItems={3} />}
                        />
                        )
                      )
                    },
                  ]
                }
            ]
        }
    )
    