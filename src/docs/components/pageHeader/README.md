# PageHeader

This component will allow you to make headers for each page

## Usage

Import PageHeader component and its styles.
HTML `input`.

```javascript

import { PageHeader } from '@redhat-cloud-services/frontend-components';

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

import { PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

import React from 'react';

const MyCmp = () => (
    <PageHeader>
        <PageHeaderTitle title='Title'/>
    </PageHeader>
)

```

## Props

### PageHeader props

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
