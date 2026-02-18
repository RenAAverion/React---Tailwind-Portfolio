import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

const send = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>




export default function ContactForm() {
  const formRef = useRef()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_wgm6n8w',   // your service ID (you can see this in your screenshot!)
      'template_k4kkxjt',   // from Email Templates in your dashboard
      formRef.current,      // grabs the form data automatically
      'EPAl5tT-bshRWQ01p'     // from Account > API Keys
    )
    .then(() => {
        setSent(true)
        formRef.current.reset()  // ← clears the form
      })
    .catch((err) => console.error(err));
  }
  
  return(
  <form ref={formRef} onSubmit={handleSubmit} className='md:flex md:flex-col md:flex-1'>

    <div className='md:flex md:flex-1 md:mb-2 md:gap-2'>
        <div className='flex flex-col mb-2 md:flex-1 md:mb-0'>
            <label htmlFor="name">Name:</label>
            <input className='p-2 border-white border-[1px] rounded-md' type="text" name="name" placeholder="Your Name" />
        </div>
        <div className='flex flex-col mb-2 md:flex-1 md:mb-0'>
            <label htmlFor="email">Email:</label>
            <input className='p-2 border-white border-[1px] rounded-md' type="email" name="email" placeholder="Your Email" />
        </div>
    </div>
    <div className='flex flex-col flex-1 md:mb-2'>
        <label htmlFor="message">Email:</label>
        <textarea name="message" placeholder="Your message" className='resize-none h-[10em] p-2 border-white border-[1px] rounded-md' />
        {sent && <p className='pt-2 px-2'>Message sent!</p>}
    </div>
    <div className='mt-2 md:mt-0'>
    <button type="submit" className='text-black px-10 py-2 border-1 bg-white font-stm rounded-md hover:bg-black hover:text-white transition ease-linear duration-300 text-l md:text-xl'>{send}</button>
    </div>
  </form>
  )
}