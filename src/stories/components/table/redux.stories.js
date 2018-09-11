import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Provider, connect } from 'react-redux';
// Styling
import '../../../stories.scss';

// Component
import {
    Table,
    Pagination,
    TableVariant,
    SimpleTableFilter,
    dropDirection,
    applyReducerHash
} from '@red-hat-insights/insights-frontend-components';

// README
import TableReadme from '../../../docs/components/table/README.md';
import { withReadme }  from 'storybook-readme';

import { liveTable } from './data';

import { init, tableReducers, sort, select, filter } from './redux';

const registry = init();

registry.register({
    table: applyReducerHash(
        tableReducers,
        // We'll supply default state here, but you should load these data from server
        {
            rows: liveTable,
            columns: [
                { title: 'First', width: 10 },
                { title: 'Second', width: 10 },
                { title: 'Third', width: 40 },
                { title: 'Fourth', width: 'max' }
            ]
        }
    )
});

class LiveTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsPerPage: 10,
            page: 1,
            filterString: '',
            sortBy: {
            }
        }

        this.onSort = this.onSort.bind(this);
        this.perPageSelect = this.perPageSelect.bind(this);
        this.setPage = this.setPage.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onSort(_event, column, direction) {
        this.setState({
            sortBy: {
                index: column,
                direction
            }
        });
        this.props.onSort(column, direction);
    }

    onFilterChange(filterString) {
        this.setState({
            filterString
        })
    }

    onSelect(_event, index, isSelected) {
        const { page, itemsPerPage } = this.state;
        this.props.onSelect(parseInt(index, 10) + ((page - 1) * itemsPerPage), isSelected);
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

    render() {
        const { page, itemsPerPage, filterString } = this.state
        const { columns, rows } = this.props;
        const filteredRows = rows.filter(oneRow => oneRow.cells[0].indexOf(filterString) !== -1);
        return (
            <div>
                <SimpleTableFilter onButtonClick={this.onFilterChange} />
                <Table
                    hasCheckbox
                    onItemSelect={this.onSelect}
                    onExpandClick={this.onExpandClick}
                    onSort={this.onSort}
                    sortBy={this.state.sortBy}
                    variant={TableVariant.large}
                    header={columns}
                    rows={filteredRows.slice((page - 1) * itemsPerPage, page * itemsPerPage)}
                    footer={
                        <Pagination
                            onSetPage={this.setPage}
                            onPerPageSelect={this.perPageSelect}
                            page={page}
                            itemsPerPage={itemsPerPage}
                            direction={dropDirection.up}
                            numberOfItems={filteredRows.length}
                        />
                    }
                />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSort: (index, direction) => dispatch(sort(index, direction)),
        onSelect: (index, isSelected) => dispatch(select(index, isSelected)),
    }
}

function mapStateToProps({table: {rows, columns}}) {
    return {
        rows,
        columns
    }
}

const ReduxTable = connect(mapStateToProps, mapDispatchToProps)(LiveTable);

const description = `
Do not try to add all things to redux, it\'s not that necessary and you will bump into multiple problems.

For instance filtering and pagination done "locally" and sorting and selecting
done in redux is great example.

Of course you could done all these things in redux, for instance if you paginate over to server you'll want to send 
these data trough redux. However if you fetch once and filter + paginate locally it's not really needed.
`

storiesOf('Components/Table', module)
    .addDecorator(withReadme(TableReadme))
    .addDecorator(withKnobs)
    .addDecorator(story => <Provider store={registry.getStore()}>{story()}</Provider>)
    .addWithChapters(
        'Live - redux',
        {
            chapters: [
                {
                    title: 'Live table connected to redux',
                    info: description,
                    sections: [
                        {
                            title: 'Filter and pagination done without redux',
                            sectionFn: ('', () => <ReduxTable />)
                        }
                    ],
                }
            ]
        }
    )
    