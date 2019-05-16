// Libraries
import { storiesOf } from '@storybook/react';

// README
import PatternflyDoc from '../../docs/patternfly/DOC.md';

import { doc }  from 'storybook-readme';

storiesOf('Patternfly', module)
    .add('Overview', doc(PatternflyDoc))
