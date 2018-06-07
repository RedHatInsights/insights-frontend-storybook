import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { doc, withDocs, withReadme }  from 'storybook-readme';

// Styling
import '@patternfly/patternfly-next/patternfly.css';
import '../../stories.scss';

// README
import WelcomeDoc from '../../Docs/Welcome/GettingStarted/DOC.md';
import WelcomeReadme from '../../Docs/Welcome/GettingStarted/README.md';
import QuickStartDoc from '../../Docs/Welcome/QuickStart/DOC.md';

storiesOf('.Welcome', module)
    .addDecorator(withReadme(WelcomeReadme))
    .add('Getting Started', doc(WelcomeDoc))
    .add('Quick Start Guide', doc(QuickStartDoc))