import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <Link to="/" className="logo" style={{ display: "block", marginBottom: "20px", fontSize: "2rem", fontFamily: '"Cinzel", serif', letterSpacing: "2px", fontWeight: "bold" }}>GALJIN DVOR</Link>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                            Tradicija, strast i dalmatinska zemlja utkane su u svaku kap našeg vina. Doživite obitelj Županović kroz čašu vrhunskog Babića.
                        </p>
                        <div className="footer-socials">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-tripadvisor"></i></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>NAVIGACIJA</h4>
                        <ul className="footer-contact" style={{ listStyle: "none", padding: 0 }}>
                            <li><Link to="/">Početna</Link></li>
                            <li><Link to="/about">O nama</Link></li>
                            <li><Link to="/contact">Kontakt</Link></li>
                            <li><a href="#portfolio">Vina</a></li>
                            <li><a href="#blog">Novosti</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>KONTAKT INFO</h4>
                        <ul className="footer-contact">
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Galjin dvor, 22204, Primošten</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <span>+385 91 126 5219</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <span>info@galjindvor.hr</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} VINARIJA GALJIN DVOR. SVA PRAVA PRIDRŽANA.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
