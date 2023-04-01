import "./Hero.scss";
function Hero() {

    return (
        <div className="Hero">
            <img className={"heroIllustration"} src={require("../assets/Hero.svg").default} alt="Hero" />
            <div className={"heroGradient"}></div>
            <h2>Seconde Main, Premier Choix</h2>
        </div>
    );
}

export default Hero;