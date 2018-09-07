import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Router, Route, IndexRoute, BrowserRouter} from 'react-router-dom'

// Styling
import '../../stories.scss';

// Component
import { Gauge } from '@red-hat-insights/insights-frontend-components';

// README
import GaugeReadme from '../../docs/charts/gauge/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Charts', module)
    .addDecorator(withReadme(GaugeReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Gauge',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {
                                const options = {
                                    range: true,
                                    min: 0,
                                    max: 100,
                                    step: 1,
                                 };
                                
                                return(
                                    <Gauge identifier='sample-gauge' label='sample-gauge' width={250} height={250} value={number('Value', 10, options)}/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )