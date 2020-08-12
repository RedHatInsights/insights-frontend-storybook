# Maintenance

This should be shown when an app or page is undergoing maintenance.

## Usage

```javascript

import { Maintenance } from '@redhat-cloud-services/frontend-components';

const MyCmp = () => (
    <Maintenance startTime='5am' endTime='6am' timeZone='EST' />
)
```

## Use with custom description

```javascript
import { Maintenance } from '@redhat-cloud-services/frontend-components';

const MyCmp = () => (
    <Maintenance description={<span> new description </span>}/>
)

```

## Props

### Maintenance props

```javascript
{
    startTime: propTypes.string,
    endTime: propTypes.string,
    timeZone: propTypes.string,
    description: propTypes.node
}
```
