import React, { useRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const SearchBox = ({ search, setSearch, error, setData }) => {
    const searchRef = useRef()
    const searchHandler = (e) => {
        e.preventDefault();
        if (searchRef.current.value.length > 0 && search !== searchRef.current.value) {
            setData([-1])
            setSearch(searchRef.current.value)
            searchRef.current.value = ""
        }
    }

    return (
        <div className='flex flex-col gap-1 w-full h-fit md:w-2/3 lg:w-1/3'>
            <form onSubmit={searchHandler} className='relative'>
                <input ref={searchRef} placeholder='نام شهر را وارد کنید' className='p-3 rounded-md w-full bg-white bg-opacity-20 outline outline-neutral-700 outline-2 text-neutral-700 text-xl placeholder:text-neutral-600' />
                <button className='absolute left-2 top-1/2 -translate-y-1/2'>
                    <HiOutlineSearch className='text-3xl text-neutral-700' />
                </button>
            </form>
            {
                error &&
                <div className='w-full bg-neutral-300/70 rounded-md p-2'>
                    <h2 className='text-neutral-700 text-xl text-center'>شهری یافت نشد</h2>
                </div>
            }
        </div>

    )
}

export default SearchBox