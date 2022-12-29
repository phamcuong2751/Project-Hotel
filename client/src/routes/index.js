import React from 'react'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Dashboard from '../views/admin/Dashboard'
import App from '../layouts/App'

const ViewRoutes = [
  {
    path: '/login',
    exact: true,
    component: () => <Login />,
  },
  {
    path: '/register',
    exact: true,
    component: () => <Register />,
  },
]

const AuthRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <App />,
  },
]
export { ViewRoutes, AuthRoutes }
