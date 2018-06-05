import { configure } from '@storybook/react';

// config.js
import { setDefaults } from '@storybook/addon-info';

const req = require.context('../src/stories', true, /\.stories\.js$/)

// addon-info
setDefaults({
  inline: true // Displays info inline vs click button to view
});

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
