import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// Styling
import '@patternfly/patternfly-next/patternfly.css';
import '../../stories.scss';

// README
import WelcomeDoc from '../../docs/Welcome/DOC.md';
import WelcomeReadme from '../../docs/Welcome/README.md';
import { doc, withDocs, withReadme }  from 'storybook-readme';

storiesOf('.Welcome', module)
    .addDecorator(doc(WelcomeDoc))
    .addDecorator(withReadme(WelcomeReadme))
    .add('Getting Started')