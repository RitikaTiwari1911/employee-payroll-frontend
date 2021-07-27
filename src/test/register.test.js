/**
 * @module       Test
 * @file         register.test.js
 * @description  It tests Register.jsx
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        18/07/2021
----------------------------------------------------------------------------------------------- */

import { render } from '@testing-library/react'
import React from 'react'
import Enzyme from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16'
import Registration from '../pages/Registration'

Enzyme.configure({ adapter: new Adapter() })

/**
 * @description test cases for rregistration page
 */

describe('Header tags test', () => {
  it('givenAvatarById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Registration />)
    const header = getByTestId('avatar')
    expect(header).toBeInTheDocument()
  })
  it('givenHeader1ById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Registration />)
    const title = getByTestId('heading1')
    expect(title).toHaveTextContent('Employee Payroll Application')
  })

  it('givenHeader2ById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Registration />)
    const header = getByTestId('heading2')
    expect(header).toHaveTextContent('Sign up')
  })
})
describe('Register Form Test', () => {
  test('givenFormElementsById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Registration />)
    const firstName = getByTestId('firstName')
    const lastName = getByTestId('lastName')
    const avatar = getByTestId('avatar')
    const form = getByTestId('form')
    const emailId = getByTestId('emailId')
    const password = getByTestId('password')
    const button = getByTestId('submitButton')

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(avatar).toBeInTheDocument()
    expect(form).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(emailId).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })

  it('givenValueById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Registration />)
    const firstName = getByTestId('firstName')
    const lastName = getByTestId('lastName')
    const emailId = getByTestId('emailId')
    const password = getByTestId('password')

    expect(firstName).toHaveTextContent('First Name')
    expect(lastName).toHaveTextContent('Last Name')
    expect(emailId).toHaveTextContent('Email ID')
    expect(password).toHaveTextContent('Password')
  })
})
