import React from 'react'

function AboutDisplay({userInfo}) {

  return (
    <div >
      <div>
        <p className='about-display' style={{color: 'navy'}}> Name: {userInfo.fullName}</p>
      </div>
      <div>
        <p className='about-display' style={{color: 'navy'}}> Email: <a href={"mailto:" + userInfo.email}>{userInfo.email}</a></p>
      </div>
    </div>
  )
}

export default AboutDisplay