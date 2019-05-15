import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { Route, BrowserRouter} from 'react-router-dom'

// Component
import { Pie } from '@red-hat-insights/insights-frontend-components';

// README
import PieReadme from '../../docs/charts/pie/README.md';
import { withReadme }  from 'storybook-readme';

// Story
storiesOf('Charts', module)
    .addDecorator(withReadme(PieReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Pie',
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

                                let PieValues = [
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
                                    <Pie values={ PieValues } identifier='storybook-pie--withDemo' withLegend legendPosition={legendPositionValue}/>
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Pie',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {
                                let PieValues = [
                                    ['value1', 5],
                                    ['value2', 10],
                                    ['value3', 20],
                                    ['value4', 40]
                                ];

                                return(
                                    <Pie values={ PieValues } totalLabel='issues' identifier='storybook-pie'/>
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Pie with Legend',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {
                                let PieValues = [
                                    ['value1', 5],
                                    ['value2', 10],
                                    ['value3', 20],
                                    ['value4', 40]
                                ];

                                return(
                                    <Pie values={ PieValues } totalLabel='issues' identifier='storybook-pie--withLegend' withLegend/>
                                )
                            })
                        },
                    ],
                },
                {
                    title: 'Pie with Legend and Links',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {
                                let PieValues = [
                                    ['value1', 5],
                                    ['value2', 10],
                                    ['value3', 20],
                                    ['value4', 40]
                                ];

                                const storybookLink='#';

                                return(
                                    <BrowserRouter>
                                        <Route path="/">
                                            <Pie values={ PieValues } link={ storybookLink } totalLabel='issues' identifier='storybook-pie--withLegend-Link' withLegend/>
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
