"use client"
import { useEffect, useState } from 'react';
import {supabase, testConnection} from './supabaseinit'
export default function ContactModal({ isOpen, onClose }) {
  let[name,setName]=useState('')
  let[phno,setPhno]=useState('')  
  let[email,setEmail]=useState('')  
  const [error, setError] = useState(null)
  if (!isOpen) return null;
 
  async function handleSubmit(e){
    const {error}=await supabase.from('contactUs').insert({name:name,phno:phno,email:email}) 
  if(error){
    setError("womp womp")
    console.log(error)
  }
  else{
    setError("success")
  }
}

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor='name'>Name</label>
            <input type="text" name="name" className="w-full px-3 py-2 border rounded-lg" onChange={(e)=>{setName(e.target.value)}} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor='phno'>Phone Number</label>
            <input type="text" name="phno" className="w-full px-3 py-2 border rounded-lg" onChange={(e)=>{setPhno(e.target.value)}} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor='email'>Email</label>
            <input type="email" name="email" className="w-full px-3 py-2 border rounded-lg" onChange={(e)=>{setEmail(e.target.value)}} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor='message'>test</label>
            <input type ='color' name='color' className="w-full px-3 py-2 border rounded-lg" />
          </div>
      
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
          </div>
        </form>

      </div>
    </div>
  );
}
