import React from 'react'

function User({ details }) {
    if (!details) {
      return <h3>Working fetching your User&apos;s details...</h3>
    }
  
    return (
      <div className='user container'>
        <h2>{details.name}</h2>
        <p>Email: {details.email}</p>
        <p>Terms of Service: {details.termsOfService ? 'Accepted' : 'Denied'} </p>
      </div>
    )
  }
  
  export default User
  