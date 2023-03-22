import './App.css'
import Nav from './components/Nav'
import Router from './router'
import { useSelector } from 'react-redux'
import Login from './views/Login'
import Form from './components/Form'

function App() {
  const { currentUser } = useSelector(state => state.users)

  // show Login component if no logged in user
  if (!currentUser.id) {
    return <Login />
  }

  return (
    <div className="App">
      <Nav userId={currentUser.id} userAdmin={currentUser.isAdmin} />
      <Form />
      <Router />
    </div>
  )
}

export default App
