import React from 'react';

const WineShowcases = () => {
    return (
        <section id="portfolio" className="section-padding wine-showcases-detailed">
            <div className="container">
                {/* Babić 94 points */}
                <div className="wine-detailed-row">
                    <div className="wine-detailed-content">
                        <div className="wine-detailed-year italic-serif">DECANTER SREBRO</div>
                        <h2 className="wine-detailed-title">BABIĆ (94 boda)</h2>
                        <p className="wine-detailed-desc">
                            Naš najistaknutiji Babić obitelji Županović zaslužio je visokih 94 boda na prestižnom Decanter World Wine Awardsu u Londonu. Već treću godinu zaredom ovaj Babić je na pragu zlata, što potvrđuje izniman trud i kvalitetu naše male obiteljske vinarije. Pravi odraz tradicije i dalmatinskog krša.
                        </p>
                        <button className="btn-outline btn-dark-small">POGLEDAJ VIŠE</button>
                    </div>
                    <div className="wine-detailed-image">
                        <img src="https://pngimg.com/uploads/bottle/bottle_PNG2091.png" alt="Babić 94 boda" />
                    </div>
                </div>

                {/* Babić 91 bod */}
                <div className="wine-detailed-row reverse">
                    <div className="wine-detailed-image">
                        <img src="https://pngimg.com/uploads/bottle/bottle_PNG2091.png" alt="Babić 91 bod" />
                    </div>
                    <div className="wine-detailed-content">
                        <div className="wine-detailed-year italic-serif">DECANTER SREBRO</div>
                        <h2 className="wine-detailed-title">BABIĆ (91 bod)</h2>
                        <p className="wine-detailed-desc">
                            Također nagrađen srebrnom medaljom na Decanteru u Londonu, naš Babić koji je ocijenjen s 91 bodom donosi autentičan okus i snagu primoštenskih vinograda. Ručno bran i pomno njegovan, ovaj Babić nosi onu izvornu galjinsku kvalitetu u svakoj čaši.
                        </p>
                        <button className="btn-outline btn-dark-small">POGLEDAJ VIŠE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WineShowcases;
