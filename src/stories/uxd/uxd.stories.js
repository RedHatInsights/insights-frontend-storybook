// Libraries
import { storiesOf } from '@storybook/react';
import { doc, withDocs, withReadme }  from 'storybook-readme';

// README
//This is all the items that we want to add. Each item corresponds to something in the doc section.
//So, if you're adding something, make a doc, and then reference it here
import LoadingDoc from '../../docs/uxd/loading/DOC.md';
import UXDReadme from '../../docs/uxd/README.md';
import AlertsNotificationsDoc from '../../docs/uxd/alertsNotifications/DOC.md';
import LanguageDoc from '../../docs/uxd/language/DOC.md';
import ToolbarsDoc from '../../docs/uxd/toolbarsFilters/DOC.md';
import EmptyStatesDoc from '../../docs/uxd/emptyStates/DOC.md';



//This part loads in everything that is actually going to be there. All these are the items under the menu
//Reference anything you add up there ^ to down there v
//I've tried to keep this sort of alphabetical
storiesOf('UXD', module)
    .addDecorator(withReadme(UXDReadme))
    .add('Alerts & notifications', doc(AlertsNotificationsDoc))
    .add('Empty states', doc(EmptyStatesDoc))
    .add('Language', doc(LanguageDoc))
    .add('Loading states', doc(LoadingDoc))
    .add('Toolbars & filters', doc(ToolbarsDoc))
