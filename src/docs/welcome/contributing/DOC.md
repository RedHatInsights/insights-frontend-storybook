# Contributing

If you would like to contribute to this storybook:

## Setup

[Repo Link](https://github.com/RedHatInsights/insights-frontend-storybook)

### Development

`git clone git@github.com:RedHatInsights/insights-frontend-storybook.git`

`npm install`

`npm run start` to launch a browser and view the storybook, watches files

### Building

`npm run build` to build the storybook, used for testing

## Stories

If you would like to create a new story:

1. Add your documentation to the correct folder in `src/docs`

2. Create your story inside of the correct folder in `src/stories`

Example for strictly ReadMe and Docs:

```js
// Libraries
import { storiesOf } from '@storybook/react';
import { doc }  from 'storybook-readme';

// README
import Overview from '../../docs/foo/DOC.md';

storiesOf('Deployments', module)
    .add('Overview', doc(Overview))
```

Example for a component:

```js
import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// Component
import { FooComponent } from '../FooComponent';

// README
import FooComponentReadMe from '../../docs/components/fooComponent/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Components', module)
    .addDecorator(withReadme(FooComponentReadMe))
    // Add the knob section here if you want to have interactivity in the knob panel
    .addDecorator(withKnobs)
    .addWithChapters(
        'Compontn Name',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Interactive Preview',
                            sectionFn: ('', () => {
                                return(
                                    <FooComponent someProp={boolean('Name in Knobs panel', false)}/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )
```

More knobs documentation can be found in their [Github repo](https://github.com/storybooks/storybook/tree/release/3.4/addons/knobs)

`npm run start` will build and launch the storybook

### New sections

if there is no folder yet, create one and then import it in `.storybook/config.js`

`const foo = require.context('../src/stories/foo', true, /stories\.js$/);`

and then load it in the `loadStories()` function:

`foo.keys().forEach(foo);`