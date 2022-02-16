import React from 'react'

function AboutDisplay({userInfo}) {

  return (
    <div className='about-display'>
      <div>
        <p>Name: {userInfo.fullName}</p>
      </div>
      <div>
        <p>Email: <a href={"mailto:" + userInfo.email}>{userInfo.email}</a></p>
      </div>
    </div>
  )
}

export default AboutDisplay