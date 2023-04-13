import "./MobileMenu.scss";
import {useState} from "react";

function MobileMenu(props: any) {

	const [closing, setClosing] = useState(false);
	console.log(props.data);

	const closeModal = () => {
		setClosing(true)
		setTimeout(() => {
			props.close.setBurger(false);
		}, 500);
	}

	const generateMenu = () => {
		return props.data.map((item: any, index: number) => {
			return (
				<div className={"item"} key={index}>
					{item.name}
				</div>
			)
		})
	}

	return (
		<div className={closing ? "MobileMenu closing" : "MobileMenu"}>
			<div className={"closeBurger"} onClick={() => closeModal()}></div>
			<div className={"menu"}>
				{
					generateMenu()
				}
			</div>
		</div>
	)
}

export default MobileMenu;