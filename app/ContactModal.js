"use client"
import { useEffect, useState } from 'react';
import {supabase, testConnection} from './supabaseinit'
export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [error, setError] = useState(null)
  async function handleSubmit(){
  const {error}=await supabase.from('contactUs').insert({name:"giganiga",phno:9999,email:"nigga@gmail.com"}) 
  if(error){
    setError("womp womp")
  }
  else{
    setError("success")
  }
}
useEffect(() => {
    handleSubmit()
}, [])
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Submit</button>
          </div>
        </form>
        {error?error:"success"}
      </div>
    </div>
  );
}
