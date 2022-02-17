import React from 'react'

function AboutDisplay({userInfo}) {

  return (
    <div>
      <span style={{color: 'teal', fontSize: '20px'}}> Name |
        <span style={{color: 'navy', fontSize: '20px', fontWeight: 'bold'}}>  {userInfo.fullName}</span>
      </span>

      <p style={{color: 'teal', fontSize: '20px'}}> Email | 
        <span><a style={{color: 'navy', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none'}} href={"mailto:" + userInfo.email}> {userInfo.email}</a> </span>
      </p>

    </div>
  )
}

export default AboutDisplay