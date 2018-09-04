import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, array } from '@storybook/addon-knobs';
import { Router, Route, IndexRoute, BrowserRouter} from 'react-router-dom'

// Styling
import '../../stories.scss';

// Component
import { Donut } from '@red-hat-insights/insights-frontend-components';

// README
import DonutReadme from '../../docs/charts/donut/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Charts', module)
    .addDecorator(withReadme(DonutReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Donut',
        {
            chapters: [
                {
                    title: 'Donut',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {
                                let DonutValues = [
                                    ['value1', 5],
                                    ['value2', 10],
                                    ['value3', 20],
                                    ['value4', 40]
                                ];

                                return(
                                    <Donut values={ DonutValues } totalLabel='issues' identifier='storybook-donut'/>
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Donut with Legend',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {
                                let DonutValues = [
                                    ['value1', 5],
                                    ['value2', 10],
                                    ['value3', 20],
                                    ['value4', 40]
                                ];

                                return(
                                    <Donut values={ DonutValues } totalLabel='issues' identifier='storybook-donut--withLegend' withLegend/>
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Donut with Legend and Links',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {
                                let DonutValues = [
                                    ['value1', 5],
                                    ['value2', 10],
                                    ['value3', 20],
                                    ['value4', 40]
                                ];

                                const storybookLink='#';

                                return(
                                    <BrowserRouter>
                                        <Route path="/">
                                            <Donut values={ DonutValues } link={ storybookLink } totalLabel='issues' identifier='storybook-donut--withLegend-Link' withLegend/>
                                        </Route>
                                    </BrowserRouter>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )