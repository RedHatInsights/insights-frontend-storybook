// config.js
import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';

import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

import { Button } from '@patternfly/react-core';

const req = require.context('../src/stories/', true, /stories\.js$/)

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
  url: 'https://access.redhat.com/insights/platform', // URL
  addonPanelInRight: true,
  sortStoriesByKind: true
});

//adding global decorators
addDecorator(story => (
  <div style={{padding: '15px'}}>
    {story()}
  </div>
));

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
