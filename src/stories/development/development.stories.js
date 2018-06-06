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
import ChromeDoc from '../../docs/Dev/Chrome/DOC.md';
import ProxyDoc from '../../docs/Dev/Proxy/DOC.md';
import StarterAppDoc from '../../docs/Dev/StarterApp/DOC.md';


import { withDocs, withReadme, doc }  from 'storybook-readme';

storiesOf('.Development', module)
    .add('Chrome', doc(ChromeDoc))
    .add('Proxy', doc(ProxyDoc))
    .add('Starter App', doc(StarterAppDoc));
