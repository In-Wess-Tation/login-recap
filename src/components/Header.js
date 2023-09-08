import Cookies from 'js-cookie';
import Search from "./Search";
import { Link } from "react-router-dom";


const Header = () => {

    const token = Cookies.get("token")

    return ( 
        <header>

        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            {token && (<Link to={"/secrets"}>Secrets</Link>)}
        </nav>

        <Search />

        </header>
     );
}
 
export default Header;