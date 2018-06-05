import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import LinkTo from '@storybook/addon-links/react';

import '@patternfly/patternfly-next/patternfly.css';
import './stories.scss';

import Preview from './Components/Preview/preview.js';
import Example from './Components/Example/example.js';

import { Button, PF3Button,
        Card, CardContent, CardFooter, CardHeader,
        PageHeader, PageHeaderTitle,
        Section,
        Tabs, TabPane } from '@red-hat-insights/insights-frontend-components';

storiesOf('Buttons', module)
    .add('Kitchen Sink',
        withInfo ( `
            ~~~html
            <Button type='primary'> Primary Button </Button>
            <Button type='secondary'> Secondary Button </Button>
            <Button type='tertiary'> Tertiary Button </Button>
            <Button type='danger'> Danger Button </Button>
            ~~~
    `)(() =>
        <React.Fragment>
            <LinkTo story="Primary">
                <Button type='primary'> Primary Button </Button>
            </LinkTo>
            <LinkTo story="Secondary">
                <Button type='secondary'> Secondary Button </Button>
            </LinkTo>
            <LinkTo story="Tertiary">
                <Button type='tertiary'> Tertiary Button </Button>
            </LinkTo>
            <LinkTo story="Danger">
                <Button type='danger'> Danger Button </Button>
            </LinkTo>
        </React.Fragment>
    ))

    .add('Primary',
        withInfo ( `
            ~~~html
            <Button type='primary'> Primary Button </Button>
            ~~~
    `)(() =>
        <Button type='primary'> Primary Button </Button>
    ))

    .add('Secondary',
        withInfo ( `
            ~~~html
            <Button type='secondary'> Secondary Button </Button>
            ~~~
    `)(() =>
        <Button type='secondary'> Secondary Button </Button>
    ))

    .add('Tertiary',
        withInfo ( `
            ~~~html
            <Button type='tertiary'> Tertiary Button </Button>
            ~~~
    `)(() =>
        <Button type='tertiary'> Tertiary Button </Button>
    ))

    .add('Danger',
        withInfo ( `
            ~~~html
            <Button type='danger'> Danger Button </Button>
            ~~~
    `)(() =>
        <Button type='danger'> Danger Button </Button>
    ));