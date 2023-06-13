import React, { useState } from 'react'

const DummyForm = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setconfirmPassword] = useState("")
    const [error,setError] = useState("")
    const [focused,setfocused] = useState(false)

const HandleForm=(e)=>{
    e.preventDefault()
    console.log(name,email,password,confirmPassword,"data")

    if(!name && !email && !password && !confirmPassword){
        setError("all fields are reqired")
    }
}

  return (
    <div className='mx-auto'>
        <div className="div" style={{textAlign:"center",margin:"20px 0"}}>
            <form action="">
            <input type="text" onBlur={()=>setfocused(true)} onChange={(e)=>{setName(e.target.value)}}  name='name' placeholder=' enter name' /><br /> <span>{error}</span> <br />
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}}  name='email' placeholder=' enter email' /><br /> <span>{error}</span> <br />
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  name='password' placeholder=' enter password' /><br /> <span>{error}</span> <br />
            <input type="password" onChange={(e)=>{setconfirmPassword(e.target.value)}}  name='cpassword' placeholder='  confirm password' /><br /> <span>{error}</span> <br />
            <button onClick={HandleForm} style={{backgroundColor:"skyblue",padding:"5px"}}>submit</button>
        </form>
        </div>
        
    </div>
  )
}

export default DummyForm