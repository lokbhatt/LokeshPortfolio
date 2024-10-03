import React from 'react'

function Skills() {
  return (
    <>
      <section className='bg-[#3f5b6d] w-auto h-auto m-auto mx-auto p-8'>
        <h2 className='text-center font-bold md:text-[25px] bg-clip-text text-transparent
                bg-gradient-to-r from-[#2e2efc] to-[#02dcf5] pb-3'>My Skills</h2>
        <div className='flex md:gap-20 gap-6 justify-center text-[#cafaff]'>
          <div>
            <h3 className='font-bold md:text-[20px] pb-2'>Technical Skills</h3>
            <ul>
              <li>React.js</li>
              <li>Laravel</li>
              <li>HTML/CSS/JavaScript</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold md:text-[20px] pb-2'>Design Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobbe Illustrator</li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold md:text-[20px] pb-2'>Soft Skills</h3>
            <ul>
              <li>Problem-solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills