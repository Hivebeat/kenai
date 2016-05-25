# Input

A simple input with label.

## Props

|   name   |                      description                    |   default   |
|----------|-----------------------------------------------------|-------------|
| type     | `string` Any of the standard html input types       | `undefined` |
| name     | `string` The name to display on the label           | `undefined` |
| value    | `string` Default value of the input                 | `undefined` |
| onChange | `function` Callback function when input changes     | `undefined` |

## Example

```javascript
<Input
  type='text'
  name='username'
  value='han-solo'
  onChange={this._userNameChanged}
/>
```

[Source](../../../src/collections/Form/Input.js)
