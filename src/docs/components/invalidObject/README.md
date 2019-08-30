# Spinner

This component is used to show when the requested object does not exits

## Usage

Import InvalidObject from this package.

```JSX
import React from 'react';
import { InvalidObject } from '@redhat-cloud-services/frontend-components';

class YourCmp extends React.Component {
  render() {
    return (
        <InvalidObject/>
    )
  }
}
```

## Props

```javascript
{
    history: PropTypes.shape({
        goBack: PropTypes.func
    })
};
```
