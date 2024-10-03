import React from 'react'

function Resume() {
  return (
    <>
      <section className='bg-[#dcfbff] w-auto h-auto m-auto mx-auto p-8 '>
        <h2 className='text-center font-bold md:text-[25px] bg-clip-text text-transparent
                bg-gradient-to-r from-[#2e2efc] to-[#02dcf5] pb-3'>My Resume</h2>
        <div className='flex justify-center'>
          <button className='text-[#4834d4] rounded-2xl border-[1px] p-3 bg-[#95afc0] hover:text-white hover:bg-[#130f40]'>
            <a className='text-center items-center' href="../public/CV Lokesh.pdf" download>Download Resume</a>
          </button>
        </div>
      </section>
    </>
  )
}

export default Resume