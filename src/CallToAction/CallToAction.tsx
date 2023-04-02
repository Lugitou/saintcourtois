import "./CallToAction.scss";
function CallToAction() {
	  return (
	<div className="CallToAction">
	  <div className={"actionBox"}>
		  <div className={"actionLeft"}>
			Videz vos placards, faits de la place et gagnez de l'argent !
		  </div>
		  <div className={"actionRight"}>
			  <button className={"actionButton"}>Vendre un article</button>
			  <span className={"actionHelper"}>Comment sa fonctionne ?</span>
		  </div>
	  </div>
	</div>
  );
}

export default CallToAction;