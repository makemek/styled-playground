import React from 'react'
import styled from 'styled-components'
import {
  grid,
  breakpoint,
  ShowOnlyMobile,
  ShowOnlyTablet,
  ShowOnlyDesktop
} from '../styles/mixins'

export default () => (
  <Wrapper>
    <Title>Hello, Responsive World</Title>
    <TabletContent>
      <span>Hello, Tablet</span>
    </TabletContent>
    <MobileContent>
      <span>Hello, Mobile</span>
      <p>Beep Beep Bop</p>
    </MobileContent>
  </Wrapper>
)

const Title = styled.h1`
  color: white;
  font-size: 18px;
  transition: color .5s;

  ${ breakpoint.tablet`
    color: green;
  ` }
  ${ breakpoint.mobile`
    color: brown;
  ` }
`

const MobileContent = styled.div`
  ${ ShowOnlyMobile }
`

const TabletContent = styled.div`
  ${ ShowOnlyTablet }
`

const DesktopContent = styled.div`
  ${ ShowOnlyDesktop }
`

const Wrapper = styled.div`
  background-color: skyblue;
  padding: 2px;
  ${ grid(12, 8, 4) }
`
