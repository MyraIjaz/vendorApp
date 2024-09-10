import React, { Component, Suspense } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'; // Custom hook to manage authentication state
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div> see if there is any error 
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    const { isAuthenticated } = useAuth(); // Get authentication status from custom hook
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
          <Route path="*" name="Home" element={isAuthenticated ? <DefaultLayout />: <Navigate to="/login"/>} />
            <Route exact path="/login" name="Login Page" element={isAuthenticated ? <Login />:<Navigate to="*" />} />
            <Route exact path="/register" name="Register Page" element={isAuthenticated ? <Register />:<Navigate to="*"/>} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
       
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App