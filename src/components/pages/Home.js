import React from 'react';
import '../../App.scss';
import HeroSection from '../sections/HeroSection';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Footer from '../sections/Footer';

function Home() {
    return (
        <div className='wrapper'>
            <HeroSection/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </div>
    )
}

export default Home;
