import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';

// README
import MainReadme from '../../docs/components/main/README.md';

import { doc }  from 'storybook-readme';

storiesOf('Components', module)
    .add('Main', doc(MainReadme))