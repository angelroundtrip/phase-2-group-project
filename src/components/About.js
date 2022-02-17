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
  const [showForm,setShowForm] = useState(false)
  const hideForm = () => {
    setShowForm(!showForm)
  }
  return (
    <div className='viewers'>
      <p className='about-display' style={{color: '#c23b22', fontWeight: 'bolder', fontSize: '20px'}}>If Hacked, Please Contact</p>
        <AboutDisplay userInfo={userInfo}/> 
        <button onClick={hideForm} className='submitbtn'>Edit My Info</button>
        {showForm ? <AboutForm updateAbout={updateAbout}/> : null}
    </div>
  )
}

export default About