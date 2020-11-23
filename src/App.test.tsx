import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container: any = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders without crashing', () => {
  act(() => {
    render(<App />, container)
  })
})
