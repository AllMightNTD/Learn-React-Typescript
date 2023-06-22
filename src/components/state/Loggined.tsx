import React, { useState } from 'react'
const Loggined = () => {
  const [isLoggined , setisLoggined] = useState(false)
  const handleLogin = () => {  
    setisLoggined(true)
  }
  const handleLogout = () => {
    setisLoggined(false)
  }
  return (
    <>
     <button onClick={handleLogin}>Login</button>
    <div onClick={handleLogout}>LogOut</div>
    <div>User is {isLoggined ? 'login' : 'log out '}</div>
    </>
  )
}

export default Loggined