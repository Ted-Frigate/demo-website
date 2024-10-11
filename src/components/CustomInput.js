import React from 'react'

const CustomInput = ({ type, placeholder, name, labelName }) => {
  return (
    <div>
        <label className='uppercase text-sm tracking-wider mb-4 block' htmlFor={name}>{labelName}</label>
        <input className='w-full px-4 py-3 border focus:outline-dashed' type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default CustomInput