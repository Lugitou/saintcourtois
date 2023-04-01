import "./Card.scss";

function Card(props: any) {

	const product = props.product;

	  return <div className={"Card"} key={product.id}>
		  <div className={"cardMain"}>
			  <img className={"cardIllustration"} src={product.path ? require(`../../assets/${product.path}`) : ""} alt={""} />
			  { product.expert ?
				  (<span className={"expert"}>
					  <img className={"star"} src={require("../../assets/Star.svg").default} alt={"star"} />
					  Vendeur expert
				  </span>) : ""}
			  {
				product.like ?
					<div className={"like"}>
						<div className={"wrap"}>
							<img className={"heart"} src={require("../../assets/Heart.svg").default} alt={"heart"} />
							<span className={"number"}>{product.like}</span>
						</div>
					</div>
					: ""
			  }
		  </div>
		  <div className={"cardFooter"}>
			  <span className={"articleName"}>{product.name}</span>
			  <div className={"prices"}>
				  <span className={"basePrice"}>{product.basePrice}{product.basePrice ? "€" : ""}</span>
				  <span className={"price"}>{product.price}{product.price ? "€" : ""}</span>
			  </div>
		  </div>
	  </div>;
}

export default Card;