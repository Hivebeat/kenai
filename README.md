# Kenai
Kenai: [Semantic UI](http://semantic-ui.com/) components in [React](https://facebook.github.io/react/)

## Beware

This is extremely early and undocumented work!


## Usage

Make sure you have Semantic UI css in your project.

Run `npm install @hivebeat/kenai`.

You can import components like this:
```javascript
import { Card, Form, Input } from '@hivebeat/kenai'

const MyComponent = () => (
  <Card>
    <Form>
      <Input type='text' value='my name' title='name' />
    </Form>
  </Card>
)
```
