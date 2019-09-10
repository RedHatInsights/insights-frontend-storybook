# Invalid Object

This component is used to show when the requested object does not exist

## Usage

Import InvalidObject from this package.

```JSX
import React from 'react';
import { InvalidObject } from '@redhat-cloud-services/frontend-components';
import { BrowserRouter as Router } from 'react-router-dom';

class YourCmp extends React.Component {
  render() {
    return (
      <Router>
        <InvalidObject />
      </Router>
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
