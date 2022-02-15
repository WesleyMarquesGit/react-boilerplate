import { Fragment } from 'react'
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <Fragment>
      <GlobalStyles />
      <Story />
    </Fragment>
  )
]
