import { Fragment } from 'react'
import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../src/styles/global'

const withGlobalStyles = (storyFn: StoryFn) => (
  <Fragment>
    <GlobalStyles />
    {storyFn()}
  </Fragment>
)

export default withGlobalStyles
