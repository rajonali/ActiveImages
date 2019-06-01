import React from "react"
import { Link } from "gatsby"
import footerStyles from './footer.module.scss';


const Footer = () => { 
    return(
<footer className={footerStyles.footer}>
Created by Tasnim Ali 🚀 © 2019
<div class="container bootstrap snippet">
    <div class="row">
        <hr />
    	<div class="col-md-12">
			<div class="row testimonials">
				<div class="col-sm-4">
                    <p>col1</p>

				</div>
                
                <div class="col-sm-4">
                    <p>col2</p>

				</div>
                <div class="col-sm-4">
                    <p>col3</p>

				</div>
			</div>
		</div>	
	</div>
</div>
    </footer>
    ) }



export default Footer;