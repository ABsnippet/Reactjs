import React, { useEffect, useState } from 'react'

import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ABsnippet')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        
        <div className='text-3xl text-white text-center m-4 bg-gray-600'>
            Github Followers : {data.followers} 
            <img className='p-4 ' src="https://avatars.githubusercontent.com/u/169154902?s=400&u=2175abab98cec500287ba34a70425fa1cfae4550&v=4" alt="github pic" width={300} />
        </div>
       
    )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/ABsnippet')
    return response.json()
}