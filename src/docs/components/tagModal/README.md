# Tag Count

This component is used to show the number of tags on a system

## Usage

Import TagCount from this package.

```JSX
import React from 'react';
import { TagCount } from '@redhat-cloud-services/frontend-components';

class YourCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state={modalOpen:false};
    }

    toggleModal = () => {
        this.setState(({ modalOpen }) => ({
            modalOpen: !modalOpen,
            columns: ['one','two'],
            rows: [['one','two'],['three','four']]
        }));
    }

    render() {
        return (
            <div>
                <TagCount count={11} onTagClick={this.toggleModal} />
                <TagModal systemName="System" isOpen={this.state.modalOpen} rows={this.state.rows} columns={this.state.columns} toggleModal={this.toggleModal} />
            </div>
        )
    }
}
```

## Props

```javascript
{
    systemName: PropTypes.string,
    isOpen: PropTypes.bool,
    toggleModal: PropTypes.func,
    rows: PropTypes.array,
    columns: PropTypes.array,
    className: PropTypes.string
};
```
