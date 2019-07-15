// Libraries
import { storiesOf } from '@storybook/react';
import { doc }  from 'storybook-readme';

// README
import NightlyOverview from '../../docs/nightly/DOC.md';

storiesOf('Nightly Release', module)
    .add('Overview', doc(NightlyOverview))