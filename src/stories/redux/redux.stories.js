import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { doc }  from 'storybook-readme';

// Styling
import '../../stories.scss';

// README
import ReduxDoc from '../../docs/Redux/DOC.md';

storiesOf('Redux', module)
    .add('Overview', doc(ReduxDoc))