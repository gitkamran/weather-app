import React from 'react'
import SearchBox from '../components/search-box/SearchBox'

const Home = () => {

    return (
        <div className='bg-weather bg-no-repeat bg-cover bg-center w-full h-screen'>
            <div className='w-full h-full flex flex-col items-center gap-12 p-4'>
                <SearchBox />
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='backdrop-blur-sm'>
                        <div className='flex flex-col gap-8 rounded-md p-8 shadow-md'>
                            <h2 className='text-4xl text-neutral-700'>کرج</h2>
                            <h2 className="text-8xl ltr text-neutral-800">24 °C</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home