import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { data } = useContext(UserContext)
    console.log(data);
    return (
        <div>
            {!data && (<div>Please Login</div>)}
            {data && <div>Welcome {data.username}</div>}
        </div>
    )
}

export default Profile
