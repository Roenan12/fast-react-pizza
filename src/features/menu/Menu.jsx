import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  //console.log(menu);

  return (
    <ul className="divider-stone-200 divide-y px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

async function loader() {
  const menu = await getMenu();
  return menu;
}

Menu.loader = loader;

export default Menu;
