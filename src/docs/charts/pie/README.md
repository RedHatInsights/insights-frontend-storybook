
# Pie Chart

This component is usefull to display x number of values to compare them to an overall value in pie chart format

```jsx
import React from 'react'
import { Pie } from '@red-hat-isnights/insights-frontend-components';

let PieValues = [
    ['value1', 5],
    ['value2', 10],
    ['value3', 20],
    ['value4', 40]
];

<Pie values={PieValues} identifier='pie-identifier'/>;

```

## Pie with Legend

```jsx

<Pie values={PieValues} identifier='pie-identifier' withLegend/>;

```

## Pie with Legend and Links

```jsx

const typeLink = '/foo/';

// The link prop will append the label (value1, value2, value3, value4) to the typeLink const
// in this case, you'll get the link /actions/value1 etc.

<Pie values={PieValues} link={typeLink} identifier='pie-identifier' withLegend/>;

```

## Props

```JS
{
    className: propTypes.string,
    height: propTypes.number,
    identifier: propTypes.string,
    values: propTypes.array,
    width: propTypes.number,
    withLabel: propTypes.bool,
}
```