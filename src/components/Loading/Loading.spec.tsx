import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, History, State } from 'history'
import { render } from '@testing-library/react'
import Theme from '__mocks__/Theme'
import Loading from './Loading'

describe('<Loading />', () => {
  let history: History<State>

  beforeEach(() => {
    history = createMemoryHistory()
  })

  it('should render correctly', () => {
    const { container } = render(
      <Router history={history}>
        <Theme>
          <Loading />
        </Theme>
      </Router>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
