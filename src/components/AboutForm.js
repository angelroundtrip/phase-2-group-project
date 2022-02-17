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
    <div className='entry-form'>
      <p>Edit Info</p>
      <form onSubmit={handleSubmit}>
      <textarea type="text" name="name" placeholder="your name here" onChange={handleFullName}/>
      <textarea type="email" name="email" placeholder="your email here" onChange={handleEmail}/>
      <button>Submit Edit</button>
      </form>
    </div>
  )
}

export default AboutForm