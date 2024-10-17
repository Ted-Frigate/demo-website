import CustomTitle from '@/components/CustomTitle'
import React from 'react'
import { teamMembers } from '../../../constants'
import Image from 'next/image'
import Contact from '@/components/Contact'

const Team = () => {
  return (
    <div className='py-16'>
      <div className="text-center bg-slate-400 py-48 mb-20">
        <h1 className="text-5xl text-white mb-3">Team</h1>
      </div>
      <CustomTitle title='Our people' subtitle='Our world-class team' />

      <ul className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-[200px]'>
        {
          teamMembers.map((member) => (
            <li className='flex flex-col items-center gap-4' key={member.id}>
              <Image src={member.image} alt={member.name} className="bg-gray-100" width={350} height={450} />
              <h3 className="text-xl mb-1">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </li>
          ))
        }
      </ul>
      <Contact />
    </div>
  )
}

export default Team