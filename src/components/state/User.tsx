import React, { useState } from "react";
type AuthUser = {
    name : string,
    email:string
}
const User = () => {
    // Chỉ định dữ liệu khởi tạo người dùng là AuthUser hoặc null
    // Nếu chắc chắn k null => {} as AuthUser
  const [user , setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
        name:'Dũng Nguyễn',
        email:'dungnguyentien140602@gmail.com'
    })
  }
  const handleLogout = () => {
  }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {/* ? : tránh trường hợp null */}
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
    </div>
  )
}

export default User