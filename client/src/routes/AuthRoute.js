import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getToken } from '../services/LocalStorage'

const AuthRoute = ({ children, ...rest }) => {
  const isLogged = !!getToken()
  console.log('getToken()', getToken())
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default AuthRoute
