# Skeleton

Implementation of the Skeleton component, which is a loader for content

## Usage

### Async Component

Import Skeleton from this package in a file where you load your component. In this case, we're using the default asyncComponent to make a Card Skeleton.

#### CardSkeletonExample.js

```JSX
import React, { Component } from 'react';

import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import { Skeleton } from '@red-hat-insights/insights-frontend-components';

export default function CardSkeletonExample(importComponent) {
    class CardSkeletonExample extends Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({
                component
            });
        }

        render() {
            const C = this.state.component;

            return C ? <C { ...this.props } /> :
                <Card className='ins-c-foo-card ins-c-card__skeleton'>
                    <CardHeader>
                        <Skeleton size='md'/>
                    </CardHeader>
                    <CardBody>
                        <Skeleton size='lg'/>
                    </CardBody>
                    <CardFooter>
                        <Skeleton size='sm'/>
                    </CardFooter>
                </Card>;
        }
    }

    return CardSkeletonExample;
}
```

### Main file

#### Main.js

```JSX
import React from 'react';

// Import the async component you made above
import CardSkeletonExample from '../../Utilities/CardSkeletonExample.js';

// Import Actual Card using the CardSkeletonExample async component
const FinalCard = CardSkeletonExample(() => import('../../PresentationalComponents/Cards/FinalCard.js'));

class YourCmp extends React.Component {

    render() {
        return (
            // Your card will be rendered with the async component. When it loads on the page, you will get the skeleton.
            // When <FinalCard> actually mounts, the component will switch from the skeleton to the final version.
            <FinalCard/>
        );
    }
}
```

## Props

Skeleton

```javascript
{
    className: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};
```
