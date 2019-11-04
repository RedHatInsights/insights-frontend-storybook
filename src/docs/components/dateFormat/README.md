# Date Format

Date Format component shows date in three different formats. Relative, exact and onlyDate. Default type is relative.

## Usage

Import DateFormat from this package.

```JSX
import React from 'react';
import { DateFormat } from '@redhat-cloud-services/frontend-components';

class YourCmp extends React.Component {
  render() {
    return (<div>
                <DateFormat date={1567} />
                <DateFormat date={new Date('Aug 31 2019 00:00:00 UTC'))} />
                <DateFormat date='Aug 31 2019 UTC' />
                <DateFormat type='relative'  date='Aug 31 2019 UTC' />
                <DateFormat type='exact' date='Aug 31 2019 UTC' />
                <DateFormat type='onlyDate' date='Aug 31 2019 UTC' />
            </div>
    )
  }
}
```

## Props

DateFormat

```javascript
{
    date: PropTypes.oneOfType([ PropTypes.instanceOf(Date), PropTypes.string, PropTypes.number ]),
    type: PropTypes.oneOf([ 'exact', 'onlyDate', 'relative' ])
};
```
