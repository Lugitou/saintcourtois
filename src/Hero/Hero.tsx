import "./Hero.scss";
function Hero() {

    return (
        <div className="Hero">
            <div className={"heroIllustration"} style={{backgroundImage: `url(${require("../assets/Hero.png")})`}}></div>
            <div className="heroGradient"></div>
            <h2>Seconde Main, Premier Choix</h2>
        </div>
    );
}

export default Hero;