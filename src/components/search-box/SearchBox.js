import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const SearchBox = () => {
    return (
        <form className='relative w-full h-fit md:w-2/3 lg:w-1/3'>
            <input className='p-3 rounded-md w-full bg-white bg-opacity-20 outline outline-neutral-700 outline-2 text-neutral-700 text-xl' />
            <button className='absolute left-2 top-1/2 -translate-y-1/2'>
                <HiOutlineSearch className='text-3xl text-neutral-700' />
            </button>
        </form>
    )
}

export default SearchBox