import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Login from './Login'

/**
 * @jest-environment jsdom
 */

describe('login testing', () => {
  test('email should accept input text', () => {
    const { getByLabelText } = render(<Login />)
    const emailInputNode: any = getByLabelText('Email')
    expect(emailInputNode.value).toMatch('')
    fireEvent.change(emailInputNode, { target: { value: 'testing@email.com' } })
    expect(emailInputNode.value).toMatch('testing@email.com')
  })

  test('password should accept input text', () => {
    const { getByLabelText } = render(<Login />)
    const passwordInputNode: any = getByLabelText('Password')
    expect(passwordInputNode.value).toMatch('')
    fireEvent.change(passwordInputNode, { target: { value: 'testing' } })
    expect(passwordInputNode.value).toMatch('testing')
  })
})
