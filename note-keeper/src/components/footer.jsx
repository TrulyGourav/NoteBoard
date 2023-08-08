import React from 'react';

const currentYear = new Date().getFullYear();

function Footer(){
    return <div className='footer'>
    <center><p>Copyright @ {currentYear}</p></center>
    </div>
}
export default Footer;