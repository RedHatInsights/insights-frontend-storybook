import React from 'react';
import { Provider } from 'react-redux';
import { init } from '../src/store';
import { addParameters, configure, addDecorator, setAddon } from '@storybook/react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

// import styles
import '../src/stories.scss';

// Set options for storybook
addParameters({
  options: {
    sortStoriesByKind: false,
    panelPosition: 'right',
    theme: {
      base: 'light',
      brandTitle: 'https://cloud.redhat.com',
      brandUrl: 'https://cloud.redhat.com',
      brandImage: 'https://www.redhat.com/cms/managed-files/styles/xlarge/s3/Logo-redhat-color-375.png?itok=F0L-WyTE'
    }
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

// Import stories, this is the order that will be rendered in the Navigation
const chrome = require.context('../src/stories/chrome', true, /stories\.js$/);
const components = require.context('../src/stories/components', true, /stories\.js$/);
const redux = require.context('../src/stories/redux', true, /stories\.js$/);
const repos = require.context('../src/stories/repos', true, /stories\.js$/);
const welcome = require.context('../src/stories/welcome', true, /stories\.js$/);
const charts = require.context('../src/stories/charts', true, /stories\.js$/);
const deployments = require.context('../src/stories/deployments', true, /stories\.js$/);
const uxd = require.context('../src/stories/uxd', true, /stories\.js$/);
const patternfly = require.context('../src/stories/patternfly', true, /stories\.js$/);
// Add a localStorage flag for team FMS
let teamFMS;
if(window.localStorage && window.localStorage.getItem('storybook:teamFMS') === 'true') {
  teamFMS = require.context('../src/stories/teamFMS', true, /stories\.js$/);
}

// Actually Load the stories
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
  if(teamFMS) { teamFMS.keys().forEach(teamFMS); }
}

// Config to set the stories in storybook
configure(loadStories, module);
