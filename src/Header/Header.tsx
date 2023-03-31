import "./Header.scss";
import SubHeader from "./SubHeader";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Sell from "./Sell";
import Cart from "./Cart";

function Header() {
    return (
        <div className={"header"}>
            <div className={"mainHeader"}>
                <div className={"left"}>
                    <Logo />
                </div>
                <div className={"right"}>
                    <SearchBar />
                    <Sell />
                    <Cart />
                </div>
            </div>
            <SubHeader />
        </div>
    );
}

export default Header;