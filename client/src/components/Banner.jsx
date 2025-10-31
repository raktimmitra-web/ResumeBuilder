import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router'
import authStore from '@/store/authStore'

const Banner = () => {
  const navigate = useNavigate()
  const {user} = authStore()
  return (
    <div className='w-full h-full flex px-36 py-36 items-center justify-center'>
        {/* Text section */}
        <div className='flex flex-col gap-y-4 md:items-center'>
            <h1 className='text-7xl font-bold '>Make Your Resume</h1>
            <p className='text-2xl '>Make your resume with our resume builder </p>
            <Button className='mt-4 px-8 text-white py-8 text-lg rounded-lg ' onClick={()=>{user?navigate('/dashboard'):navigate("/login")}}>Get Started</Button>
        </div>
    </div>
  )
}

export default Banner