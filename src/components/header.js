import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss';
import logo from '../images/logo.png';

const Header = () => { 
    return(
    <div class="headerParent">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    

        <header className={headerStyles.header}>

    
    <nav className={headerStyles.nav} class="navbar navbar-expand-lg navbar-light" id="myNav">
    <a class="navbar-brand" style={{marginLeft:'30px'}} ><img src={logo} width="90%" height="90%" alt="Logo" /></a>
    
    <div /* class="collapse navbar-collapse" */ style={{width:'100vw', display:"flex", flexDirection:'row', alignItems:"flex-end"}}>
    <ul class="navbar-nav" style={{marginLeft:'45vw', width:'30vw', fontSize:'19px', alignSelf:'flex-end', justifyContent:'space-between'}} >
    <Link to="/aboutUs/">
      <li>
      About Us
      </li>
      </Link>
      <Link to="/ourWork/">
      <li>Our Work</li>
      </Link>
      <Link to="/store/"><li>Store</li></Link>
      <Link to="/contactUs/"><li>Contact Us</li></Link>
    </ul>
  </div>

</nav>



    </header></div>
    ) }



export default Header;