import React from "react"
import { Link } from "gatsby"
import footerStyles from './footer.module.scss';


const Footer = () => { 
    return(
<footer className={footerStyles.footer}>
<div class="container bootstrap snippet">
    <div class="row">
        <hr />
    	<div class="col-md-12">
			<div class="row testimonials">
				<div class="col-sm-4">
                    <h1>About us</h1>
                    <div style={{display:'flex', marginTop:20, justifyContent:'space-between'}}>
                    <p>
                    Active Image Media is a full service production company that specializes in portrait photography and video production. We offer a wide spectrum of services, but always with a personal touch. <br /><br />Got an idea for a project? Get in touch and let’s talk about it!
                    </p>
                    </div>
				</div>
                
                <div class="col-sm-4">
                <h1 style={{fontStyle:'bold'}}>Follow us</h1>

<div style={{display:'flex', marginTop:20, justifyContent:'space-between', width:'60%'}}>
<i class="fab fa-facebook" style={{fontSize:25, color:'#3b5998'}}></i>
<i class="fab fa-twitter" style={{fontSize:25, color:'#51b5e7'}}></i>
<i class="fab fa-youtube" style={{fontSize:25, color:'#e02a20'}}></i>
<i class="fab fa-instagram" style={{fontSize:25, color:'#E1306C'}}></i>
</div>
				</div>
                <div class="col-sm-4">
                <h1>Get in touch</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

				</div>
			</div>
		</div>	
	</div>
</div>
Created by Tasnim Ali 🚀 © 2019

    </footer>
    ) }



export default Footer;