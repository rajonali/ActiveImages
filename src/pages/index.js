import React from "react"

import Layout from '../components/layout';

import '../styles/index.scss'

import placeholder from '../images/placeholder.jpg';



const HomePage = () => { return(
<Layout>
<div style={{backgroundImage: `url(${placeholder})`,overflow: 'hidden', height:'500px'}}> 

<h1 style={{color:'white', fontWeight:'bold', fontSize:'50px', fontFamily:'helvetica', margin:'150px 0px 0px 150px', }}>ACTIVE IMAGE MEDIA</h1>
<h4 style={{color:'white', fontWeight:'normal', fontFamily:'helvetica', margin:'10px 0px 0px 150px' }}>▶️ Watch Showreel</h4>

</div>
</Layout>) }


export default HomePage;