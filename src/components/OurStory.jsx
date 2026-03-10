import React, { useState } from 'react';
import ReservationModal from './ReservationModal';

const OurStory = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="section-padding story-section">
            <div className="container">
                <div className="story-map" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px' }}>
                    <div style={{ position: 'relative', maxWidth: '500px', width: '100%' }}>
                        <img src="/croatia_heart_map.png" alt="Galjin Dvor Lokacija" style={{ width: '100%', display: 'block' }} />
                        {/* Novo srce za Primošten */}
                        <i className="fa-solid fa-heart" style={{ position: 'absolute', top: '56%', left: '40%', color: '#c1a35f', fontSize: '1.3rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}></i>
                        <div style={{ position: 'absolute', top: '58%', left: '44%', color: '#c1a35f', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 'bold' }}>Primošten</div>
                    </div>
                    <p style={{ marginTop: '15px', fontSize: '1.2rem', fontFamily: '"Cinzel", serif', color: 'var(--primary-color)' }}>
                        <i className="fa-solid fa-location-dot" style={{ marginRight: '10px' }}></i>
                        Galjin dvor, 22204, Primošten
                    </p>
                </div>
                <div className="section-subtitle">S 94 boda već smo treću godinu na pragu zlata</div>
                <h2 className="section-title">NAŠA PRIČA</h2>
                <p style={{ marginBottom: '15px' }}>
                    Ime joj je Galjin dvor, ali nisu je sagradili plemići, nego težaci – Županovići iz Kruševa u primoštenskom zaleđu, kojima je nadimak bio Galjini, pa je tako i njihova vinarija ponijela to časno obiteljsko ime. Za koje se – po dobrom - čulo čak i u Londonu, jer su tamo dva Babića obitelji Županović na Decanter World Wine Awardsu, ocijenjena s 91 i 94 boda, za što su na ovom najcjenjenijem svjetskom natjecanju zaslužila srebrnu medalju.
                </p>
                <p style={{ marginBottom: '40px' }}>
                    Njezino najpoznatije lice svakako je Radoslav Rade Županović, koji je obiteljsku vinariju preuzeo 2015. godine. Osim vrhunskog vina, Županovići proizvode i vrhunsko maslinovo ulje, koje se također dokazalo na prestižnim svjetskim natjecanjima, osvajajući zlatne medalje za kvalitetu u New Yorku, kao i na domaćim natjecanjima poput Noćnjaka.
                </p>
                <button
                    className="btn-outline btn-dark"
                    style={{ color: 'var(--text-dark)', borderColor: 'var(--text-dark)' }}
                    onClick={() => setModalOpen(true)}
                >
                    KONTAKTIRAJTE NAS
                </button>
            </div>
            <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
};

export default OurStory;
