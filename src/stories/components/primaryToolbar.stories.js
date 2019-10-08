import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs';

// Component
import { PrimaryToolbar } from '@redhat-cloud-services/frontend-components';
import { Button } from '@patternfly/react-core';

// README
import Readme from '../../docs/components/conditional-filter/README.md';
import { withReadme } from 'storybook-readme';
import '@patternfly/patternfly/components/Select/select.css';

storiesOf('Components', module)
    .addDecorator(withReadme(Readme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Primary toolbar',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                const paginationGroup = 'pagination';
                                const actionsGroup = 'actions';
                                const sortByGroup= 'sortBy';
                                const bulkSelectGroup = 'bulkSelect';
                                const filterGroup = 'filters';
                                const activeFiltersGroup = 'aciveFilters';
                                const pagination = {
                                    itemCount: number('Item count', 100, {}, paginationGroup),
                                    page: number('Current page', 1, {}, paginationGroup),
                                    perPage: number('Per page', 10, {}, paginationGroup)
                                }
                                const actionsConfig = {
                                    actions: [
                                        {
                                            label: text('First action label', 'Some action', actionsGroup),
                                            props: {}
                                        },
                                        text('Second action label', 'Another action', actionsGroup)
                                    ]
                                }
                                const sortByConfig = {
                                    direction: select('Sort direction', { Asc: 'asc', Desc: 'desc' }, 'asc', sortByGroup)
                                }
                                const bulkSelect = {
                                    items: [{
                                        title: text('First select title', 'Select all', bulkSelectGroup)
                                    }],
                                    checked: boolean('checked', false, bulkSelectGroup),
                                    count: number('Selected', 10, {}, bulkSelectGroup)
                                };
                                const filterConfig = {
                                    items: [{
                                        label: text('First filter', 'Text', filterGroup)
                                    }, {
                                        label: text('Second filter', 'Checkbox', filterGroup),
                                        type: 'checkbox',
                                        filterValues: {
                                            items: [{ label: 'Some checkbox' }]
                                        }
                                    }]
                                };
                                const activeFiltersConfig = {
                                    filters: [{
                                        category: text('First Category', 'Category', activeFiltersGroup),
                                        chips: [{
                                            name: text('First Chip', 'Chip 1', activeFiltersGroup)
                                        }, {
                                            name: text('Second Chip', 'Chip 2', activeFiltersGroup)
                                        }]
                                    }, {
                                        category: text('Second Category', 'Another', activeFiltersGroup),
                                        chips: [{
                                            name: text('Third Chip', 'Chip 3', activeFiltersGroup)
                                        }]
                                    }, {
                                        name: text('No category', 'Chip 4', activeFiltersGroup)
                                    }]
                                }
                                return (
                                    <PrimaryToolbar
                                        activeFiltersConfig={ activeFiltersConfig }
                                        filterConfig={ filterConfig }
                                        bulkSelect={ bulkSelect }
                                        sortByConfig={ sortByConfig }
                                        actionsConfig={ actionsConfig }
                                        pagination={ pagination }
                                        exportConfig={{ onSelect: () => undefined }}
                                    />
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Config fields',
                    subtitle: 'Use different configs in order to show specific components, \
                    each section can containt custom component',
                    sections: [
                        {
                            title: 'Bulk select',
                            sectionFn: ('', () => (
                                <PrimaryToolbar
                                    bulkSelect={{
                                        items: [{
                                            title: 'Select none'
                                        }, {
                                            title: 'Select page'
                                        }, {
                                            title: 'Select all'
                                        }],
                                        count: 100
                                    }}
                                />
                            ))
                        },
                        {
                            title: 'Filter config',
                            sectionFn: ('', () => (
                                <PrimaryToolbar
                                    filterConfig={{
                                        items: [{
                                            label: 'Text filter'
                                        }, {
                                            label: 'Checkbox filter',
                                            type: 'checkbox',
                                            filterValues: {
                                                items: [{ label: 'First checkbox' }],
                                                items: [{ label: 'Second checkbox' }],
                                                items: [{ label: 'Third checkbox' }]
                                            }
                                        }, {
                                            label: 'Radio filter',
                                            type: 'radio',
                                            filterValues: {
                                                items: [{ label: 'First radio' }],
                                                items: [{ label: 'Second radio' }],
                                                items: [{ label: 'Third radio' }]
                                            }
                                        }]
                                    }}
                                />
                            ))
                        },
                        {
                            title: 'Acitions config - you can use Node, Object with label or string',
                            sectionFn: ('', () => (
                                <PrimaryToolbar
                                    actionsConfig={{
                                        actions: [
                                            <Button>First action</Button>,
                                            {
                                                label: 'Some action',
                                                props: {}
                                            },
                                            'Another action'
                                        ]
                                    }}
                                />
                            ))
                        },
                        {
                            title: 'Sort by config',
                            sectionFn: ('', () => (
                                <PrimaryToolbar
                                    sortByConfig={{
                                        direction: 'desc'
                                    }}
                                />
                            ))
                        },
                        {
                            title: 'Exports config - extraItems to add some other exports options',
                            sectionFn: ('', () => (
                                <PrimaryToolbar
                                    exportConfig={{
                                        onSelect: () => undefined,
                                        extraItems: [
                                            <div>Something else</div>
                                        ]
                                    }}
                                />
                            ))
                        },
                        {
                            title: 'Pagination config',
                            sectionFn: ('', () => (
                                <PrimaryToolbar
                                    pagination={{
                                        itemCount: 100,
                                        page: 1,
                                        perPage: 10
                                    }}
                                />
                            ))
                        },
                        {
                            title: 'Active filters config',
                            sectionFn: ('', () => (
                                <PrimaryToolbar
                                    activeFiltersConfig={{
                                        filters: [{
                                            category: 'Category',
                                            chips: [{
                                                name: 'Chip 1'
                                            }, {
                                                    name: 'Chip 2'
                                            }]
                                        }, {
                                            category: 'Another',
                                            chips: [{
                                                name: 'Chip 3'
                                            }]
                                        }, {
                                            name: 'Chip 4'
                                        }]
                                    }}
                                />
                            ))
                        }
                    ],
                },
            ]
        }
    )
