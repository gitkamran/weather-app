import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-neutral-700 text-5xl'>خطای 404</h1>
                <h2 className='text-neutral-500'>صفحه مورد نظر یافت نشد.</h2>
                <button onClick={() => navigate('/')} className='bg-gradient-to-tl to-purple-800 from-purple-500 hover:to-purple-500 hover:from-purple-800  text-white p-2 rounded-md'>صفحه اصلی</button>
            </div>
        </div>
    )
}

export default NotFound