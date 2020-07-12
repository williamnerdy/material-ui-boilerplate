import React from 'react'
import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { fade } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import { DRAWER_WIDTH } from 'styles/constants'

export const Grow = styled.div`
  flex-grow: 1;
`

export const MenuButton = styled(IconButton)`
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`

export const AppToolbar = styled(Toolbar)`
  justify-content: space-between;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const AppTitle = styled(Typography)`
  display: none;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: block;
  }
`

export const Search = styled.div`
  width: 100%;
  margin-left: 0;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  position: relative;
  background-color: ${({ theme }) => fade(theme.palette.common.white, 0.15)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  &:hover {
    background-color: ${({ theme }) => fade(theme.palette.common.white, 0.25)};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: auto;
    margin-left: ${({ theme }) => theme.spacing(3)}px;
  }
`

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(0, 2)};
  position: absolute;
  pointer-events: none;
`

export const SectionDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
  }
`

export const SectionMobile = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`

export const MenuDrawer = styled(({ className, ...props }) => (
  <Drawer {...props} classes={{ paper: className }} />
))`
  width: ${DRAWER_WIDTH}px;
  flex-shrink: 0;
`
