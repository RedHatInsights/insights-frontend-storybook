# Toolbars & Filters

![Toolbar layout](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/toolbarLayout.png?raw=true)

1. **Filtering**: Filtering should be on the left-most side of the toolbar. All lists should have some filtering. (See filtering section for more details)
2. **Action buttons**: Arrange action buttons to the right of the filtering. There can be 1 primary action (an action is not required), 1 secondary action, and any overflow goes into the kebab.
3. **Kebab & Export**: Export should always go into the kebab, even if it is the only action on the table or list.
4. **Pagination**: Use pagination on the top and bottom of the table. [PF4 pagination](https://www.patternfly.org/v4/documentation/react/components/pagination/) will responsively react to show only the results count when in smaller spaces. This is the only results count shown. (See filtering section for more details about how the results count works with filtering)
5. **Export**: Export and additional icons go into the kebob icon.

![Export from toolbar kebab](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/toolbarExport.png?raw=true)

*Possible future work includes sticky headers.*
This pattern is most similar to the "Toolbar with pagination" example here: https://www.patternfly.org/pattern-library/forms-and-controls/toolbar/ (as of 4/2)

## Filters

Here is the [design documentation from PF about filtering](https://www.patternfly.org/v4/design-guidelines/usage-and-behavior/filters)

Before attribute-value filtering is available, use faceted filtering.

![Attribute-value filtering](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/attributeValueFiltering.png?raw=true)
*Attribute-value filtering*

![Faceted filtering](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/facetedFiltering.png?raw=true)
*Faceted filtering*

To show the results of the filtering, use [chip groups](https://www.patternfly.org/v4/documentation/core/components/chipgroup). The chip groups are valid for both attribute-value filtering and faceted filtering.

![Chip groups with a faceted filter](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/chipGroupsFacetedFilter.png?raw=true)
*Chip groups with a faceted filter*

For a little more detail:
![Mock from Advisor showing filter chips (no badges)](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/filterChips.png?raw=true)
*Mock from Advisor showing filter chips (no badges)*
