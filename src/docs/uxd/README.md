# UX README :rocket:

This section is intended to share UXD team standards and patterns that relate to Insights and Cloud Services. The audience is UXers and Devs on this project who are seeking to know the "standard" UX pattern for a feature or element.

Got a question? Reach out on #insights-uxd on Slack.

## Editing and adding to these docs
UXD team can and should add more standards and docs, as well as edit the ones that are there.

### Editing :pencil:
If you are not familiar/comfortable with git, you can edit documents directly on github.
Using the file structure on github, navigation to "src/docs/uxd"

![Github path](https://github.com/katierik/insights-frontend-storybook/blob/master/src/docs/uxd/img/githubUXDPath.jpg?raw=true)

Open the topic you want to edit. Then click on the "DOC.md". This opens the markdown file to view.
From there, click on the "Edit" pencil.

![Markdown file open on github](https://github.com/katierik/insights-frontend-storybook/blob/master/src/docs/uxd/img/githubEdit.jpg?raw=true)

And then you should edit your stuff (use markdown!). It can be helpful to write it in markdown ahead of time and then copy-paste in if you have a lot to say.

When you're done, write some notes about what you changed, create a branch, and create a pull request!

![Where to edit and also where to write comments](https://github.com/katierik/insights-frontend-storybook/blob/master/src/docs/uxd/img/githubNewPR.jpg?raw=true)

**What about images?**

[May be revised] If you want images, you'll need to upload them. Each of the topic pages should have an "img" folder. Open that folder for the appropriate topic and upload the image file(s).

![Pointing out the upload button](https://github.com/katierik/insights-frontend-storybook/blob/master/src/docs/uxd/img/githubUploadFile.jpg?raw=true)

To reference these images, copy the image address from github (there is absolutely a better way to do this, but TBD)

### Editing - with git
Same deal, same locations, just use git commands.

Follow the directions on the main readme for how to use Storybook.

### Adding new topics :star:
You could do this without cloning etc, but it is probably easier to clone the repo and do this locally.

To add a new topic, you need to do a couple things:
1. Create a folder with the name of the topics in the "docs/uxd" directory (see editing instructions)
2. Put a DOC.md file in it (duplicate another, or from scratch)
3. Open the "stories/uxd/uxd.stories.js" file
4. Add a new import line: "import [TopicName]Doc from '../../docs/uxd/[TopicName]/DOC.md';"
5. Add a story to the list: ".add('[Topic title]', doc([TopicName]Doc))" (Try to keep the list alphabetical)
6. Write your content in the "DOC.md" file you created for that topic!
