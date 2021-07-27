/**
 * @module       Test
 * @file         addEmp.test.js
 * @description  It tests AddEmp.jsx
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        27/07/2021
----------------------------------------------------------------------------------------------- */

import { render } from '@testing-library/react'
import React from 'react'
import Enzyme from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16'
import AddEmployee from '../components/AddEmp'

Enzyme.configure({ adapter: new Adapter() })

/**
 * @description test cases for AddEmployee page
 */

describe('Header tags test', () => {
  it('givenAvatarById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<AddEmployee />)
    const header = getByTestId('avatar')
    expect(header).toBeInTheDocument()
  })
  it('givenHeading1ById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<AddEmployee />)
    const title = getByTestId('heading1')
    expect(title).toHaveTextContent('Add new Employee')
  })
})
describe('Register Form Test', () => {
  test('givenFormElementsById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<AddEmployee />)
    const firstName = getByTestId('firstName')
    const lastName = getByTestId('lastName')
    const avatar = getByTestId('avatar')
    const form = getByTestId('form')
    const salary = getByTestId('salary')
    const department = getByTestId('department')
    const emailId = getByTestId('emailId')
    const button = getByTestId('submitButton')
    

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(avatar).toBeInTheDocument()
    expect(form).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(salary).toBeInTheDocument()
    expect(department).toBeInTheDocument()
    expect(emailId).toBeInTheDocument()
  })

  it('givenValuesById_shouldBeRenderedProperly', () => {
    const { getByTestId } = render(<AddEmployee />)
    const firstName = getByTestId('firstName')
    const lastName = getByTestId('lastName')
    const emailId = getByTestId('emailId')
    const salary = getByTestId('salary')
    const department = getByTestId('department')


    expect(firstName).toHaveTextContent('First Name')
    expect(lastName).toHaveTextContent('Last Name')
    expect(emailId).toHaveTextContent('Email ID')
    expect(salary).toHaveTextContent('Salary')
    expect(department).toHaveTextContent('Department')
  })
})
