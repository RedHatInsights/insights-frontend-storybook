import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, select } from '@storybook/addon-knobs';
import { Route, BrowserRouter} from 'react-router-dom'

// Component
import { Donut } from '@redhat-cloud-services/frontend-components-charts';

// README
import DonutReadme from '../../docs/charts/donut/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Charts', module)
    .addDecorator(withReadme(DonutReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Donut',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {

                                const defaultNumLabel = 'Value';
                                const defaultNumValue = 10;

                                const totalLabel = text('Donut Hole Label', 'issues');

                                let DonutValues = [
                                    [defaultNumLabel+1, number(defaultNumLabel+1, defaultNumValue)],
                                    [defaultNumLabel+2, number(defaultNumLabel+2, defaultNumValue)],
                                    [defaultNumLabel+3, number(defaultNumLabel+3, defaultNumValue)],
                                    [defaultNumLabel+4, number(defaultNumLabel+4, defaultNumValue)]
                                ];

                                const legendPositionLabel = 'Legend Position';
                                const legendPositionOptions = {
                                    right: 'right',
                                    left: 'left',
                                    top: 'top',
                                    bottom: 'bottom'
                                };
                                const legendPositionValue = select(legendPositionLabel, legendPositionOptions, 'bottom');

                                return(
                                    <Donut values={ DonutValues } totalLabel={totalLabel} identifier='storybook-donut--withDemo' withLegend legendPosition={legendPositionValue}/>
                                )
                            })
                        },
                    ],
                },
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
