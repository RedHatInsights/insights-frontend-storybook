import React from 'react';
import { Provider } from 'react-redux';
import { init } from '../src/store';
import { addParameters, configure, addDecorator, setAddon } from '@storybook/react';

import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

import '../src/stories.scss';

// addon-options
addParameters({
  options: {
    sortStoriesByKind: false,
    panelPosition: 'right'
  }
});

// Set the chapters addon
setAddon(chaptersAddon);

//adding global decorators
addDecorator(story => (
  <Provider store={ init().getStore() }>
    <div style={{padding: '30px'}}>
      {story()}
    </div>
  </Provider>
));

// Import stories
const chrome = require.context('../src/stories/chrome', true, /stories\.js$/);
const components = require.context('../src/stories/components', true, /stories\.js$/);
const redux = require.context('../src/stories/redux', true, /stories\.js$/);
const repos = require.context('../src/stories/repos', true, /stories\.js$/);
const welcome = require.context('../src/stories/welcome', true, /stories\.js$/);
const charts = require.context('../src/stories/charts', true, /stories\.js$/);
const deployments = require.context('../src/stories/deployments', true, /stories\.js$/);
const uxd = require.context('../src/stories/uxd', true, /stories\.js$/);

// Actually Load the stories
function loadStories() {
  welcome.keys().forEach(welcome);
  repos.keys().forEach(repos);
  chrome.keys().forEach(chrome);
  deployments.keys().forEach(deployments);
  redux.keys().forEach(redux);
  components.keys().forEach(components);
  charts.keys().forEach(charts);
  uxd.keys().forEach(uxd);
}

configure(loadStories, module);
