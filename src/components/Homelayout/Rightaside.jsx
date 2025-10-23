import React from 'react';
import Sociallogin from './Sociallogin';
import FindUs from '../findUs/FindUs';
import Qzone from '../Qzone/Qzone';

const Rightaside = () => {
    return (
        <div className='space-y-8'>
                <Sociallogin></Sociallogin>
                <FindUs></FindUs>
                <Qzone></Qzone>
                
        </div>
    );
};

export default Rightaside;