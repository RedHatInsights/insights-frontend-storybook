# Language & Terms

## Terminology

[Cross product terminology Google sheet](https://docs.google.com/spreadsheets/d/11ldkJhVT_m1ApFoJ2_kfX8NfLOQfTGGiL-rdh0bDER0/edit?usp=sharing)

## Date and time standards

### Displaying exact time

For Cloud Services and its apps, which will not be localized, we recommend displaying exact time in UTC and displaying the date as shown below. UTC is a 24 hour clock, so takes the place of localized time display.
**Exact date and time display-- 07 Jan 2019, 23:33 UTC**

However, note that we highly recommend displaying relative time for most use cases.

### Displaying relative time

For the use cases we have encountered so far, we assume that it is more useful for users to be able to tell at a glance how fresh the information they are looking at is, or how recently something was added, than the exact time/date that something happened. **Using relative time ("two days ago," "5 minutes ago") allows users to quickly get a sense of how recently something happened without having to do math or reason about dates.**

Referencing Stacy's [master doc](https://docs.google.com/document/d/1RA3C5Caza3boGz-uJ8b0-R7HOhNdS83SfRpcKH_5vxk/edit?usp=sharing) on time/date styles...

| If it has been...    | Stacy:             | Katie's thought                     |
| :------------------- | :----------------- | :---------------------------------- |
| 0-60 seconds         | Just now           | Just now                            |
| 1-60 minutes         | 30 minutes ago     | x minutes ago (e.g. 30 minutes ago) |
| 1-24 hrs             | 9:30 AM            | x hours ago (e.g. 3 hours ago)      |
| Yesterday            | Yesterday, 9:30 AM | 1 day ago                           |
| In the last week     | Thursday, 9:30 AM  | x days ago (e.g. 6 days ago)        |
| 1 week - 1 year      | 07 Jan, 9:30 AM    | n/a                                 |
| 1-30 days ago        | n/a                | 29 days ago                         |
| 1 month - 1 year ago | n/a                | 2 months ago                        |
| 1 year +             | 07 Jan 2019        | 07 Jan 2019                         |

For any relative time, there should be a tooltip that provides the exact date/time on focus/hover of the date/time indicator.

Use relative time when you can (see justification below). In places where exact time is needed, use the exact time style ^.

### Showing relative *and* exact time together

[Stacy's Standards for Time and Date](https://docs.google.com/document/d/1RA3C5Caza3boGz-uJ8b0-R7HOhNdS83SfRpcKH_5vxk/edit?usp=sharing)

While relative time is our (almost) universally preferred time display, there may be scenarios where it is helpful to see the exact date and time. We propose to make the more precise date and time available on hover in a tooltip.

Recommendations:

- Use relative time, e.g. "2 days ago" with the specific date or date/time in a tooltip on hover. [For more details reference Stacy's doc, linked above]
  - ![alt text](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/uxd/img/tooltip.png?raw=true "tooltip")
- Specific dates should be in the format "07 Jan 2019, 23:33 UTC"
- Any other questions should be answered by [Stacy's Standards for Time and Date](https://docs.google.com/document/d/1RA3C5Caza3boGz-uJ8b0-R7HOhNdS83SfRpcKH_5vxk/edit?usp=sharing)

In cases where precise time is absolutely required, use the specific date format directly.

_______
