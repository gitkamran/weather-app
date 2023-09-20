import React from 'react'

const Button = ({ title, icon, className, onClick, type }) => {
    return (
        <button
            className={`bg-slate-700 p-3 rounded-md text-white w-fit flex items-center justify-center gap-1 ${className}`}
            type={type}
            onClick={onClick}
        >
            {title}
            <span className='text-xl'>
                {icon}
            </span>
        </button>
    )
}

export default Button