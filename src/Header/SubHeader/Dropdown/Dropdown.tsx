import "./Dropdown.scss";

type Props = {
	id?: number,
	className?: string,
	item?: any

}

function Dropdown(props: any) {

	const menu = props.item.sub ? props.item : {
		id: 999,
		name: "",
		sub: []
	};

	return <div className="Dropdown">
		<div className={"dropdownBody"}>
			{
				menu.sub.map((item: any) => {
					if (menu !== null) {
						return (
							<div className={"column"} key={item.title}>
								<span className={"dropdownTitle"}>{item.title}</span>
								<div className={"dropdownBody"}>
									{
										item.items.map((item: any) => {
											return (
												<span key={item.name} className="dropdownLink">{item.name}</span>
											)
										})
									}
								</div>
							</div>
						)
					} else {
						return null;
					}
				})
			}
		</div>
	</div>;
}

export default Dropdown;