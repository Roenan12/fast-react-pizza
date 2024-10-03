import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Fast React Piza Co.</Link>

      <SearchOrder />

      <p>Simon</p>
    </div>
  );
}

export default Header;
