import React from "react"

import Layout from '../components/layout';

import '../styles/index.scss'

import placeholder from '../images/placeholder.jpg';
import placeholder2 from '../images/placeholder2.jpg';
import placeholder3 from '../images/placeholder3.jpg';
import placeholder4 from '../images/placeholder4.jpg';
import placeholder5 from '../images/placeholder5.jpg';
import placeholder6 from '../images/placeholder6.jpg';
import placeholder7 from '../images/placeholder7.jpg';




const HomePage = () => { return(
<Layout>
<div style={{backgroundImage: `url(${placeholder})`,overflow: 'hidden', height:'500px', width:'100vw'}}> 

<div class="video-preview-comp">
<h1 style={{color:'white', fontWeight:'bold', fontSize:'50px', fontFamily:'helvetica', margin:'150px 0px 0px 150px', }}>ACTIVE IMAGE MEDIA</h1>
<h4 style={{color:'white', fontWeight:'normal', fontFamily:'helvetica', margin:'10px 0px 0px 150px' }}>▶️ Watch Showreel</h4>
</div>

</div>



<div class="subsections" style={{width:'95vw', paddingTop:'75px', paddingLeft:'50px'}}>

<div class="about-us-preview-comp" style={{ width:'90vw'}}>
    <h4>We are a full service photography and video production company based in the Philadelphia suburbs.</h4>
   
<div class="about-us-preview-subtext" style={{width:'70vw'}}>   
   
    <p style={{paddingTop:'20px'}}>Active Image Media has been providing the highest quality photography and video services throughout the Philadelphia region for over thirty years. We specialize in portrait photography and video production from start to finish.
<br />
<br />

Our creative team of storytellers believe in using a collaborative approach when working with our clients to tell their story. We offer a wide spectrum of services, but always with a personal touch. Our long list of satisfied clients includes local businesses, schools, sports organizations, families and individuals.
</p>
</div>


</div>

<div class="fw-divider-space" style={{backgroundColor:'rgba(0,0,0,0.2)', marginTop:'30px',  height:'1px'}}></div>


<div style={{paddingBottom:'30px'}} class="our-services-subsection">
<center><h1 style={{padding:'20px'}}>Our Services</h1></center>

<div class="services-array" style={{display:'flex', width:'auto', maxHeight : "100%", flexDirection:'row', justifyContent:'space-between'}}>
<img height={341} width={426} src={placeholder2} style={{}} />
<img height={341} width={426} src={placeholder3} style={{}} />
<img height={341} width={426} src={placeholder4} style={{}} />
</div>
</div>

<div class="fw-divider-space" style={{backgroundColor:'rgba(0,0,0,0.2)', marginTop:'30px',  height:'1px'}}></div>

<div style={{paddingBottom:'30px'}} class="our-services-subsection">
<center><h1 style={{padding:'20px'}}>Featured Photos</h1></center>

<div class="services-array" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
<img src={placeholder5} style={{}} />
<img src={placeholder6} style={{}} />
<img src={placeholder7} style={{}} />

</div>
</div>

</div>

</Layout>) }


export default HomePage;