import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Piza Co.</Link>

      <SearchOrder />

      <p>Simon</p>
    </header>
  );
}

export default Header;
