// config.js
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../src/stories', true, /\.stories\.js$/)

// addon-info
setDefaults({
  inline: true // Displays info inline vs click button to view
});

// addon-options
setOptions({
  name: 'Red Hat Insights', // Name in top left Corner
  url: 'prod.foo.redhat.com:1337/insights/', // URL
});

//adding global decorators
addDecorator(story => (
  <div style={{padding: '15px'}}>
    {story()}
  </div>
));

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
