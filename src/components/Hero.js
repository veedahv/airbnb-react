import heroImg from "../assets/images/hero.png";


export default function Hero() {
    return (
        <section className="hero section">
            <div className="container">
                <img src={heroImg} alt="hero image" className="hero-img" width="80%" />
                <div className="hero_intro">
                    <h1 className="hero_title">Online Experiences</h1>
                    <p className="hero_text">
                        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                    </p>
                </div>
            </div>
        </section>
    )
}