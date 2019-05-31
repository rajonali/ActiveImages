import React from "react"
import Header from './header';
import Footer from './footer';

import layoutStyles from './layout.module.scss';

const Layout = ( props ) => { return(<div className={layoutStyles.container}>
<link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />


    <Header />{props.children}<Footer />

    </div>) }



export default Layout;