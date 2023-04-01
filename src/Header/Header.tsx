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
                <Logo />
                <div className={"rightHeader"}>
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