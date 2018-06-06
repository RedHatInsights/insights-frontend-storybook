# Button

### Usage

```js
import { Button } from '@red-hat-insights/insights-frontend-components';
```


<!-- STORY -->

### Properties

* `type` - 'theme' of the button: `type='foo'`
  * primary
  * secondary
  * tertiary
  * danger
  * alt - used for alternate secondary styles
* `state` - pseudo tags: `state='foo'`
  * focus - forces `:focus`
  * active - forces `:active`
  * hover - forces `:hover`
  * disabled - disabled button, non clickable, sets `disabled='true'`
* `block` - ability to create block level button: `block='true'` or simply `block`

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| type     | string   | 'primary'    | -          |
| state    | string   | -            | -          |
| disabled | boolean  | false        | -          |
| block    | boolean  | false        | -          |