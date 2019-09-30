# Tag Count

This component is used to show the number of tags on a system

## Usage

Import TagCount from this package.

```JSX
import React from 'react';
import { TagCount } from '@redhat-cloud-services/frontend-components';

class YourCmp extends React.Component {
  render() {
    return (
      <TagCount count={10} onTagClick={funcionName}>
    )
  }
}
```

## Props

```javascript
{
    count: PropTypes.number,
    onTagClick: PropTypes.func,
    className: PropTypes.string
};
```
