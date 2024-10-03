import React from 'react'

function Footer() {
    return (
        <>
            <footer className='bg-black text-white flex flex-col justify-center mx-auto'>
                <p className='flex justify-center'>© 2024 Lokesh Raj Bhatt <span className='pl-1'>all right reserved</span></p>
                <div className='flex flex-row justify-center gap-2'>
                    <a href="https://github.com/lokbhatt">GitHub</a>
                    <a href="https://dribbble.com/loksb">Dribble</a>
                    <a href="https://figma.com">Figma</a>
                    <a href="https://www.facebook.com/profile.php?id=61555223337775">Facebook</a>
                </div>
            </footer>
        </>
    )
}

export default Footer