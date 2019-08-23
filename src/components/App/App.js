import React from 'react'
import Header from '../Header'
import Main from '../Main'
import { useAuth0 } from '../../react-auth0-wrapper'

function App() {
  const { loading } = useAuth0()

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App
