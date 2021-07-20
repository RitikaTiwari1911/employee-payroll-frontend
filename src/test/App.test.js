/**
 * @module       Test
 * @file         App.test.js
 * @description  It tests App.jsx
 * @author       Ritika <spk2ritika1911@gmail.com>
 * @since        18/07/2021
----------------------------------------------------------------------------------------------- */

import Enzyme, { shallow } from 'enzyme'
import React from 'react'
import App from '../App'

import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  test('Route is rendered properly', () => {
    const component = shallow(<App />)
    component.find('Route').exists()
    expect(component).toMatchSnapshot()
  })
})
