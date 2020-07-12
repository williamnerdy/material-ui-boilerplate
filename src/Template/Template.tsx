import React, { useState } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Routes from 'routes'
import * as S from './Template.style'

const Template = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleDrawer = (openDefault: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen(openDefault)
  }

  return (
    <S.Wrapper>
      <Header
        title="Home"
        isOpen={isOpen}
        onToggleDrawer={handleToggleDrawer}
      />
      <S.Content>
        <Routes />
      </S.Content>
      <Footer />
    </S.Wrapper>
  )
}

export default Template
