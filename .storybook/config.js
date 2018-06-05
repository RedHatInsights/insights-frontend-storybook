import { configure } from '@storybook/react';

// config.js
import { setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  inline: true // Displays info inline vs click button to view
});

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
