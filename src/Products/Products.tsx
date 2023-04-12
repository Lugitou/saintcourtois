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
                    <span onClick={() => setSlide(!slide)}>
                        {
                            !slide ?
                                "Voir plus"
                                :
                                "Voir moins"
                        }
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
        </section>
    );
}

export default Products;