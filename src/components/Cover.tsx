import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/cover.scss';

import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';
import slider4 from '../assets/images/slider4.jpg';
import slider6 from '../assets/images/slider6.jpg';
import slider7 from '../assets/images/slider7.jpg';
import furniture from '../assets/images/furniture.jpg';

const Cover = () => {
    let slideIndex = 0;
    let autoSlide: NodeJS.Timeout | undefined; // Explicitly define the type of autoSlide

    // Use a type assertion to specify that the refs will be HTMLDivElement | null
    const slidesRef = useRef<HTMLDivElement | null>(null);
    const sliderContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        if (!sliderContainer) return;

        const stopSlider = sliderContainer.querySelectorAll('.stopSlider') as NodeListOf<HTMLElement>;

        function initiateSlide() {
            autoSlide = setInterval(() => {
                changeSlide('next');
            }, 3000);
        }

        // initiateSlide();
        stopSlider.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                if (autoSlide) clearInterval(autoSlide);
            });
        });

        stopSlider.forEach((item) => {
            item.addEventListener('mouseleave', () => {
                initiateSlide();
            });
        });

        return () => {
            if (autoSlide) clearInterval(autoSlide);
        };
    }, []);

    function changeSlide(command: 'next' | 'back') {
        const slides = slidesRef.current;
        const sliderContainer = sliderContainerRef.current;
        if (!slides || !sliderContainer) return;

        const count = slides.getElementsByClassName('sliderItem').length;
        if (command === 'next') {
            slideIndex = (slideIndex + 1) % count;
        } else if (command === 'back') {
            slideIndex = (slideIndex - 1 + count) % count;
        }
        slides.style.transform = `translateX(${slideIndex * -100}%)`;
    }

    return (
        <>
            {/* Slider */}
            <div className="SliderMain-Container" ref={sliderContainerRef}>
                <div className="wrapper" ref={slidesRef}>
                    <div className="sliderItem">
                        <img src={slider6} alt='slider-image' />
                        <span className="Slider1Text">Elevate Your Style, Shop the Latest Trends! Discover Fashion at Its Finest.</span>
                        <button className="Slider1Btn">Shop Now <i className="fas fa-sign-in-alt"></i></button>
                    </div>

                    <div className="sliderItem">
                        <img src={slider7} alt='slider-image' />
                        <span className="Slider2Text">Elevate Your Style, Shop the Latest Trends! Discover Fashion at Its Finest.</span>
                        <button className="Slider2Btn">Shop Now <i className="fas fa-sign-in-alt"></i></button>
                    </div>

                    <div className="sliderItem">
                        <img src={slider3} alt='slider-image' />
                        <span className="Slider3Text">Experience Innovation, Unleash the Power. Shop the Latest Electronic Gadgets Now!</span>
                        <button className="Slider3Btn">Shop Now <i className="fas fa-sign-in-alt"></i></button>
                    </div>

                    <div className="sliderItem">
                        <img src={slider4} alt='slider-image' />
                        <span className="Slider4Text">Seamless Joy: Online E-card Payments Accepted Here. Share Happiness Instantly!</span>
                        <button className="Slider4Btn">Shop Now <i className="fas fa-sign-in-alt"></i></button>
                    </div>

                    <div className="sliderItem">
                        <img src={slider2} alt='slider-image' />
                        <span className="Slider5Text">Local Charm, Unbeatable Prices! Explore Quality Finds at Affordable Rates</span>
                        <button className="Slider5Btn">Shop Now <i className="fas fa-sign-in-alt"></i></button>
                    </div>
                </div>
                <button className='stopSlider' onClick={() => changeSlide('back')}><i className="fas fa-chevron-left"></i></button>
                <button className='right stopSlider' onClick={() => changeSlide('next')}><i className="fas fa-chevron-right"></i></button>
            </div>

            {/* Slider 2 */}
            <div className="secondSection">
                <img src={furniture} alt="Furniture" />
                <h3>Time to Upgrade: Stunning Furniture for Every Room</h3>
                <NavLink to="/products" className="inline-block">
                    <span className="text-[#fff] font-[Poppins] text-[18px]">Shop Now</span>
                </NavLink>
            </div>
        </>
    );
};

export default Cover;
