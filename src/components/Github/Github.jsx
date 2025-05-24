import React from 'react'
import {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom' // useLoaderData is used to access data loaded by the route loader function.

function Github() {
    const data = useLoaderData() // This will give you the data returned by the githubInfoLoader function.

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/anshuraj0904')
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    //     .catch((err)=> console.log(err))
    // }, [])

    // Note:- We'll not use the classic useState and useEffect here. Instead, here we'll use the data fetched by the loader function directly in the component. This is a more efficient way to handle data fetching in React Router.
    // For this, we need useLoaderData hook from react-router-dom, which allows us to access the data returned by the loader function defined in the route configuration. 
    // And, we've set loader=githubInfoLoader in the route configuration for the Github component, which fetches the data from the GitHub API before rendering the component.
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
      <h1>Username: {data.name}</h1>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
   const respone = await   fetch('https://api.github.com/users/anshuraj0904')
   return respone.json()
} 