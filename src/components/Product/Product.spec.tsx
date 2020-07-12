import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, History, State } from 'history'
import { render } from '@testing-library/react'
import Theme from '__mocks__/Theme'
import Product from './Product'

describe('<Product />', () => {
  let history: History<State>

  beforeEach(() => {
    history = createMemoryHistory()
  })

  it('should render correctly', () => {
    const { container } = render(
      <Router history={history}>
        <Theme>
          <Product id={1} image="testing.png" />
        </Theme>
      </Router>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
