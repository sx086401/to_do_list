import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { BackLog } from '../../../model/BackLog'
import List from './List'

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

it('renders the to do list', () => {
  const dummyBackLog: BackLog =
    {
      id: '__TEST1',
      memo: 'List test',
      createdAt: 1605148012345
    }
  const dummyCallBack = () => {}

  act(() => {
    render(<List backLogList={[dummyBackLog]} onGetBackLogList={dummyCallBack}/>, container)
  });
  expect(container.querySelector('[data-testid="memo"]').textContent).toBe(dummyBackLog.memo)
  expect(container.querySelector('[data-testid="createdAt"]').textContent).toBe(`memo created at: ${dummyBackLog.createdAt}`)
})
