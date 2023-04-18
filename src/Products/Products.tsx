import "./Products.scss";
import {useState} from "react";
import Card from "./Card";
function Products() {

    const [products, setProducts] = useState([
        {
            id: 0,
            name: "Sweetshirt Louis Vuitton",
            path: "T-shirt.png",
            seller: "",
            expert: true,
            price: 800,
            basePrice: 950,
            like: 125
        },
        {
            id: 1,
            name: "",
            path: null,
            seller: "",
            expert: false,
            price: null,
            basePrice: null,
            like: null
        },
        {
            id: 2,
            name: "",
            path: null,
            seller: "",
            expert: false,
            price: null,
            basePrice: null,
            like: null
        },
        {
            id: 3,
            name: "",
            path: null,
            seller: "",
            expert: false,
            price: null,
            basePrice: null,
            like: null
        }
    ]);

    const [slide, setSlide] = useState(false);

    return (
        <section>
            <div className={"Products"}>
                <div className={"productHead"}>
                    <h3>Les Nouveautés</h3>
                    <span>
                        <span>Voir plus</span>
                    </span>
                </div>
                <div className={slide ? "productList slideR" : "productList slideL"}>
                    {
                        products.map((item) => {
                            return (
                                <Card product={item} key={item.id} />
                            )
                        })
                    }
                </div>
            </div>
            <div className={"slideBtn"}>
                <span className={"slideBtnLeft"} onClick={() => setSlide(false)}>
                    <img src={require("../assets/Caret.svg").default} alt={""}/>
                </span>
                <span className={"position"}>
                    <span className={slide ? "" : "active"}></span>
                    <span className={slide ? "active" : ""}></span>
                </span>
                <span className={"slideBtnRight"} onClick={() => setSlide(true)}>
                    <img src={require("../assets/Caret.svg").default} alt={""}/>
                </span>
            </div>
        </section>
    );
}

export default Products;