import Nav from './components/Nav'
import Router from './router'
import { useSelector } from 'react-redux'
import Login from './views/Login'
import { currentUserSelector } from './store/userSlice'
import './App.css'

function App() {
  const currentUser = useSelector(currentUserSelector)

  // show Login component if no logged in user
  if (!currentUser.id) {
    return <Login />
  }

  return (
    <div className="App">
      <Nav userId={currentUser.id} userAdmin={currentUser.isAdmin} userPhoto={currentUser.photo} />
      <Router />
    </div>
  )
}

export default App
