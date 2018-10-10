# Dark

This component will allow you to wrap the main and pageHeader to make both have dark backgrounds.

This component uses React's context selector.

## Usage

```javascript

import { Dark, PageHeader, PageHeaderTitle, Main } from '@red-hat-insights/insights-frontend-components';

const MyCmp = () => (
    <Dark>
        <PageHeader>
            <PageHeaderTitle title='title'/>
        <PageHeader>
        <Main>
            { content }
        </Main>
    </Dark>
)
```

## Props

```javascript
{
    className: propTypes.string,
    children: propTypes.any.isRequired,
}
```