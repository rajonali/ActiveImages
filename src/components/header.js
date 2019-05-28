import React from "react"
import { Link } from "gatsby"


const Header = () => { 
    return(
    <div><header>

        <h1><Link to="/">ActiveImages</Link> </h1>
        <ul>

<li>            <Link to="/aboutUs/">About Us</Link> </li>
<li>            <Link to="/ourWork/">Our Work</Link> </li>
<li>                        <Link to="/store/">Store</Link> </li>
<li>            <Link to="/contactUs/">Contact Us</Link> </li>

        </ul>
    </header></div>
    ) }



export default Header;