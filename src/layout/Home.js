import React, { useEffect, useState } from 'react'
import SearchBox from '../components/search-box/SearchBox'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([-1])
    const [search, setSearch] = useState("karaj")
    const [error, setError] = useState(false)
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=fa`)
            .then(data => {
                setData(data.data)
                setError(false)
            }).catch(err => {
                setError(true)
            })
    }, [search])
    console.log(data)
    return (
        <div className='bg-weather bg-no-repeat bg-cover bg-center w-full h-screen'>
            <div className='w-full h-full flex flex-col items-center gap-12 p-4'>
                <SearchBox setSearch={setSearch} error={error} />

                <div className='w-full h-full flex items-center justify-center'>
                    {data[0] === -1 ?

                        <div className='backdrop-blur-md bg-white/10 shadow-md p-8 rounded-md w-full md:w-1/3'>
                            <div className='flex flex-col gap-8'>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className='animate-pulse w-1/2 lg:w-1/4 h-9 bg-neutral-700/90 rounded-md'></div>
                                    <div className='flex flex-col items-center gap-1'>
                                        <div className='animate-pulse w-[100px] h-[100px] bg-neutral-700/90 rounded-md'></div>
                                        <div className='animate-pulse w-full h-6 bg-neutral-700/90 rounded-md'></div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='animate-pulse w-full lg:w-[40%] xl:w-[40%] h-24 bg-neutral-700/90 rounded-md'></div>
                                </div>
                                <div className='flex items-center justify-between w-full gap-8'>
                                    <div className='animate-pulse w-full lg:w-1/3 h-16 bg-neutral-700/90 rounded-md'></div>
                                    <div className='animate-pulse w-full lg:w-1/3 h-16 bg-neutral-700/90 rounded-md'></div>
                                </div>
                            </div>
                        </div>

                        :
                        data.length < 1
                            ?
                            <h2>بارگذاری با مشکل مواجه شد!</h2>
                            :
                            <div className='backdrop-blur-md bg-white/10 shadow-md rounded-md p-8 w-full md:w-1/3'>
                                <div className='flex flex-col gap-8'>
                                    <div className='flex items-center justify-between gap-4'>
                                        <h2 className='text-4xl text-neutral-700'>
                                            {data.name}
                                        </h2>
                                        <div className='flex flex-col items-center gap-1'>
                                            <div className=''>
                                                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width={'100%'} height={'100%'} alt={data.weather[0].description} className='w-[100px] h-[100px]' />
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <h2 className='text-neutral-800'>{data.weather[0].description}</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-center gap-1'>
                                        <span className="text-7xl ltr text-neutral-800">C</span>
                                        <h2 className="text-8xl ltr text-neutral-800">
                                            {Math.trunc(data.main.temp)}°
                                        </h2>
                                    </div>

                                    <div className='flex items-center justify-between w-full gap-8'>
                                        <div className='flex flex-col items-center gap-1'>
                                            <h2>رطوبت</h2>
                                            <span className='text-3xl'>%{data.main.humidity}</span>
                                        </div>
                                        <div className='flex flex-col items-center gap-1'>
                                            <h2>سرعت وزش باد</h2>
                                            <div className='flex items-center gap-1'>
                                                <span className='font-bold text-lg'>K/H</span>
                                                <span className='text-3xl'>{data.wind.speed}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home