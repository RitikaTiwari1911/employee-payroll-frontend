/**
 * @module       Test
 * @file         login.test.js
 * @description  It tests Login.jsx
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        18/07/2021
----------------------------------------------------------------------------------------------- */

import { render } from '@testing-library/react'
import React from 'react'
import Enzyme from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../pages/Login'

Enzyme.configure({ adapter: new Adapter() })
/**
 * @description test cases for login page
 */

describe('Header tags test', () => {
  it('givenAvatarById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Login />)
    const header = getByTestId('avatar')
    expect(header).toBeInTheDocument()
  })
  it('givenHeading1ById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Login />)
    const title = getByTestId('heading1')
    expect(title).toHaveTextContent('Employee Payroll Application')
  })

  it('givenHeader2ById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Login />)
    const header = getByTestId('heading2')
    expect(header).toHaveTextContent('Login')
  })
})

describe('Login Form Test', () => {
  it('givenFormElementsById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Login />)
    const avatar = getByTestId('avatar')
    const form = getByTestId('form')
    const emailId = getByTestId('emailId')
    const password = getByTestId('password')
    const button = getByTestId('submitButton')

    expect(avatar).toBeInTheDocument()
    expect(form).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(emailId).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })

  test('givenValuesById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<Login />)
    const emailId = getByTestId('emailId')
    const password = getByTestId('password')

    expect(emailId).toHaveTextContent('Email ID')
    expect(password).toHaveTextContent('Password')
  })
})
