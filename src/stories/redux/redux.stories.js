// Libraries
import { storiesOf } from '@storybook/react';
import { doc }  from 'storybook-readme';


// README
import ReduxDoc from '../../docs/redux/DOC.md';

storiesOf('Redux', module)
    .add('Overview', doc(ReduxDoc))