# Button

### Usage

```js
import { Button } from '@patternfly/react-core';
```


<!-- STORY -->

### Properties

* `variant`, string - 'theme' of the button: `variant='foo'`
  * primary
  * secondary
  * tertiary
  * danger
  * link
  * action
* `state`, booleans - pseudo tags: `state='foo'`
  * isFocus - `:focus`
  * isActive - `:active`
  * isHover - `:hover`
  * isDisabled - disabled button
* `block` - ability to create block level button: `isBlock='true'`

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| children | node     | ''           | -          |
| className| string   | ''           | -          |
| label    | string   | ''           | -          |
| variant  | string   | 'primary'    | -          |
| type     | string   | 'button'     | -          |
| isActive | boolean  | false        | -          |
| isBlock  | boolean  | false        | -          |
| isDisabled| boolean  | false        | -          |
| isFocus | boolean  | false        | -          |
| isHover | boolean  | false        | -          |