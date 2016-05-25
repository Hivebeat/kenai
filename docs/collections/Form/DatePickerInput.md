# DatePickerInput

This is a somewhat special component.
It assumes that you are already using a date picker (may we suggest [input-moment](https://github.com/Hivebeat/input-moment)) and fires a click event when the user clicks the input.

## Props

|   name         |                      description                    |   default   |
|----------------|-----------------------------------------------------|-------------|
| title          | `string` Name to display as placeholder             | `undefined` |
| value          | `string` Current date value                         | `undefined` |
| openDatePicker | `function` That opens the date picker               | `undefined` |

## Example

```javascript
<DatePickerInput
  title='Date of birth'
  value={this.state.dob}
  onChange={this._openDatePicker}
/>
```

[Source](../../../src/collections/Form/DatePickerInput.js)
