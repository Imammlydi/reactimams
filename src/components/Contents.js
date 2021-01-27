import React from 'react';
import ImageOne from '../images/egg1.jpg';
import ImageTwo from '../images/egg2.jpg';

const Contents = () => {
    return (
        <>
            <div className="menu-card">
                <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow"/>
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Egg Muffins</h2>
                    <p className=" mb-2">Crispy,Delicious, and nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow"/>
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Egg Ommels</h2>
                    <p className=" mb-2">Crispy,Delicious, and nutritious</p>
                    <span>$19</span>
                </div>
            </div>
        </>
    )
}

export default Contents;
