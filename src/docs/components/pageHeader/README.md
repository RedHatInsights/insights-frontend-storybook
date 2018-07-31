# PageHeader

This component will allow you to make headers for each page

## Usage

Import PageHeader component and its styles.
HTML `input`.

```javascript

import { PageHeader } from '@redhat-insights/insights-frontend-components/components/PageHeader';
import '@redhat-insights/insights-frontend-components/components/PageHeader.css'
import React from 'react';

const MyCmp = () => (
    <PageHeader> {content} </PageHeader>
)

```

## Use with PageHeaderTitle

Creates a text header inside of PageHeader

Import PageHeader, PageHeaderTitle component and their styles.
HTML `input`.

```javascript

import { PageHeader } from '@redhat-insights/insights-frontend-components/components/PageHeader';
import { PageHeaderTitle } from '@redhat-insights/insights-frontend-components/components/PageHeader';

// PageHeaderTitle styles are located in PageHeader.css
import '@redhat-insights/insights-frontend-components/components/PageHeader.css'
import React from 'react';

const MyCmp = () => (
    <PageHeader>
        <PageHeaderTitle title='Title'/>
    </PageHeader>
)

```

## Props

### PageHeader

```javascript
{
  children: PropTypes.node
}
```

### PageHeaderTitle

```javascript

{
  title: PropTypes.string
}
```