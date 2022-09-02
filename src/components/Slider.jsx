import './slider.css';
import electronics from '../assets/images/electronics.png';
import jewelry from '../assets/images/jewelry.png';
import mens from '../assets/images/mens.png';
import womens from '../assets/images/womens.png';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const Slider = () => {
    const sliders = [electronics, jewelry, mens, womens];
    const [activeSlide, setActiveSlide] = useState(0);
    const nextSlide = () => {
        if (activeSlide !== sliders.length - 1) {
            setActiveSlide(activeSlide + 1)
        }
        else {
            setActiveSlide(0)
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 25000)
        return () => {
            clearInterval(interval);
        }
    }, [activeSlide]);

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='main'>
            <p onClick={activeSlide !== 0 ? () => setActiveSlide(activeSlide - 1) : () => setActiveSlide(sliders.length - 1)}>prev</p>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img className='slide_image' src={sliders[activeSlide]} alt="" />
            </motion.div>
            <p onClick={() => nextSlide()}>next</p>
        </motion.div >
    )
}

export default Slider;