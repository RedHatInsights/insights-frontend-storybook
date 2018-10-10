# Main

This component will allow you to wrap the main content in appropriate tags

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