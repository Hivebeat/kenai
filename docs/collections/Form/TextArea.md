# TextArea

A simple text area with label.

## Props

|   name   |                      description                    |   default   |
|----------|-----------------------------------------------------|-------------|
| type     | `string` Any of the standard html input types       | `undefined` |
| name     | `string` The name to display on the label           | `undefined` |
| value    | `string` Default value of the input                 | `undefined` |
| rows     | `string` Number of rows in the text area            | `undefined` |
| onChange | `function` Callback function when input changes     | `undefined` |

## Example

```javascript
<TextArea
  type='text'
  name='description'
  value='The Millenium Falcon can make The Kessel Run in less than 12 parsecs'
  rows='4'
  onChange={this._descriptionChanged}
/>
```
[Source](../../../src/collections/Form/inputs/TextArea.js)
