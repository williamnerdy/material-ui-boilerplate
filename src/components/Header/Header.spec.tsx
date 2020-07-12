import React from 'react'
import { render } from '@testing-library/react'
import Theme from '__mocks__/Theme'
import Header from './Header'

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Theme>
        <Header onToggleDrawer={() => () => ({})} />
      </Theme>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
