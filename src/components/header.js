import React from "react"
import { Link } from "gatsby"


const Header = () => { 
    return(
    <div class="headerParent">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <header style={{}}>

        <h1><Link to="/">ActiveImages</Link> </h1>
        <ul>

<li>            <Link to="/aboutUs/">About Us</Link> </li>
<li>            <Link to="/ourWork/">Our Work</Link> </li>
<li>                        <Link to="/store/">Store</Link> </li>
<li>            <Link to="/contactUs/">Contact Us</Link> </li>

        </ul>
        <p>my header ^^</p>
    </header></div>
    ) }



export default Header;