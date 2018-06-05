import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import LinkTo from '@storybook/addon-links/react';

import '@patternfly/patternfly-next/patternfly.css';
import '../stories.scss';

import Preview from '../Components/Preview/preview.js';
import Example from '../Components/Example/example.js';

import { Alert } from '@red-hat-insights/insights-frontend-components';

storiesOf('Alert', module)
    .add('Kitchen Sink', 
        withInfo ( `
            ~~~html
            <Alert type='success'> Primary Alert </Alert>
            <Alert type='danger'> Secondary Alert </Alert>
            <Alert type='warning'> Tertiary Alert </Alert>
            <Alert type='info'> Danger Alert </Alert>
            ~~~
    `)(() =>
        <React.Fragment>
            <LinkTo story="Success">
                <Alert type='success'> Success Alert </Alert>
            </LinkTo>
            <LinkTo story="Danger">
                <Alert type='danger'> Danger Alert </Alert>
            </LinkTo>
            <LinkTo story="Warning">
                <Alert type='warning'> Warning Alert </Alert>
            </LinkTo>
            <LinkTo story="Info">
                <Alert type='info'> Info Alert </Alert>
            </LinkTo>
        </React.Fragment>
    ))

    .add('Success',
        withInfo ( `
            ~~~html
            <Alert type='success'> Primary Alert </Alert>
            ~~~
    `)(() =>
        <Alert type='success'> Primary Alert </Alert>
    ))

    .add('Danger',
        withInfo ( `
            ~~~html
            <Alert type='danger'> Secondary Alert </Alert>
            ~~~
    `)(() =>
        <Alert type='danger'> Secondary Alert </Alert>
    ))

    .add('Warning',
        withInfo ( `
            ~~~html
            <Alert type='warning'> Tertiary Alert </Alert>
            ~~~
    `)(() =>
        <Alert type='warning'> Tertiary Alert </Alert>
    ))

    .add('Info',
        withInfo ( `
            ~~~html
            <Alert type='info'> Danger Alert </Alert>
            ~~~
    `)(() =>
        <Alert type='info'> Info Alert </Alert>
    ));