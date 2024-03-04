import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef()
   const [messageDetails, setMessageDetails] = useState(
    {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    }
  )
  const [message, setMessage] = useState('')
  
  
  async function handleSubmit(e){
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
         process.env.NEXT_PUBLIC_TEMPLATE_ID, 
         form.current, {
        publicKey: process.env.NEXT_PUBLIC_KEY,
      });
      console.log('SUCCESS!');
      setMessage('Message sent')
      setInterval(() => {
        setMessage('')
      }, 2000);
      
    } catch(error) {
      console.log('FAILED...', error.text)
      setMessage('Message not sent')
    }    
      
  }

  return (
    <div className="translate-y-8 container mx-auto px-4 sm:px-6 lg:px-8 leading-8 text-zinc-800">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          Let us Connect
       </h1> 
       {message &&
       <div className="flex justify-center mt-4 bg-green-600 text-white p-2 rounded-xl container">
       <span>{message}</span>
       </div>
       }
       <div className="flex justify-center my-8">
          <form 
          className="w-full max-w-lg"
          onSubmit={handleSubmit}
          ref={form}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor='fname'>
                Full Name:
              </label>
              <input 
              type="text" 
              id="fname" 
              name="user_name"
              required
              className="form-input" 
              value={messageDetails.fullName} 
              onChange={e => setMessageDetails({...messageDetails, fullName:e.target.value})}
              >
              </input>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor='Email'>
                Email Address:
              </label>
              <input 
              type="email" 
              id="email" 
              name='user_email'
              required 
              className="form-input mt-1 block w-full"
              value = {messageDetails.email}
              onChange={e => setMessageDetails({...messageDetails, email:e.target.value})}
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="Subject">
                Subject:
              </label>
              <input 
              type='text' 
              id="subject" 
              required 
              className="textInput" 
              value = {messageDetails.subject} 
              onChange={e => setMessageDetails({...messageDetails, subject:e.target.value})}>
              </input>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="Message">
                Message:
              </label>
              <textarea 
              name="message" 
              rows={5}
              cols={5}  
              required 
              placeholder="Write something..." 
              value={messageDetails.message}
              onChange={e => setMessageDetails({...messageDetails, message:e.target.value})}
            >
          </textarea>
            </div>

          <div className="mt-4 flex justify-center">
            <button 
            type='submit'
            className='btn  text-zinc-400 font-bold py-2 px-4'
            >Connect</button>
          </div>
          </form>
        </div>

    </div>
  )
}

export default Contact