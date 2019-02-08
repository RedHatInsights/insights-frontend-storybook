// config.js
import React from 'react';
import { Provider } from 'react-redux';
import { init } from '../src/store';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import logger from 'redux-logger';

import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

import { Button } from '@patternfly/react-core';

import '../src/stories.scss';

const api = require.context('../src/stories/api', true, /stories\.js$/);
const chrome = require.context('../src/stories/chrome', true, /stories\.js$/);
const components = require.context('../src/stories/components', true, /stories\.js$/);
const redux = require.context('../src/stories/redux', true, /stories\.js$/);
const repos = require.context('../src/stories/repos', true, /stories\.js$/);
const welcome = require.context('../src/stories/welcome', true, /stories\.js$/);
const charts = require.context('../src/stories/charts', true, /stories\.js$/);
const deployments = require.context('../src/stories/deployments', true, /stories\.js$/);

setDefaults({
  sectionOptions: {
    useTheme: false,
    showSource: true,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: true
  }
});
setAddon(chaptersAddon);

// addon-options
setOptions({
  name: 'Red Hat Insights', // Name in top left Corner
  url: 'https://github.com/RedHatInsights', // URL
  addonPanelInRight: true,
  sortStoriesByKind: false
});

//adding global decorators
addDecorator(story => (
  <Provider store={ init().getStore() }>
    <div style={{padding: '15px'}}>
      {story()}
    </div>
  </Provider>
));

function loadStories() {
  welcome.keys().forEach(welcome);
  repos.keys().forEach(repos);
  chrome.keys().forEach(chrome);
  deployments.keys().forEach(deployments);
  redux.keys().forEach(redux);
  components.keys().forEach(components);
  charts.keys().forEach(charts);
}

configure(loadStories, module);
