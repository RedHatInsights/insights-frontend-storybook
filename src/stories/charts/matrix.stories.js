import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { Router, Route, IndexRoute, BrowserRouter} from 'react-router-dom'

// Styling
import '../../stories.scss';

// Component
import { Matrix } from '@red-hat-insights/insights-frontend-components';

// README
import MatrixReadme from '../../docs/charts/matrix/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Charts', module)
    .addDecorator(withReadme(MatrixReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Matrix',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {

                                const matrixValues = {
                                    range: true,
                                    min: 0,
                                    max: 4,
                                    step: 1,
                                 };

                                let matrixData = {
                                    topRight: [{position: [number('topRight Y', 2, matrixValues), number('topRight X', 4, matrixValues)], label: 'First'}],
                                    topLeft: [{position: [number('topLeft Y', 2, matrixValues), number('topRight X', 4, matrixValues)], label: 'Second'}],
                                    bottomRight: [{position: [number('bottomRight Y', 2, matrixValues), number('bottomRight X', 4, matrixValues)], label: 'Third'}],
                                    bottomLeft: [{position: [number('bottomLeft Y', 2, matrixValues), number('bottomLeft X', 4, matrixValues)], label: 'Fourth'}]
                                  }
                                
                                return(
                                    <Matrix data={matrixData}/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )