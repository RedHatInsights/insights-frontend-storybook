import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, text, button, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// Styling
import '../../../stories.scss';

// Component
import { Table, Pagination, TableVariant, SortDirection, dropDirection, SimpleTableFilter } from '@red-hat-insights/insights-frontend-components';

// README
import TableReadme from '../../../docs/components/table/README.md';
import { withReadme }  from 'storybook-readme';

import { liveTable } from './data';

import orderBy from 'lodash/orderBy';
import get from 'lodash/get';

class LiveTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: liveTable,
            itemsPerPage: 10,
            page: 1,
            sortBy: {
            }
        }

        this.onSort = this.onSort.bind(this);
        this.perPageSelect = this.perPageSelect.bind(this);
        this.setPage = this.setPage.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    onSort(_event, column, direction) {
        // This functionality should be part of redux reducer
        const sortedRows = orderBy(
            this.state.rows,
            [e => get(e, `cells.${column}`)],
            [SortDirection.up === direction ? 'asc' : 'desc']
        );
        this.setState({
            sortBy: {
                index: column,
                direction
            },
            entities: sortedRows
        });
    }

    onSelect(_event, index, isSelected) {
        const { page, itemsPerPage } = this.state;
        const selectedRow = this.state.rows[parseInt(index, 10) + ((page - 1) * itemsPerPage)];
        selectedRow.selected = isSelected;
        let selectedEntity;
        if (this.state.entities) {
            selectedEntity = this.state.entities && this.state.entities[parseInt(index, 10)];
            selectedEntity.selected = isSelected
        }
        this.setState({
            rows: this.state.rows,
            entities: this.state.entities
        })
    }

    setPage(page) {
        this.setState({
            page
        });
    }

    perPageSelect(itemsPerPage) {
        this.setState({
            itemsPerPage
        });
    }

    onFilter(filterString) {
        const entities = this.state.rows.filter(oneRow => oneRow.cells[0].indexOf(filterString) !== -1)
        this.setState({
            entities
        })
    }

    render() {
        const { page, itemsPerPage } = this.state
        return (
            <div>
                <SimpleTableFilter
                    onButtonClick={this.onFilter}
                    onFilterChange={(filterString) => this.props.onKey && this.onFilter(filterString)}
                    buttonTitle={this.props.onKey ? '' : 'Filter'}
                />
                <Table
                    hasCheckbox
                    onItemSelect={this.onSelect}
                    onExpandClick={this.onExpandClick}
                    onSort={this.onSort}
                    sortBy={this.state.sortBy}
                    variant={TableVariant.large}
                    header={[
                        { title: 'First', width: 10 },
                        { title: 'Second', width: 10 },
                        { title: 'Third', width: 40 },
                        { title: 'Fourth', width: 'max' }
                    ]}
                    rows={(this.state.entities || this.state.rows).slice((page - 1) * itemsPerPage, page * itemsPerPage)}
                    footer={
                        <Pagination
                            onSetPage={this.setPage}
                            onPerPageSelect={this.perPageSelect}
                            page={page}
                            itemsPerPage={itemsPerPage}
                            direction={dropDirection.up}
                            numberOfItems={liveTable.length}
                        />
                    }
                />
            </div>
        )
    }
}

storiesOf('Components/Table', module)
    .addDecorator(withReadme(TableReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Live',
        {
            chapters: [
                {
                    title: 'Action table',
                    sections: [
                        {
                            title: 'Filter on click',
                            sectionFn: ('', () => <LiveTable />)
                        },
                        {
                            title: 'Filter on key',
                            sectionFn: ('', () => <LiveTable onKey />)
                        }
                    ],
                }
            ]
        }
    )
    