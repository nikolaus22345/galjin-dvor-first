import React from 'react';

const OurHistory = () => {
    const events = [
        { year: 'Tradicija', label: 'početci sadnje', desc: 'Dugogodišnja poljoprivredna tradicija našeg kraja odredila je i naš put. Na obroncima u okolici Primoštena zasađeni su prvi trsovi obitelji Županović.', img: '/h1-workflow-1.png' },
        { year: 'Znanje', label: 'čuvanje baštine', desc: 'Kroz stoljetno iskustvo težačkog rada i brižno njegovanje autohtonog Babića, neprestano smo usavršavali naše tehnike.', img: '/h1-workflow-2.png' },
        { year: 'Razvoj', label: 'modernizacija podruma', desc: 'S vremenom smo proširili naše kapacitete, ugradili suvremenu opremu, ali pritom zadržali stari vinski duh u podrumu.', img: '/h1-workflow-3.png' },
        { year: 'Danas', label: 'otvoreni za vas', desc: 'Naš vinski podrum Galjin dvor otvoren je uz prethodnu najavu, spremno dočekujući sve ljubitelje vrhunskog Babića.', img: null },
    ];

    return (
        <section className="section-padding history-section" id="pages">
            <div className="container">
                <h2 className="section-title">NAŠA POVIJEST</h2>
                <div className="timeline">
                    {events.map((evt, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-left">
                                <div className="section-subtitle" style={{ marginBottom: 0, color: 'white' }}>{evt.label}</div>
                                <div className="timeline-year">{evt.year}</div>
                            </div>
                            {evt.img && (
                                <div className="timeline-center">
                                    <img src={evt.img} alt="Povijest Vinarije" />
                                </div>
                            )}
                            <div className="timeline-right">
                                <p>{evt.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurHistory;
