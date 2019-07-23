# Getting started: designing an app for the Cloud Services platform

You and your product manager should schedule a cross-functional kickoff/working session with UXD, Dev, and Product Management. Contact Kendra Marchant (UXD for the platform) and Ian Hands (Product Management for the platform).
To start, you’ll need to make some decisions around your application presence on cloud.redhat.com, and some of the user experience and UI depends on how you would like to entitle the product, how you plan for customers to access it. The platform is a place for Red Hat to deliver SaaS to our customers in a common way. For a given app on the platform, there may or may not be integrations with the other tenants.

Once you’ve done that, work with the UX team to kickoff your design process. While there’s no one team that owns or approves all the apps in Cloud Services, the UX team creates and helps maintain design standards for every app in the platform and for the platform itself.

## What is Cloud Services?

Cloud.redhat.com, known internally and in this document as ‘Cloud Services,’ is a platform that presents bundles (groups) of SaaS applications to customers. The applications (apps) run in the cloud, so customers don’t have to install on-prem software.
Important: Red Hat does not yet market the platform itself, only the capabilities provided on it. The platform has no official name at this time.

Competitive examples for cloud.redhat.com include Microsoft Azure, AWS, and Google Cloud Platform.
Red Hat Customers purchase subscriptions that provide entitlement to specific app bundles. A marketing website/page offering a try-and-buy experience is in discussion.
Examples of bundles:

* Red Hat Insights: All RHEL subscriptions include entitlement to Red Hat Insights. Insights is seen as the gateway to most of the other offerings on the platform.
* Cloud Management Services for Red Hat Enterprise Linux: customers who purchase ‘Smart Management’ (includes Satellite) are entitled to the bundle ‘Cloud Management Services for RHEL’ (CMSfRHEL).  CMSfRHEL is sometimes referred to as ‘the upsell' from Insights.

What does this platform and its apps help customers do?

Red Hat Insights capabilities include:

* Rules
* Remediations (platform capability also available to CMSfRHEL)
* Inventory (platform capability also available to CMSfRHEL)

Cloud Management Services for Red Hat Enterprise Linux capabilities include:

* Vulnerability
* Compliance
* System Comparison
* Remediations
* Inventory

Cluster Manager (Dev Preview) is not yet PatternFly4 standard. Do not use to inform designs.

Hybrid Cloud (Tech Preview June 1, Sept GA) capabilities include:

* Catalog
* Cost Management

Subscriptions (Sept GA?)
Its capabilities are TBD

[Cloud Services and released apps in production as of May 6](https://docs.google.com/document/d/1ViqDnQNn_5erTX6WrP-_jDpVozQ_8CZZ4fWkIrjNjKY/edit?usp=sharing)

## Working with the UX team -- shared tools, meetings, backlogs

The Cloud Services UX team is a centralized team dedicated to Cloud Services apps. We each are responsible for a primary app, but contribute to our cross app consistency effort and often to the platform by working on a function the entire platform may eventually share.

* UX lead for the platform: Kendra Marchant (kmarchan@redhat.com; rhux.slack.com; ansible.slack.com)
* Our weekly Management-as-a-Service UX meeting is Wednesdays 9:00-9:30a EST (see the doc for UX app responsibilities and for PMs assigned) and the design sharing meeting is Thursdays from 10a-11a EST. You are welcome to join and/or contact us outside of these meetings.
* The Management-as-a-Service UX meeting doc shows the UX designers responsible for each app. It also includes the product manager for the app.
* Design tools: Sketch template for Cloud Services, in process; online Balsamiq for concept mocks.
* Visual design lead for hi fi needs, design consults: Kyle Baker (kbaker@redhat.com)

## Your to-do list

For UX designers, in particular: UX designed apps and the platform using the PatternFly4 design system. We also created the following resources to get designers started:

1. Familiarize yourself with Cloud Services and its existing apps (this links to content on page 5, which will eventually be a hyperlink within the storybook) and info architecture (IA) on the Cloud Services platform today.

2. Connect with the UX team (link to section below) and explain what app or function your team is integrating into Cloud Services. What are the use cases that it supports? Expect to collaborate and see what other designers are working on and how they may have solved similar challenges.

3. Bridge gaps between PMs -- encourage your PM to talk to the platform PM, in particular (Ian Hands; ihands@redhat.com) and other app PMs about similar requirements when you hear about them. Make sure to share these same requirements with the UX team, too.

4. See what platform capabilities (shared functionality) are already available to your app or service.  

5. Review the PatternFly4 patterns we have used in apps already, how you might want to extend them or use them differently for unique use cases; or how you may want to use a different pattern than what’s already in use in apps today.

6. See the UX design storybook which contains design guidelines explaining how we used PatternFly 4 in Cloud Services apps and the platform. We are growing the content in this storybook and maintain a futures/to do list in the Cross app UX backlog. To contribute to the design storybook, the source files are located in the insights frontend storybook GitHub repository.

## Considerations for designing your app

Before you begin designing, meet with your platform product manager and platform UX designer to discuss design strategies for your app, such as where in the information architecture your capability lives:

Considerations
Design possibilities
Does your app relate to existing applications? E.g. Would the same person that uses your app use other apps already on the platform?

Is it a distinct set of capabilities unlike other bundles already on the platform?

Will the capability will be sold/marketed alone or as part of something else?
It could be an app added to an existing bundle, or
it could be a new bundle created for a new set of capabilities, or
Something else - the app might not fit into the current IA or navigation, and might be accessed in some different way. We might even change the IA if needed.

Is it a service that will add capabilities/enhance other apps, and not need to stand alone?
If yes, then it probably isn’t an app and instead will add attributes or dashboard content or table content to existing apps.
Is the app targeted for non-customers, like Red Hat solutions architects/consultants working with customers?
If yes, It may not need to have a presence on the customer-facing landing page or in the left menu, but is accessible through a deep link from another application.
Other -- something we haven’t considered yet...

This meeting should also involve a discussion about the supporting capabilities available to your content through the platform.

### Platform capabilities

The platform provides several shared capabilities to the apps that join cloud.redhat.com. We strongly recommend that you familiarize yourself with Cloud Services and its existing apps to get the most from the descriptions below.

![Platform capabilities table](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/capabilitiesTable.png?raw=true)

### Capabilities the Platform does not yet provide

* Notification drawer
* Event log files (customer accessible)
* Audit log
* Global (shared among apps) settings. In the future,  global settings customers will access settings from a menu in the masthead. These will likely include RBAC, sources, tagging, and reporting.

If a capability that you need that don’t exist yet, let the platform product manager and your app product manager know. Platform Product Manager: Ian Hands; Platform UXD: Kendra Marchant. How the platform prioritizes what shared capabilities are available to apps is based on resources and app needs. Your app team may need to design the function if the platform team cannot do it in the timeframe your app requires it.

### Patterns and demos we’re using in apps and the platform already

This [list](https://docs.google.com/document/d/1Bh0NaJHbVxYc3JGrE8GNyhrR9t1oYF_Uwrd1D0vX7ko/edit?usp=sharing) reflects PatternFly4 components we currently use in the production version of Cloud Services and its apps (as of May 6, 2019); we will likely use additional components as the products mature.
