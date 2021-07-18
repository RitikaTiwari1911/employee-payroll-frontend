import { render } from '@testing-library/react';
import React from 'react';
import Enzyme from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../pages/Login';

Enzyme.configure({ adapter: new Adapter() });

describe('Header tags test', () => {

    it('test to see if logo is being rendered properly', () => {
        const { getByTestId } = render(<Login />);
        const header = getByTestId('avatar');
        expect(header).toBeInTheDocument();
    })
    it('test to see if heading 1 is being rendered properly', () => {
        const { getByTestId } = render(<Login />);
        const title = getByTestId('heading1');
        expect(title).toHaveTextContent("Employee Payroll Application");
    })

    it('test to see if heading 2 is being rendered properly', () => {
        const { getByTestId } = render(<Login />);
        const header = getByTestId('heading2');
        expect(header).toHaveTextContent('Login')
    })

});

describe("Login Form Test",()=>{

    it('check if form is being rendered properly', ()=>{
        const { getByTestId } = render(<Login />);
        const avatar = getByTestId('avatar');
        const form = getByTestId('form');
        const emailId = getByTestId('emailId');
        const password = getByTestId('password');
        const button = getByTestId('submitButton');

        expect(avatar).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(emailId).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    
    });

    test('check value', () => {
        const { getByTestId } = render(<Login />);
        const emailId = getByTestId('emailId');
        const password = getByTestId('password');
    
        expect(emailId).toHaveTextContent('Email ID');
        expect(password).toHaveTextContent('Password');
    
    });
})
    