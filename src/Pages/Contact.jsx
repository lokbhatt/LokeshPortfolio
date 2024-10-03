import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(form);
  };

  return (
    <section className='bg-[#384961] w-auto h-auto m-auto mx-auto p-8 text-[#dff9fb]'>
      <h2 className='text-center font-bold md:text-[25px] bg-clip-text text-transparent
                bg-gradient-to-r from-[#2e2efc] to-[#02dcf5] pb-3'>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center p-4'>
          <div className='flex gap-2 justify-center p-2'>
            <label>Name</label>
            <input className='bg-[#95afc0]' type="text" name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className='flex gap-2 justify-center p-2'>
            <label>Email</label>
            <input className='bg-[#95afc0]' type="email" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className='flex gap-2 justify-center p-2 pb-4'>
            <label className='h-auto w-auto'>Message</label>
            <textarea className='bg-[#95afc0]' name="message" value={form.message} onChange={handleChange}></textarea>
          </div>
          <div className='flex justify-center'>
          <button className='border-[1px] rounded-2xl p-2 w-[150px] bg-[#6ab04c] hover:bg-[#8eaf2b]'
           type="submit">Send</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
