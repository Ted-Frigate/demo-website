import Contact from '@/components/Contact'
import CustomTitle from '@/components/CustomTitle'
import React from 'react'
import { contactInfo } from '../../../constants'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div>
      <div className="text-center bg-slate-400 py-48 mb-20">
        <h1 className="text-5xl text-white mb-3">Contact Us</h1>
      </div>
      <Contact />
      <CustomTitle title='What we are best at' subtitle='Our Services' />
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-[100px]'>
        {
          contactInfo.map((info) => (
            <li className='flex flex-col items-center gap-4' key={info.id}>
              <Image className='bg-gray-100' src={info.image} alt={info.name} width={350} height={150} />
              <h3 className="text-lg font-bold mb-1">{info.name}</h3>
              <p className="text-gray-400">{info.role}</p>
              <a className="text-gray-400 underline" href={`mailto:${info.email}`}>{info.email}</a>
              <a className="text-gray-400" href={`tel:${info.phoneNumber}`}>{info.phoneNumber}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ContactUs