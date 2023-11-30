 import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UsercontextProvider from './context/UsercontextProvider'

function App() {

  return (
    <UsercontextProvider>
    <h1>React with Chai and share is important</h1>
    <Login />
    <Profile />
  </UsercontextProvider>
  )
}

export default App
