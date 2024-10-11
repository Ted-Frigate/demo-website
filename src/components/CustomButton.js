import React from 'react'

const CustomButton = ({ title, className }) => {
  return (
    <button className={`${className} uppercase py-3 px-6 bg-black text-white`}>{title}</button>
  )
}

export default CustomButton