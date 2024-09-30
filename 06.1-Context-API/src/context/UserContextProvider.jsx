import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
  // Do every API call or anything you want to gain data of and pass the data on value prop
  const [data, setData] = useState(null)
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
