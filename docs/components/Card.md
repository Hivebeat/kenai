# Card

The classic Semantic UI Card

## Props

|   name        |                      description                    |         default         |
|---------------|-----------------------------------------------------|-------------------------|
| header        | `string` **Required** The header text for the card                            | `undefined`
| description   | `string` The description of the card                                          | `undefined`
| children      | `array` Content you want to put inside the card                               | `undefined`
| headerContent | `object` Do you want to put right aligned content in the header? Put it here! | `null`
| fluid         | `boolean` Should we add a fluid class to the card?                            | `false`

## Example

```javascript
<Card
  fluid
  header='Princess Leia'
  description='Lier and a traitor'
/>
```
