import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// Component
import { Table, Pagination, TableVariant } from '@red-hat-insights/insights-frontend-components';

// README
import TableReadme from '../../../docs/components/table/TREEVIEW_README.md';
import { withReadme } from 'storybook-readme';
import { treeView } from './data';

class TreeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNodes: [3, 4],
            rows: treeView
        }

        this.onExpandClick = this.onExpandClick.bind(this);
    }

    onExpandClick(_event, row, rowKey) {
        const activeRow = this.state.rows[rowKey];
        const isActive = !activeRow.active
        let openNodes = this.state.openNodes;
        activeRow.active = isActive;
        if (!isActive) {
            activeRow.children.forEach(oneChild => {
                openNodes.splice(openNodes.indexOf(oneChild), 1);
            });
        } else {
            openNodes = [
                ...openNodes,
                ...row.children
            ]
        }
        this.setState({
            openNodes,
            rows: this.state.rows
        });
    }

    render() {

        return (
            <Table
                hasCheckbox
                onExpandClick={this.onExpandClick}
                expandable
                variant={TableVariant.large}
                header={[
                    { title: 'First', width: 10 },
                    { title: 'Second', width: 10 },
                    { title: 'Third', width: 40 },
                    { title: 'Fourth', width: 'max' }
                ]}
                rows={this.state.rows.map((oneRow, key) => {
                    if (!oneRow.hasOwnProperty('isOpen')) {
                        return oneRow;
                    }

                    oneRow.isOpen = this.state.openNodes.indexOf(key) !== -1;
                    return oneRow;
                })}
                footer={this.props.hasPagination && <Pagination numberOfItems={5} />}
            />
        )
    }
}

storiesOf('Components/Table', module)
    .addDecorator(withReadme(TableReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Treeview',
        {
            chapters: [
                {
                    title: 'Simple Treeview',
                    sections: [
                        {
                            title: 'Expandable rows',
                            sectionFn: ('', () => <TreeView />)
                        }
                    ],
                },
                {
                    title: 'With pagination',
                    sections: [
                        {
                            title: 'Expandable rows',
                            sectionFn: ('', () => <TreeView hasPagination />)
                        }
                    ],
                }
            ]
        }
    )
