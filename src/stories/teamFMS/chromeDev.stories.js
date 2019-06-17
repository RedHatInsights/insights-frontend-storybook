// Libraries
import { storiesOf } from '@storybook/react';

// README
import ChromeDevREADME from '../../docs/teamFMS/chromeDev.md';
import { doc }  from 'storybook-readme';

// Story
storiesOf('Team FMS', module)
    .add('Local chrome', doc(ChromeDevREADME))
