import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Content = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing(3)}px;
`
