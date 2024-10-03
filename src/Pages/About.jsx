import React from 'react'

function About() {
    return (
        <>
            <section className='bg-[#30336b] text-[#dff9fb] mx-auto w-auto h-auto md:pl-[125px] md:pr-[125px] p-5'>
                <h2 className='text-center font-bold md:text-[25px] bg-clip-text text-transparent
                bg-gradient-to-r from-[#2e2efc] to-[#02dcf5] pb-3'>About Me</h2>
                <p className='flex justify-center text-justify'>Hello! I'm Lokesh Raj Bhatt, a passionate UI/UX designer with a strong background in web and app design. Currently pursuing my Bachelor of Computer Applications (BCA), I have a solid academic foundation with an ISc and specialized training in UI/UX design from Mindriser Pvt. Ltd.

                    My journey in design has equipped me with the skills to create intuitive and visually appealing digital experiences. I thrive on turning complex problems into simple, user-friendly solutions. My work ranges from crafting responsive websites to developing innovative mobile applications, always with a keen eye for detail and a focus on user satisfaction.

                    I am eager to continue learning and growing in the field, bringing creativity and functionality together to deliver the best possible user experiences.
                </p>
                <p className='text-center md:text-[20px]'>Education:</p>
                <ul className='m-auto text-center'>
                    <p className='p-1'>
                        <li>Bachelor of Computer Applications (BCA)</li>
                        <li>Tribhuvan University, Kathmandu, Nepal</li>
                        <li>Pursuing</li>
                    </p>
                    <p className='p-1'>
                        <li>Intermediate of Science (ISc)</li>
                        <li>Shree Mahendra Model Secondary School, Khalanga, Darchula, Neapl</li>
                        <li>Completed: 2019</li>
                        <li>GPA: 2.3</li>
                    </p>
                    <p className='p-1'>
                        <li>Secondary Education Examination (SEE)</li>
                        <li>Shree Sampal Secondary School, Sunsera, Darchula, Nepal</li>
                        <li>Completed: 2017</li>
                        <li>GPA: 2.66</li>
                    </p>
                </ul>
            </section>
        </>
    )
}

export default About