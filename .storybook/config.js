import './style/normalize.css'
import './style/github_style.css'
import { initLocale } from '../src/helpers'
import locales from '../stories/assets/locale'
import { configure, addDecorator } from '@storybook/react'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { withOptions } from '@storybook/addon-options'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'

// Theme files
import DarkTheme from '../src/components/style/theme/dark'
import DefaultTheme from '../src/components/style/theme/default'

// Sets decorator squares in side panel
const themes = [DefaultTheme, DarkTheme]

addDecorator(
  withBackgrounds([
    { name: 'Neutral300', value: '#DEE2E6', default: true },
    { name: 'Grey700', value: '#5E6175' },
    { name: 'White', value: '#FFF' },
    { name: 'Grey900', value: '#1E2029' },
  ])
)

addDecorator(
  withThemesProvider(themes)
)

addDecorator(
  withOptions({
    name: 'Brave UI',
    url: 'https://github.com/brave/brave-ui',
    addonPanelInRight: true
  })
)

function loadStories() {
  initLocale(locales)
  const req = require.context('../stories', true, /\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
