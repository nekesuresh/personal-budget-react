import {
    Link
} from "react-router-dom"
function Menu() {
    return (
        <nav>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about.html">About</Link></li>
            <li><Link to="/login.html">Login</Link></li>
            <li><Link to="https://google.com">Google</Link></li>
        </ul>
    </nav>
    );
  }
  
  export default Menu;
  