import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Software Engineer',
    company: 'Tech Corp',
    testimony: 'Samrat is a highly skilled developer with a keen eye for design. Working with him has been a pleasure, and his contributions to our projects have been invaluable.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Innovate Ltd',
    testimony: 'Samrat brings a unique blend of technical expertise and creative thinking to the table. His work is consistently top-notch, and he always delivers on time.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Innovate Ltd',
    testimony: 'Samrat brings a unique blend of technical expertise and creative thinking to the table. His work is consistently top-notch, and he always delivers on time.'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Innovate Ltd',
    testimony: 'Samrat brings a unique blend of technical expertise and creative thinking to the table. His work is consistently top-notch, and he always delivers on time.'
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="bg-[#2f303f] w-auto h-auto m-auto mx-auto p-8 text-[#dff9fb]">
      <h2 className='text-center font-bold md:text-[25px] bg-clip-text text-transparent
                bg-gradient-to-r from-[#2e2efc] to-[#02dcf5] pb-3'>Testimonials</h2>
      <div className="flex flex-row gap-2 justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#161616] border-[1px] border-[#ddd] rounded-2xl p-[20px] w-[300px] shadow-[0 4px 8px rgba(0, 0, 0, 0.1)]">
            <p className="font-[italic]">"{testimonial.testimony}"</p>
            <p className="font-bold">- {testimonial.name}, {testimonial.role} at {testimonial.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
