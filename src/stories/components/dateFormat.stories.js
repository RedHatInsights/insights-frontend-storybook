import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, date, text } from '@storybook/addon-knobs';

// Component
import { DateFormat } from '@redhat-cloud-services/frontend-components';

// README
import DateFormatReadMe from '../../docs/components/dateFormat/README.md';
import { withReadme } from 'storybook-readme';

const defaultDate = new Date('Aug 31 2019 00:00:00 UTC');
// Story
storiesOf('Components', module)
    .addDecorator(withReadme(DateFormatReadMe))
    .addDecorator(withKnobs)
    .addWithChapters(
        'DateFormat',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Relative Date',
                            sectionFn: ('', () => {
                                const d = date('Date', defaultDate);
                                return (
                                    <DateFormat type='relative' date={d} />
                                )
                            })
                        },
                        {
                            title: 'Exact Date with Time ',
                            sectionFn: ('', () => {
                                const d = date('Date', defaultDate);
                                return (
                                    <DateFormat type='exact' date={d} />
                                )
                            })
                        },
                        {
                            title: 'Only date',
                            sectionFn: ('', () => {
                                const d = date('Date', defaultDate);
                                return (
                                    <DateFormat type = 'onlyDate' date={d} />
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )