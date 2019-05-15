# Red Hat Insights Storybook

The Insights Storybook is a place for Insights documentaiton regarding front end development through the chroming, components, and any applications.

## [Storybook](https://github.com/storybooks/storybook)

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

### Addons

Addons are essentially plugins for Storybook that allow a deeper configuration.

These are the addons that are currently supported in this storybook:

* [ReadMe](https://github.com/tuchk4/storybook-readme) -
    Storybook Community Addon ReadMe gives the ability to import markdown docs in the main story and in the Addon Panel.

* [Knobs](https://github.com/storybooks/storybook/tree/release/3.4/addons/knobs) -
    Allows you to edit React props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook.

* [Chapters](https://github.com/Checkfront/react-storybook-addon-chapters) -
    Allows showcasing of multiple components within a story by breaking down the story into smaller categories (chapters) and subcategories (sections) for better organization.

### Navigating Storybook & Terms

There is a search box at the top left hand corner which will allow you to search doc names

#### Stories

Stories are published in the main board. This is where all components will be rendered along with any other necessary text

#### Addon Panel

The addon panel is where you will find additional ReadMe files, knobs to edit React props in real time, and an Action Logger to display data.

##### All components should have an associated ReadMe file

## Contributing Documentation

[Repo Link](https://github.com/RedHatInsights/insights-frontend-storybook)

### Development

`git clone git@github.com:RedHatInsights/insights-frontend-storybook.git`

`npm install`

`npm run start` to launch a browser and view the storybook, watches files

#### Building

`npm run build` to build the storybook, used for testing