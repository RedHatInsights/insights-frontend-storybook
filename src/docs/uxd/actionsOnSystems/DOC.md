# RHCS - Actions on systems
For a system, there are 2 primary types of actions:

- Service-specific actions: e.g. "Opt-out of vulnerability reporting"
- Global system actions: e.g. "Update host name"

## Service view of a system
Service-specific actions should be available from the view of the system from that service.
Global system actions are not available.
Service-specific actions can be inline, or in the header, or related to the table. (Anything that is related to the service!)
_**Why?** Keep the actions in context of what the user is doing._
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/serviceSpecificActions.png?raw=true "serviceSpecificActions")
*Service view of a system, showing 2 service-specific actions (Remediate with Ansible, Opt-out of vulnerability reporting)*

## Inventory view of a system
Global system actions should be available from the inventory. (Not on service pages).
Service-specific actions should also be available in the inventory.
_**Why?** Inventory is global. It is the comprehensive view of a system & everything that is related to it. Therefore, should have all the actions available to that system._

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/inventoryInlineGlobal.png?raw=true "inventoryInlineGlobal")
*Inventory view of a system, showing inline global actions*

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/inventoryServiceLevel.png?raw=true "inventoryServiceLevel")
*Inventory view of a system, including service-level action (Remediate with Ansible)*

## Considerations

- Actions button would be there if ANY of the services have actions.
- Entitlements & the actions button - what if they don't have access to a service that has actions (Solution: hid action button unless there are valid actions).
- Need a reliable way to get from a system to the inventory view of a system (to manage the global actions). (Link?)
    - Tabs would force the global actions to be in the current "Actions" dropdown and app specific actions would live inside their respective tab area
