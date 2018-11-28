import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';

// README
import ChromeREADME from '../../docs/api/chrome/DOC.md';
import { doc }  from 'storybook-readme';

storiesOf('Chrome', module)
    .add('Chrome', doc(ChromeREADME))
