import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/UI/Button'
import { HiOutlineHome } from 'react-icons/hi2'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-neutral-700 text-5xl'>خطای 404</h1>
                <h2 className='text-neutral-500'>صفحه مورد نظر یافت نشد.</h2>
                <Button
                    title="صفحه اصلی"
                    onClick={() => navigate('/')}
                    icon={<HiOutlineHome />}
                />
            </div>
        </div>
    )
}

export default NotFound