import React, {useEffect,useState} from 'react'
import AboutForm from './AboutForm'
import AboutDisplay from './AboutDisplay'

const aboutUrl = 'http://localhost:3000/userInfo'

function About() {

  const [userInfo, setUserInfo] = useState([])

  useEffect(() =>{
    fetch(aboutUrl)
    .then(r => r.json())
    .then(userInfo => setUserInfo(userInfo))
  }, [])

  const updateAbout = (updatedInfo) =>{
    setUserInfo(updatedInfo)
  }

  return (
    <div className='about'>
      <p>If Hacked, Please Contact Me:</p>
        <AboutDisplay  userInfo={userInfo}/> 
        <AboutForm updateAbout={updateAbout}/>
    </div>
  )
}

export default About