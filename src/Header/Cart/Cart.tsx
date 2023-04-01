import "./Cart.scss";
import {useState} from "react";

function Cart() {

    const [articlesCounter, setArticlesCounter] = useState(1);

    const getArticlesCounter = () => {
        if (articlesCounter === null) {
            return "";
        } else if (articlesCounter > 0 && articlesCounter < 10) {
            return articlesCounter;
        } else {
            return "9+";
        }
    }

    return <div className={"Cart"}>
        <button>
            <img className={"cartLogo"} src={require("../../assets/Cart.svg").default} alt={"Cart"} />
            <span className={"cartCounter"}>{getArticlesCounter()}</span>
        </button>
    </div>;
}

export default Cart;