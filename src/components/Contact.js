import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div>
        <h1 className='text-3xl mb-3'>Contact us</h1>
        <p className='mb-5'>궁금한 점이 있으시면 아래로 연락주시기 바랍니다. 담담당자가 확인 후 순차적으로 연연락드리겠습니다.</p>
        <ContactForm />
    </div>
  )
}

export default Contact