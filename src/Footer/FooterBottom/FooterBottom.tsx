import "./FooterBottom.scss";

function FooterBottom() {
	return (
		<div className={"FooterBottom"}>
			<div className={"logoFooter"}>
				<img src={require("../../assets/LogoFooter.svg").default} alt={""} />
			</div>
			<div className={"footerBrands"}>
				<div className={"socials"}>
					<img src={require("../../assets/Facebook.svg").default} alt={""} />
					<img src={require("../../assets/Instagram.svg").default} alt={""} />
					<img src={require("../../assets/Twitter.svg").default} alt={""} />
				</div>
				<div className={"payBrand"}>
					<img src={require("../../assets/Amex.svg").default} alt={""} />
					<img src={require("../../assets/CB.svg").default} alt={""} />
					<img src={require("../../assets/Klama.svg").default} alt={""} />
					<img src={require("../../assets/Mastercard.svg").default} alt={""} />
					<img src={require("../../assets/Paypal.svg").default} alt={""} />
					<img src={require("../../assets/Visa.svg").default} alt={""} />
				</div>
			</div>
		</div>
	)
}

export default FooterBottom;