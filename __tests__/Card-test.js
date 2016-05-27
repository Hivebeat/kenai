/* global jest, describe, it, expect */
import React from 'react'
import { shallow, mount, render } from 'enzyme'
jest.unmock('../src/components/Card')

const Card = require('../src/components/Card')

describe('Card', () => {
  it('contains spec with an expectation', () => {
    expect(true).toBe(true)
  })
})
