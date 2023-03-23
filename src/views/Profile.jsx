import React from 'react'
import Form from '../components/Form'
import { currentUserSelector } from '../store/userSlice'
import { useSelector } from 'react-redux'

function Profile() {
  const currentUser = useSelector(currentUserSelector)

  return (
    <div>
      <Form type='Modifier' user={currentUser} />
    </div>
  )
}

export default Profile