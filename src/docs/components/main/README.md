# Main

This component is a shim of [Patternfly PageSection component](https://v2.patternfly.org/documentation/react/components/page).
This will wrap the main content of your page and provide the appropriate spacing.

## Usage

```javascript

import { Main } from '@red-hat-insights/insights-frontend-components/components/Main';

const MyCmp = () => (
    <Main> {content} </Main>
)
```

## Use with PageHeader to make a page

```javascript
import { Main } from '@red-hat-insights/insights-frontend-components/components/Main';
import { PageHeader } from '@red-hat-insights/insights-frontend-components/components/PageHeader';
import { PageHeaderTitle } from '@red-hat-insights/insights-frontend-components/components/PageHeader';

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