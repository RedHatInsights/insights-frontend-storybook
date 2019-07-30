# Section

This component will allow you to use `ins-l-` prefixes for layout classes

## Usage

Import Section component and its styles.

### Current Classes

`type='content'` = `ins-l-content`

`type='button-group'` = `ins-l-button-group`

`type='icon-group'` = `ins-l-icon-group`

`type='icon-group__with-major'` = `ins-l-icon-group__with-major`

```javascript
import { Section } from '@redhat-cloud-services/frontend-components';

import React from 'react';

const MyCmp = () => (
    <Section type='content'> {children} </PageHeader>
)

```

## Props

```javascript
{
  type: PropTypes.string,
  children: PropTypes.node
}
```
