import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header" style={{
                background: "url('https://images.unsplash.com/photo-1504279589104-dbdf13c36a6e?q=80&w=2000&auto=format&fit=crop') center/cover no-repeat",
                padding: "150px 0 100px",
                textAlign: "center",
                position: "relative",
                color: "white"
            }}>
                <div className="overlay" style={{ background: "rgba(0,0,0,0.5)", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}></div>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <h1 className="hero-title">O NAMA</h1>
                    <div className="hero-divider">
                        <span></span>
                        <i className="fa-solid fa-wine-glass"></i>
                        <span></span>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section-padding" style={{ backgroundColor: "#fdfbf8" }}>
                <div className="container">
                    <div className="winemaking-grid">
                        <div className="winemaking-image">
                            <img src="https://images.unsplash.com/photo-1474722861605-173884d78f57?q=80&w=1200&auto=format&fit=crop" alt="Vineyard" style={{ filter: "grayscale(20%)" }} />
                        </div>
                        <div className="winemaking-text">
                            <div className="section-subtitle">Naša filozofija</div>
                            <h2 className="section-title">HARMONIJA PRIRODE I TRADICIJE</h2>
                            <p>
                                Vina Galjin dvor nastaju u vinogradima obitelji Županović, u okolici mjesta Kruševo u primoštenskom zaleđu. Na ovim krševitim, kamenitim padinama, prije nego što sokovi poteku kroz lozu, svaka kapljica znoja, odricanja i cjeloživotnog težačkog rada pretvara se u kap ljubavi, sreće i uspjeha...
                            </p>
                            <p>
                                Upravo takva vina stižu na stolove - izravna, moćna i iskrena. Zato je svako naše vino odraz sorte i truda ruku koje ga vode od trsa do boce. S 94 boda već smo na pragu čistog decanterovog zlata, što svjedoči o dubokoj i neraskidivoj vezi s ovim škrtim, ali plemenitim tlom.
                            </p>
                            <div className="signature">Županović</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Values */}
            <section className="section-padding">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon"><i className="fa-solid fa-seedling"></i></div>
                            <h3 className="feature-title">EKOLOŠKI PRISTUP</h3>
                            <p className="blog-excerpt">Minimalna intervencija u prirodi za maksimalni okus u čaši.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="fa-solid fa-barrel"></i></div>
                            <h3 className="feature-title">HRASOVA BAČVA</h3>
                            <p className="blog-excerpt">Tradicionalno dozrijevanje u najboljem kvalitetnom hrastu.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="fa-solid fa-temperature-arrow-down"></i></div>
                            <h3 className="feature-title">KONTROLIRANA FERMENTACIJA</h3>
                            <p className="blog-excerpt">Spajamo staro znanje s najmodernijom tehnologijom.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon"><i className="fa-solid fa-hand-holding-heart"></i></div>
                            <h3 className="feature-title">RUČNA BERBA</h3>
                            <p className="blog-excerpt">Svaki grozd prolazi kroz naše ruke kako bi samo najbolji postao vino.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Like Qode */}
            <section className="image-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", height: "400px" }}>
                <div style={{ background: "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000') center/cover" }}></div>
                <div style={{ background: "url('https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1000') center/cover" }}></div>
                <div style={{ background: "url('https://images.unsplash.com/photo-1528823331182-7aa201b1de80?q=80&w=1000') center/cover" }}></div>
            </section>
        </div>
    );
};

export default About;
