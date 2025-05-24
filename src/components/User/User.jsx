import React from 'react'
import { useParams } from 'react-router-dom'

// Here, we're using dynamic routing to capture the user ID from the URL. So, useParams will return an object with the user ID as a property.

function User() {
    const {userid} = useParams()
  return (
    <div>User with ID: {userid}</div>
  )
}

export default User