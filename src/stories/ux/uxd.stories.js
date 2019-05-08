// Libraries
import { storiesOf } from '@storybook/react';
import { doc, withDocs, withReadme }  from 'storybook-readme';

// README
//This is all the items that we want to add. Each item corresponds to something in the doc section.
//So, if you're adding something, make a doc, and then reference it here
import LoadingDoc from '../../docs/ux/loading/DOC.md';
import UXDReadme from '../../docs/ux/README.md';
import AlertsNotificationsDoc from '../../docs/ux/alertsNotifications/DOC.md';
import LanguageDoc from '../../docs/ux/language/DOC.md';
import ToolbarsDoc from '../../docs/ux/toolbarsFilters/DOC.md';
import EmptyStatesDoc from '../../docs/ux/emptyStates/DOC.md';



//This part loads in everything that is actually going to be there. All these are the items under the menu
//Reference anything you add up there ^ to down there v
//I've tried to keep this sort of alphabetical
storiesOf('UX', module)
    .addDecorator(withReadme(UXDReadme))
    .add('Alerts & notifications', doc(AlertsNotificationsDoc))
    .add('Empty states', doc(EmptyStatesDoc))
    .add('Language', doc(LanguageDoc))
    .add('Loading states', doc(LoadingDoc))
    .add('Toolbars & filters', doc(ToolbarsDoc))
