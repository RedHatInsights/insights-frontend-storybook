# Section

This component will allow you to use `ins-l-` prefixes for layout classes

## Usage

Import Section component and its styles.

### Current Classes

`type='content'` = `ins-l-content`

`type='button-group'` = `ins-l-button-group`

```javascript

import { Section } from '@redhat-insights/insights-frontend-components/components/Section';
import '@redhat-insights/insights-frontend-components/components/Section.css'
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