import "./SubHeader.scss";
import {useEffect, useState} from "react";
import Dropdown from "./Dropdown";
import { default as dropdownConfig } from "./DropdownConfig";

function SubHeader() {

	const [menu, setMenu] = useState(dropdownConfig);

	const [openDropdownId, setOpenDropdownId] = useState(-1);

	return <div className={"SubHeader"} onMouseLeave={() => setOpenDropdownId(-1)}>
		{
			menu.map((item) => {
				return (
					<div key={item.id} className={ item.id === openDropdownId ? "SubHeaderItem underline" : "SubHeaderItem"} onMouseEnter={() => setOpenDropdownId(item.id)}>
						{item.name}
					</div>
				)
			})
		}
		{openDropdownId !== -1 ? <Dropdown id={openDropdownId} item={menu[openDropdownId - 1]} /> : null}
	</div>;
}

export default SubHeader;