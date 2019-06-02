import React from "react"
import Header from './header';
import Footer from './footer';

import layoutStyles from './layout.module.scss';

const Layout = ( props ) => { return(<div className={layoutStyles.container}>
<link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css" />


    <Header />{props.children}<Footer />

    </div>) }



export default Layout;