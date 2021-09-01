import React from 'react';
import '../../App.scss';
import '../scss/Section2.scss';
import Section2C1 from './Section2C1';
import Section2C2 from './Section2C2';

function Section2() {
    return (
        <div className='section2'>
            <Section2C1/>
            <Section2C2/>
        </div>
    )
}

export default Section2;
