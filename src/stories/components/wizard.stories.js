import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withInfo } from '@storybook/addon-info';
import { StateDecorator, Store } from '@sambego/storybook-state';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

// Component
import { Wizard } from '@red-hat-insights/insights-frontend-components';
import { Button } from '@patternfly/react-core';

// README
import WizardReadme from '../../docs/components/wizard/README.md';
import { withReadme }  from 'storybook-readme';

// Wizard Steps
import Step1 from '../../Components/Wizard/Step1';
import Step2 from '../../Components/Wizard/Step2';
import Step3 from '../../Components/Wizard/Step3';

const store = new Store({
    isModalOpen: false
});

storiesOf('Components', module)
    .addDecorator(withReadme(WizardReadme))
    .addDecorator(StateDecorator(store))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Wizard',
        {
            chapters: [
                {
                    title: 'There are multiple ways to display layouts',
                    sections: [
                        {
                            title: 'Content',
                            sectionFn: ('', () => {
                                
                                const WizardStepContent = [
                                    <Step1/>,
                                    <Step2/>,
                                    <Step3/>,
                                ];

                                return (

                                    <React.Fragment>
                                        <Button variant='primary' onClick={() => store.set({ isModalOpen: !store.get("isModalOpen") })}> Open Wizard </Button>
                                        <Wizard
                                            isLarge={boolean('Large', true)}
                                            title="Wizard Example"
                                            className='ins-c-wizard-example'
                                            handleModalToggle = { () => store.set({ isModalOpen: !store.get("isModalOpen") })}
                                            isOpen= { store.get("isModalOpen") }
                                            content = { WizardStepContent }
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    ],
                }
            ]
        }
    )