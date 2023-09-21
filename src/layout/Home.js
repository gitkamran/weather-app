import React, { useEffect, useState } from 'react'
import SearchBox from '../components/search-box/SearchBox'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([-1])
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karaj&units=metric&appid=${process.env.API_KEY}&lang=fa`)
            .then(data => {
                setData(data.data)
            })
    }, [])
    console.log(data)
    return (
        <div className='bg-weather bg-no-repeat bg-cover bg-center w-full h-screen'>
            <div className='w-full h-full flex flex-col items-center gap-12 p-4'>
                <SearchBox />
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='backdrop-blur-md bg-white/10 shadow-md rounded-md p-8 w-full md:w-1/3'>
                        <div className='flex flex-col gap-8'>
                            <div>
                                {data[0] === -1
                                    ?
                                    <div className='animate-pulse w-1/2 lg:w-1/4 h-9 bg-neutral-700/70 rounded-sm'></div>
                                    :
                                    data.length < 1
                                        ?
                                        <h2>شهری پیدا نشد...</h2>
                                        :
                                        <h2 className='text-4xl text-neutral-700'>
                                            {data.name}
                                        </h2>
                                }
                            </div>

                            <div className='flex items-center justify-center'>
                                {data[0] === -1
                                    ?
                                    <div className='animate-pulse w-full lg:w-2/3 xl:w-1/2 h-24 bg-neutral-700/70 rounded-sm'></div>
                                    :
                                    <div className='flex items-center gap-1'>
                                        <span className='text-7xl'>C</span>
                                        <h2 className="text-8xl ltr text-neutral-800">
                                            {Math.trunc(data.main.temp)}°
                                        </h2>
                                    </div>
                                }
                            </div>

                            <div className='flex items-center justify-between w-full gap-8'>
                                <div className='flex flex-col items-center gap-1'>
                                    <h2>رطوبت</h2>
                                    <span className='text-3xl'>87%</span>
                                </div>
                                <div className='flex flex-col items-center gap-1'>
                                    <h2>سرعت وزش باد</h2>
                                    <div className='flex items-center gap-1'>
                                        <span className='font-bold text-lg'>K/H</span>
                                        <span className='text-3xl'>5.4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home