import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h4dudi6d.us.auth0.com"
      clientId="EYNCH1oUKG5nanIbYhYcDgDL33LmkpxP"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
