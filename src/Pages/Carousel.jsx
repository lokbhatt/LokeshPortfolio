import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Number of slides to show at a time
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slidesData = [
        {
            title: "Loan Management System",
            description: "Developed a comprehensive loan management system for a financial Sahakari.",
            link: "https://github.com/your-project-link"
        },
        {
            title: "App development",
            description: "Developed a comprehensive loan management system for a financial Sahakari.",
            link: "https://github.com/your-project-link"
        },
        {
            title: "Web development",
            description: "Developed a comprehensive loan management system for a financial Sahakari.",
            link: "https://github.com/your-project-link"
        },
    ];


  return (
    <>
        <div className='md:pl-[125px] md:pr-[125px] pl-3 pr-3 pb-5'>
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className='w-[200px] p-4'>
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                        <a href={slide.link}>View on GitHub</a>
                    </div>
                ))}
            </Slider>
        </div>
    </>
  )
}

export default Carousel