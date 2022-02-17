import React, {useState} from 'react'


function AboutForm({updateAbout}) {
  const [updatedFullName, setUpdatedFullName] = useState("")
  const [updatedEmail, setUpdatedEmail] = useState("")
  
  const handleFullName = (e) =>{
    setUpdatedFullName(e.target.value)
  }
  const handleEmail = (e) =>{
    setUpdatedEmail(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch("http://localhost:3000/userInfo/", {
      method:"PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        fullName: updatedFullName,
        email: updatedEmail
      }), 
    })
    .then((r)=> r.json())
    .then((updatedInfo) =>updateAbout(updatedInfo))
  }


  return (
    <div className='entry-viewer'>
      <p>Enter Classified Information Below</p>
      <form onSubmit={handleSubmit}>
      <p><textarea className='title-input' type="text" name="name" placeholder="Your Name" onChange={handleFullName}/></p>
      <textarea className='title-input' type="email" name="email" placeholder="Your Email" onChange={handleEmail}/>
      <button className='submitbtn'>Submit / Edit</button>
      </form>
    </div>
  )
}

export default AboutForm