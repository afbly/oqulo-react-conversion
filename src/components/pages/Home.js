import React from 'react';
import '../../App.scss';
import HeroSection from '../sections/HeroSection';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section4 from '../sections/Section4';
import Footer from '../sections/Footer';

function Home() {
    return (
        <div>
            <HeroSection/>
            <Section1/>
            <Section2/>
            <Section4/>
            <Footer/>
        </div>
    )
}

export default Home;
