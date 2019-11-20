// Libraries
import { storiesOf } from '@storybook/react';
import { doc }  from 'storybook-readme';

// README
import ChromeDoc from '../../docs/repos/chrome/DOC.md';
import ProxyDoc from '../../docs/repos/proxy/DOC.md';
import StarterAppDoc from '../../docs/repos/starterApp/DOC.md';
import DeploymentDoc from '../../docs/repos/deployment/DOC.md';
import FrontendsDoc from '../../docs/repos/frontends/DOC.md';
import SettingsDoc from '../../docs/repos/settings/DOC.md';

// Story
storiesOf('Repos', module)
    .add('Chrome', doc(ChromeDoc))
    .add('Proxy', doc(ProxyDoc))
    .add('Starter App', doc(StarterAppDoc))
    .add('Apps', doc(FrontendsDoc))
    .add('Deployments', doc(DeploymentDoc))
    .add('Settings', doc(SettingsDoc));
