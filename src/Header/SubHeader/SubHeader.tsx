import "./SubHeader.scss";
import {useState} from "react";
function SubHeader() {

  const [menu, setMenu] = useState([
    {
        id: 1,
        name: "Nouveautés",
    },
    {
        id: 2,
        name: "Promos",
    }, {
        id: 3,
        name: "Femmes",
    },
    {
        id: 4,
        name: "Hommes",
    }, {
        id: 5,
        name: "Enfants",
    }, {
        id: 6,
        name: "Vêtements",
    }, {
        id: 7,
        name: "Chaussures",
    }, {
        id: 8,
        name: "Accessoires",
    }
  ]);

  return <div className={"SubHeader"}>
    {
        menu.map((item) => {
            return (
                <div key={item.id} className={"SubHeaderItem"}>
                    {item.name}
                </div>
            )
        })
    }
  </div>;
}

export default SubHeader;