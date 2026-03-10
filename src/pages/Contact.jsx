import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header contact-header">
                <div className="overlay"></div>
                <div className="container header-content">
                    <h1 className="hero-title">KONTAKT</h1>
                    <div className="hero-divider">
                        <span></span>
                        <i className="fa-solid fa-location-dot"></i>
                        <span></span>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="section-padding contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">

                        <div className="contact-col">
                            <h4>REZERVACIJE</h4>
                            <p>Telefon: +385 91 126 5219</p>
                        </div>

                        <div className="contact-col">
                            <h4>LOKACIJA</h4>
                            <p>Galjin dvor</p>
                            <p>22204, Primošten, Hrvatska</p>
                        </div>

                        <div className="contact-col">
                            <h4>PODRŠKA</h4>
                            <p>Email: info@galjindvor.hr</p>
                            <p>Telefon: +385 91 126 5219</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-container">
                <iframe
                    title="Google Map Galjin Dvor"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.815317616149!2d15.908070800000002!3d43.585526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133526ae02b545db%3A0xe542ce0d35d28ce1!2sGaljin%20dvor!5e0!3m2!1shr!2shr!4v1710100000000!5m2!1shr!2shr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding">
                <div className="container contact-form-container">
                    <div className="text-center">
                        <div className="section-subtitle">Pošaljite upit</div>
                        <h2 className="section-title">OSTANITE U KONTAKTU</h2>
                        <p className="contact-form-desc">Ispunite obrazac u nastavku i javit ćemo vam se u najkraćem mogućem roku.</p>
                    </div>
                    <form className="contact-form">
                        <div className="contact-form-inputs">
                            <input type="text" placeholder="Ime i prezime" />
                            <input type="email" placeholder="Email adresa" />
                        </div>
                        <input type="text" placeholder="Predmet" />
                        <textarea placeholder="Vaša poruka" rows="6"></textarea>
                        <button type="submit" className="btn-outline btn-dark-small submit-btn">POŠALJI PORUKU</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
