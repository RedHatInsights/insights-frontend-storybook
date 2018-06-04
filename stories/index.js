import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '@patternfly/patternfly-next/patternfly.css';
import './stories.scss';

import Preview from './Components/Preview/preview';
import Example from './Components/Example/example';

import { Button } from '@red-hat-insights/insights-frontend-components';
import { Card } from '@red-hat-insights/insights-frontend-components';
import { CardContent } from '@red-hat-insights/insights-frontend-components';
import { CardFooter } from '@red-hat-insights/insights-frontend-components';
import { CardHeader } from '@red-hat-insights/insights-frontend-components';
import { PageHeader } from '@red-hat-insights/insights-frontend-components';
import { PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';
import { PF3Button } from '@red-hat-insights/insights-frontend-components';
import { Section } from '@red-hat-insights/insights-frontend-components';
import { Tabs } from '@red-hat-insights/insights-frontend-components';
import { TabPane } from '@red-hat-insights/insights-frontend-components';

storiesOf('Components', module)
    .add('Buttons', () => (
        <Example name='Buttons'>
            <Preview type='Preview'>
                <Button type='primary'> PF-Next Primary Button </Button>
                <Button type='secondary'> PF-Next Secondary Button </Button>
                <Button type='tertiary'> PF-Next Tertiary Button </Button>
                <Button type='danger'> PF-Next Danger Button </Button>
            </Preview>
        </Example>
    ));