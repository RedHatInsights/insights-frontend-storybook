// Libraries
import { storiesOf } from '@storybook/react';
import { doc }  from 'storybook-readme';

// README
import DeploymentOverview from '../../docs/deployments/overview/DOC.md';
import DeploymentSetup from '../../docs/deployments/setup/DOC.md';

storiesOf('Deployments', module)
    .add('Overview', doc(DeploymentOverview))
    .add('Setup', doc(DeploymentSetup))
