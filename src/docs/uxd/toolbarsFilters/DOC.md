# Toolbars & Filters

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/toolbarLayout.png?raw=true "toolbarLayout")

1. **Filtering**: Filtering should be on the left-most side of the toolbar. All lists should have some filtering. (See filtering section for more details)
2. **Action buttons**: Arrange action buttons to the right of the filtering. There can be 1 primary action (an action is not required), 1 secondary action, and any overflow goes into the kebab.
3. **Kebab & Export**: Export should always go into the kebab, even if it is the only action on the table or list.
4. **Pagination**: Use pagination on top and bottom of table. [PF4 pagination](https://v2.patternfly.org/documentation/core/components/pagination) will responsively react to show only the results count when in smaller spaces. This is the only results count shown. (See filtering section for more details about how the results count works with filtering)
5. **Export**: Export and additional icons go into the kebob icon.

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/toolbarExport.png?raw=true "toolbarExport")

*Possible future work includes sticky headers.*
This pattern is most similar to the "Toolbar w/ pagination" example here: https://v2.patternfly.org/documentation/core/components/toolbar (as of 4/2)

## Filters

The [latest release plan from Patternfly](https://docs.google.com/document/d/1xMQBWVX0RZqCv1N5hAH-82T78SrJxqSBu1ihF-ytqfI/edit#heading=h.pr9zj26f2jlv) has filters to be delivered early May.
However, we got some [customer feedback](https://bugzilla.redhat.com/show_bug.cgi?id=1692410) for Insights, and a planned GA for vulnerabilities & compliance- so I wanted to put together something to describe what can be done now.
Here is the [design documentation from PF about filtering](https://v2.patternfly.org/design-guidelines/usage-and-behavior/filters)
Pre-May 5 (and the delivery of the attribute-value filtering), use faceted filtering.

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/attributeValueFiltering.png?raw=true "attributeValueFiltering")
*Attribute-value filtering*

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/facetedFiltering.png?raw=true "facetedFiltering")
*Faceted filtering*

To show the results of the filtering, use [chip groups](https://v2.patternfly.org/documentation/react/components/chipgroup). The chip groups are valid for both attribute-value filtering and faceted filtering.

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/chipGroupsFacetedFilter.png?raw=true "chipGroupsFacetedFilter")
*Chip groups with a faceted filter*

For a little more detail:
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/filterChips.png?raw=true "filterChips")
*Mock from Advisor showing filter chips (no badges)*

OTHER DESIGN OPTIONS:
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/labeledFilterState.png?raw=true "labeledFilterState")
*Another option for filtering states- Using color & a small label change to indicate filtered*

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/filterChipsBadges.png?raw=true "filterChipsBadges")
*Mock from Advisor showing filter chips (with badges)*

________
Discussion is archived below

## Toolbars in MCOM ~~(and beyond?)~~

### The Problem

Since there have been different people doing different stuff at different times, the toolbars are a bit all over the place at the moment. It'd be good to decide on a recommended order for all of the stuff that goes in the toolbar so that we can be consistent. PF 3 had some general [recommendations](https://www.patternfly.org/pattern-library/forms-and-controls/toolbar/#design) but I think we can be a little more specific for MCOM.

### What's in the toolbar?

Note: Not all MCOM UIs will have all of these widgets.

- Filter text box
- Filter dropdown (checkbox filter)
- "Remediate with Ansible" action
- Number of items in the table
- Pagination -- will this only be at the bottom of tables?
- Export table selector (JSON, CSV)
- "Hide things that don't affect my systems" checkbox

### Questions

- What order do we want to suggest for the different widgets?
- Where should pagination go?
- Do filter chips go below the toolbar?
- What do we do about bulk actions?
- How does responsiveness work?

### Examples from our wires

![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/configurationAssessment.png?raw=true "configurationAssessment")
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/vulnerabilitiesCVE.png?raw=true "vulnerabilitiesCVE")
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/vulnerabilitiesSystems.png?raw=true "vulnerabilitiesSystems")
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/complianceSystems.png?raw=true "complianceSystems")
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/complianceFilter.png?raw=true "complianceFilter")
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/remediation.png?raw=true "remediation")
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/remediationSystems.png?raw=true "remediationSystems")

Example of a checkbox in the header - Vulnerabilities
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/checkboxInHeader.png?raw=true "checkboxInHeader")

Example header for Cost
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/headerForCost.png?raw=true "headerForCost")

Example for Inventory
![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/headerForInventory.png?raw=true "headerForInventory")

Toolbar/Pagination Layout Recommendations for Cloud Services UX (as of 11 Mar 2019)
(Will definitely put on list to usability test!)

- Put pagination on both top and bottom of table
- When there is limited space in the top toolbar, use the pagination component's responsive behavior to show only the number of items. (i.e. When there is limited space only the item count shows, if the screen expands and is large enough to show the pagination, that responsively shows the pagination)
- Limit action buttons to only one primary and one secondary and all overflow goes into the kebab
- Export action will always live in the kebab, unless it is the table's primary action (not the same as the only action)
- Filter should be either a simple input field or a combination dropdown/input field
- No sticky header/footer for now
- Future: Add a "Freeze Header" option - to make the toolbar "sticky"
