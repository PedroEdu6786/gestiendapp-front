import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Register from './Register'

/**
 * @jest-environment jsdom
 */

describe('register testing', () => {
  test('email should accept input text', () => {
    const { getByLabelText } = render(<Register />)
    const emailInputNode: any = getByLabelText('Email')
    expect(emailInputNode.value).toMatch('')
    fireEvent.change(emailInputNode, { target: { value: 'testing@email.com' } })
    expect(emailInputNode.value).toMatch('testing@email.com')
  })

  test('password should accept input text', () => {
    const { getByLabelText } = render(<Register />)
    const passwordInputNode: any = getByLabelText('Password')
    expect(passwordInputNode.value).toMatch('')
    fireEvent.change(passwordInputNode, { target: { value: 'testing' } })
    expect(passwordInputNode.value).toMatch('testing')
  })

  test('firstName should accept input text', () => {
    const { getByLabelText } = render(<Register />)
    const emailInputNode: any = getByLabelText('First Name')
    expect(emailInputNode.value).toMatch('')
    fireEvent.change(emailInputNode, { target: { value: 'testing' } })
    expect(emailInputNode.value).toMatch('testing')
  })

  test('lastName should accept input text', () => {
    const { getByLabelText } = render(<Register />)
    const passwordInputNode: any = getByLabelText('Last Name')
    expect(passwordInputNode.value).toMatch('')
    fireEvent.change(passwordInputNode, { target: { value: 'testing' } })
    expect(passwordInputNode.value).toMatch('testing')
  })
})
