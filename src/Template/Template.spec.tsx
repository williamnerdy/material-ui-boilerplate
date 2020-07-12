import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, History, State } from 'history'
import { render } from '@testing-library/react'
import Theme from '__mocks__/Theme'
import Template from './Template'

describe('<Template />', () => {
  let history: History<State>

  beforeEach(() => {
    history = createMemoryHistory()
  })

  it('should render correctly', () => {
    const { container } = render(
      <Router history={history}>
        <Theme>
          <Template />
        </Theme>
      </Router>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
