import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'assets/styles/tailwind.css'
import { ToastContainer } from 'react-toastify'
import Login from './views/auth/Login'
import AuthRoute from './routes/AuthRoute'
import App from './layouts/App'
import Register from './views/auth/Register'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <>
    <ToastContainer />
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <AuthRoute path='/'>
          <App />
        </AuthRoute>
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root'),
)
