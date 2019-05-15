// config.js
import React from 'react';
import { Provider } from 'react-redux';
import { init } from '../src/store';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

import '../src/stories.scss';

const chrome = require.context('../src/stories/chrome', true, /stories\.js$/);
const components = require.context('../src/stories/components', true, /stories\.js$/);
const redux = require.context('../src/stories/redux', true, /stories\.js$/);
const repos = require.context('../src/stories/repos', true, /stories\.js$/);
const welcome = require.context('../src/stories/welcome', true, /stories\.js$/);
const charts = require.context('../src/stories/charts', true, /stories\.js$/);
const deployments = require.context('../src/stories/deployments', true, /stories\.js$/);
const uxd = require.context('../src/stories/uxd', true, /stories\.js$/);
const patternfly = require.context('../src/stories/patternfly', true, /stories\.js$/);

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
  name: 'cloud.redhat.com', // Name in top left Corner
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
  patternfly.keys().forEach(patternfly);
  chrome.keys().forEach(chrome);
  deployments.keys().forEach(deployments);
  redux.keys().forEach(redux);
  components.keys().forEach(components);
  charts.keys().forEach(charts);
  uxd.keys().forEach(uxd);
}

configure(loadStories, module);
