import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/App'

const root = document.getElementById('app')

if (process.env.NODE_ENV === 'development') {
  const render = async () => {
    const { default: App } = await import('./components/App')

    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      root,
    )
  }

  render()

  if (module.hot) module.hot.accept('./components/App', render)
} else {
  ReactDOM.render(<App />, root)
}
