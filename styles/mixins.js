import {
  make_xs_column,
  make_sm_column,
  make_md_column,
  CONSTANTS,
} from 'styled-bootstrap-mixins'
import { css } from 'styled-components'

export const grid = (xs = 1, sm = 1, md = 1) => css`
  @media (max-width: ${ CONSTANTS['$screen-xs-max'] }) {
    ${ make_xs_column(xs) }
  }
  @media (min-width: ${ CONSTANTS['$screen-sm-min'] }) and (max-width: ${ CONSTANTS['$screen-sm-max'] }) {
    ${ make_sm_column(sm) }
  }
  @media (min-width: ${ CONSTANTS['$screen-md-min'] }) {
    ${ make_md_column(md) }
  }
`

export const breakpoint = {
  tablet: (...args) => css`
    @media (min-width: ${ CONSTANTS['$screen-sm-min'] }) and (max-width: ${ CONSTANTS['$screen-sm-max'] }) {
      ${ css(...args) }
    }
  `,
  mobile: (...args) => css`
    @media (max-width: ${ CONSTANTS['$screen-xs-max'] }) {
      ${ css(...args) }
    }
  `
}

export const ShowOnlyMobile = css`
  display: none;
  ${ breakpoint.mobile`
    display: inherit;
  ` }
  ${ breakpoint.tablet`
    display: none;
  ` }
`

export const ShowOnlyTablet = css`
  display: none;
  ${ breakpoint.mobile`
    display: none;
  ` }
  ${ breakpoint.tablet`
    display: inherit;
  ` }
`

export const ShowOnlyDesktop = css`
  display: inherit;

  ${ breakpoint.mobile`
    display: none;
  ` }
  ${ breakpoint.tablet`
    display: none;
  ` }

`
