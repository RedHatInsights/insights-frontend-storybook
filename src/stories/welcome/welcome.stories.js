// Libraries
import { storiesOf } from '@storybook/react';
import { doc, withDocs, withReadme }  from 'storybook-readme';

// README
import WelcomeDoc from '../../docs/welcome/gettingStarted/DOC.md';
import WelcomeReadme from '../../docs/welcome/gettingStarted/README.md';
import QuickStartDoc from '../../docs/welcome/quickStart/DOC.md';

storiesOf('Welcome', module)
    .addDecorator(withReadme(WelcomeReadme))
    .add('Getting Started', doc(WelcomeDoc))
    .add('Quick Start Guide', doc(QuickStartDoc))