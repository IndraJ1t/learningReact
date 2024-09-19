import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()
  return (
    <div className='bg-gray-500 px-5 py-4 font-medium text-xl text-white felx items-center justify-center '>
      Github id: {data.login}
      <br />
      Github url: {data.url}
    </div>
  )
}
export default Github


export const githubInfo = async () => {
  const res = await fetch("https://api.github.com/users/IndraJ1t")
  return res.json()

}