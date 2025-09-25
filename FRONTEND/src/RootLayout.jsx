import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar'
import AuthInitializer from './components/AuthInitializer'

const RootLayout = () => {
  return (
    <AuthInitializer>
      <Navbar />
      <Outlet />
    </AuthInitializer>
  )
}

export default RootLayout