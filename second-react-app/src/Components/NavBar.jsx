
import { NavLink } from 'react-router-dom'


export default function NavBar() {


return (
<nav className="NavBar">

<ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/emoji">Emoji</NavLink></li>
<li><NavLink to="/BitcoinRates">BitcoinRates</NavLink></li>
</ul> {/* ++ Add another page with route and component */}
</nav>
)
}