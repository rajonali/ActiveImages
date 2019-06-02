import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss';
import logo from '../images/logo.png';

const Header = () => { 
    return(
    <div class="headerParent">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    

        <header className={headerStyles.header}>
        <script src="https://kit.fontawesome.com/15d1006177.js"></script>
   
    
    <nav className={headerStyles.nav} class="navbar navbar-expand-lg navbar-light" id="myNav">
    <a class="navbar-brand" style={{marginLeft:'30px'}} >
      <div style={{width:'250px', display:'flex', justifyContent:'center', alignItems:'center', height:'100px', backgroundColor:'black'}}>
      <h3 style={{color:'white'}}>BRAND LOGO</h3>

      </div>
      </a>
    
    <div /* class="collapse navbar-collapse" */ style={{width:'100vw', display:"flex", flexDirection:'row', alignItems:"flex-end"}}>
    <ul class="navbar-nav" style={{marginLeft:'45vw', width:'30vw', fontSize:'19px', alignSelf:'flex-end', justifyContent:'space-between'}} >
    <Link to="/aboutUs/">
      <li style={{fontFamily:'Karla'}}>
      About Us
      </li>
      </Link>
      <Link to="/ourWork/">
      <li style={{fontFamily:'Karla'}}>
        Our Work</li>
      </Link>
      <Link to="/store/">
      <li style={{fontFamily:'Karla'}}>

          Store</li></Link>
      <Link to="/contactUs/">
      <li style={{fontFamily:'Karla'}}>

          Contact Us</li></Link>
    </ul>
  </div>

</nav>



    </header></div>
    ) }



export default Header;