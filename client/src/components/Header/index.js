import React from 'react';
import image from '../../images/distracted.png'

function Header() {
    return (
        <header className='header'>

            <img className='header--image' require={image} alt='meme icon' />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Practice</h4>

        </header>
    )

};

export default Header;