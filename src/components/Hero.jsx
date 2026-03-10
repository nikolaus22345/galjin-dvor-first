import React from 'react';

const Hero = () => {
    return (
        <section
            className="hero"
            id="home"
            style={{
                backgroundImage: 'url("https://static.slobodnadalmacija.hr/images/slike/2025/06/24/o_29708396_1280.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}
        >
            <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
                <h1 className="hero-title">GALJIN DVOR</h1>
                <div className="hero-divider">
                    <span></span>
                    <i className="fa-solid fa-wine-bottle"></i>
                    <span></span>
                </div>
                <p className="hero-text">
                    Nisu je sagradili plemići, nego težaci – Županovići iz Kruševa. Dvije srebrne medalje u Londonu s 94 boda za domaći Babić.
                </p>
                <div className="hero-btns">
                    <button className="btn-outline">NAŠA VINA</button>
                </div>
            </div>
            {/* Add an overlay to ensure text is readable over the image */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
        </section>
    );
};

export default Hero;
