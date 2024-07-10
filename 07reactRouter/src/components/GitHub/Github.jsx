import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  
  const data =useLoaderData()
  return (
  <>
    <div className='flex flex-col items-center justify-center text-center m-4 bg-gray-600 text-white text-3xl'>Github Followers: {data.followers}

    <img className='m-5'src={data.avatar_url} width={300}/>
    </div>
  </>
  )
}

export default Github
export const githubInfoLoader = async () =>{
  const res = await fetch('https://api.github.com/users/vasubhatia16')
  return res.json()
}

// const [data,setData] = useState([])
//   useEffect(()=>{
//     fetch('https://api.github.com/users/vasubhatia16')
//     .then(res =>res.json())
//     .then(data => {setData(data)})
//   },[])