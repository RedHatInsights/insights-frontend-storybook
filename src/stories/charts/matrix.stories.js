import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

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

                                let matrixLabels = {
                                    yLabel: text('Y Axis Main Label', 'Y main label'),
                                    xLabel: text('X Axis Main Label', 'X main label'),
                                    subLabels: {
                                        xLabels: [text('X Axis Sub Label 1', 'x sub label 1'), text('X Axis Sub Label 2', 'x sub label 2')],
                                        yLabels: [text('Y Axis Sub Label 1', 'y sub label 1'), text('Y Axis Sub Label 2', 'y sub label 2')],
                                    }
                                }
                                let matrixData = {
                                    topRight: [{position: [number('topRight Y', 2, matrixValues), number('topRight X', 2, matrixValues)], label: 'First'}],
                                    topLeft: [{position: [number('topLeft Y', 2, matrixValues), number('topLeft X', 2, matrixValues)], label: 'Second'}],
                                    bottomRight: [{position: [number('bottomRight Y', 2, matrixValues), number('bottomRight X', 2, matrixValues)], label: 'Third'}],
                                    bottomLeft: [{position: [number('bottomLeft Y', 2, matrixValues), number('bottomLeft X', 2, matrixValues)], label: 'Fourth'}]
                                  }
                                
                                return(
                                    <Matrix data={matrixData} labels={matrixLabels}/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )