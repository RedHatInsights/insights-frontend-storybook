# Ansible Icon

Implementation of 'ansible' icon that represent levels of severity.

## Usage

Import Ansible and styles from this package.

```JSX
import React from 'react';
import { Ansible } from '@red-hat-insights/insights-frontent-components/';

class YourCmp extends React.Component {
  render() {
    return (
        { /* Default is true*/ }
        <Ansible/>

        { /* Unsupported */ }
        <Ansible unsupported/>
    )
  }
}
```

## Props

Ansible

```javascript
{
    unsupported: propTypes.bool
};
```