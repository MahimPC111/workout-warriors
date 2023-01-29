import React from 'react';
import './Header.css'
import img from '../../image/372511.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={img} alt="" />
            <h3 className='title'>Workout Warriors</h3>
        </div>
    );
};

export default Header;