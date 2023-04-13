import "./Header.scss";
import SubHeader from "./SubHeader";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Sell from "./Sell";
import Cart from "./Cart";
import {useState} from "react";
import dropdownConfig from "./SubHeader/DropdownConfig";
import MobileMenu from "./MobileMenu";

function Header() {

    const [burger, setBurger] = useState(false);
    const [menu, setMenu] = useState(dropdownConfig);

    return (
        <div className={"header"}>
            <div className={"mainHeader"}>
                <Logo />
                <div className={"rightHeader"}>
                    <SearchBar />
                    <Sell />
                    <Cart />
                </div>
                <div className={"burgerMobile"} onClick={() => setBurger(!burger)}>
                    <img src={require("../assets/burger.svg").default} alt={""}/>
                </div>
            </div>
            <SubHeader />
            {
                burger ?
                    <MobileMenu close={{setBurger}} data={menu}/>
                    :
                    ""
            }
        </div>
    );
}

export default Header;