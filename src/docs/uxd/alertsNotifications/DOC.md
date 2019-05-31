# Alerts and Notifications

This document is an extension of the [Patternfly documentation on Alerts and Notifications](https://www.patternfly.org/v4/design-guidelines/usage-and-behavior/alerts-and-notifications).

## Modal dialog processes

After completing an action or process in a modal dialog, the user should get an inline notification informing them of the result.
(If a modal dialog has more than 2 screens, follow the pattern defined for wizards)
![Inline notification for an error](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/errorPlacement.png?raw=true)
*Error placement*

### Exiting modals

Modals that have only 1 step, and are fairly simple can be cancelled in a few ways:

- Clicking outside of the modal
- Clicking the "X" in the upper right corner
- Clicking "cancel"

Modals that are more complex, or are wizards, can be cancelled in the following ways:

- Clicking the "X" in the upper right corner
- Clicking "Cancel"
- NOT clicking outside the modal

In some cases, you can use a cancellation alert to inform the user that they will lose their data if cancelling the process
![Example of cancellation alert](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/cancellationAlert.png?raw=true)
*Example of cancellation alert*

## Wizards

Wizards are multiple step processes. In RHCS, these mostly occur in modal dialogs. At the end of a wizard, show a confirmation screen.
![Wizard with confirmation screen](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/wizardConfirmation.png?raw=true)
*Wizard with confirmation screen*

After the confirmation screen. there are a few different options:

**A process that does not take significant time**
Close modal and show results. Show inline notification (see below for more details)
If failure, see error state below.

**A process that takes time, and must complete before proceeding**
Show progress indicator as an additional screen in the modal.
At the end of the progress, close the modal automatically and show an inline notification (see below for more information)
If failure, see error state below.
![Progress indicator in modal wizard](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/progressIndicatorWizard.png?raw=true)
*Progress indicator in modal wizard*

**A process that takes time, which does not need to complete before proceeding (asynchronous)**
Close modal after confirmation screen, and show inline notification that informs the user that their process has been started or queued (see below).
After the process is completed, show a toast notification (see below).
If failure, see error state below.

### Error state for wizard

Communicate errors to the user as soon as possible in a wizard. Use field errors and inline errors as the user goes through the process.
At the end of a wizard, there may be errors or failures of the entire process. In this case, the user stays in the modal and an inline error state is shown along with the content from the confirmation step.
The error state should clearly describe what a user needs to do to remediate the error, if anything.
![Inline error in wizard modal](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/inlineErrorWizard.png?raw=true)
*Showing the positioning of the inline error in the wizard modal*

## Inline notification

Inline notifications push content down the screen. They should be used to indicate the success of all processes that happen in a modal or wizard.
These should be dismissible.
![Inline notification for success message](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/successMessage.png?raw=true)
*Showing location of success message*

If a process is happening in the background, the success message should indicate that the launching of the process succeeded (not the process itself).
E.g. "Your request is processing and will complete within 1 hour"
At the completion of the background process, the user should get a toast notification.

## Toast notifications

Use toast notifications for asynchronous alerts.
For example, when a background process has completed, show a toast notification.
Because these notifications are asynchronous to the process, a good notification should include:

- Clear information about who or what prompted the process (if it was not the current user)
- Clear indication of what process has completed (or failed if an error)
- A link to see the results of the process (or fix an error)

![Toast notification](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/toastNotification.png?raw=true)
A toast notification can also be an error. In this case it should clearly explain to the user how to solve the problem. Avoid technical error messages.

Toasts should also be used when an action has navigated the user to a new page.
E.g. Creating a user creates a new portfolio from a landing page. After creating, the user is automatically taken to the new portfolio. In this case, the action was launched from a different page than the user is currently on, so an inline notification is inappropriate. Use a toast notification.
