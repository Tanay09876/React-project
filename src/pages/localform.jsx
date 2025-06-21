
import React, { useState, useEffect } from 'react';

 function Localform() {
    const [formData, setFormData] = useState({name:'',email:''});
    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }
, [])
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData])
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Local Form</h1>
        <form className="space-y-4">
            <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
            />
            <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 border rounded"
            />
        
        </form>
      
      
    </div>
  )
}

export default Localform


//set timer to set light mode after time and set dark mode after time b
