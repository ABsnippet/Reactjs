import React, { use } from 'react'
import { useParams } from 'react-router-dom'
function User() {

    const {userid} = useParams()
    return (
        <>
        <div className='bg-gray-700 text-3xl p-4 text-white text-center'>User :{userid}  </div>
        </>
    )
}

export default User
