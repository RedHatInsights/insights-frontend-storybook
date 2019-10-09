# Main

This component is a shim of [Patternfly PageSection component](https://www.patternfly.org/v4/documentation/react/overview/notes/#components).
This will wrap the main content of your page and provide the appropriate spacing.

## Usage

```javascript

import { Main } from '@redhat-cloud-services/frontend-components';

const MyCmp = () => (
    <Main> {content} </Main>
)
```

## Use with PageHeader to make a page

```javascript
import { Main, PageHeader, PageHeaderTitle } from '@redhat-cloud-services/frontend-components';

const MyCmp = () => (
    <React.Fragment>
        <PageHeader>
            <PageHeaderTitle title='Title'/>
        </PageHeader>
        <Main>
            { content }
        </Main>
    </React.Fragment>
)

```

## Props

### Main props

```javascript
{
    className: propTypes.string,
    children: propTypes.any.isRequired,
}
```
