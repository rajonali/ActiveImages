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


import './index.page.scss';



const HomePage = () => { return(
<Layout>

<div style={{backgroundImage: `url(${placeholder})`,overflow: 'hidden', height:'500px', width:'100vw'}}> 

<div class="video-preview-comp">
<h1 style={{color:'white', fontWeight:'bold', fontSize:'50px', fontFamily:'helvetica', margin:'150px 0px 0px 150px', }}>ACTIVE IMAGE MEDIA</h1>
<h4 style={{color:'white', fontWeight:'normal', fontFamily:'helvetica', margin:'10px 0px 0px 150px' }}>▶️ Watch Showreel</h4>
</div>

</div>



<div class="subsections" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:'95vw', paddingTop:'75px', paddingLeft:'50px'}}>

<div class="about-us-preview-comp" style={{ width:'90vw', paddingTop:'60px'}}>
    <p style={{fontSize:'24px', fontFamily:'Karla', fontWeight:600, lineHeight:1.1, color:'rgba(13,15,9,0.9)'}}>We are a full service photography and video production company based in the Philadelphia suburbs.</p>
   
<div class="about-us-preview-subtext" style={{width:'70vw'}}>   
   
    <p style={{fontSize:'18px', paddingTop:'20px', fontFamily:'Karla', lineHeight:1.9, color:'rgba(13,15,9,0.8)'}}>Active Image Media has been providing the highest quality photography and video services throughout the Philadelphia region for over thirty years. We specialize in portrait photography and video production from start to finish.
<br />
<br />

Our creative team of storytellers believe in using a collaborative approach when working with our clients to tell their story. We offer a wide spectrum of services, but always with a personal touch. Our long list of satisfied clients includes local businesses, schools, sports organizations, families and individuals.
</p>
</div>


</div>

<div class="fw-divider-space" style={{backgroundColor:'rgba(0,0,0,0.2)', width:'100%', height:'1px', marginTop:'60px'}}></div>


<div style={{paddingBottom:'30px', width:'1200px'}} class="our-services-subsection">
<center><h1 style={{padding:'50px', fontFamily:'Karla', fontWeight:500, fontSize:'48px'}}>Our Services</h1></center>

<div class="services-array" style={{display:'flex', width:'auto', maxHeight : "100%", flexDirection:'row', justifyContent:'space-between'}}>
<img height={341} width={426} src={placeholder2} style={{padding:'20px'}} />
<img height={341} width={426} src={placeholder3} style={{padding:'20px'}} />
<img height={341} width={426} src={placeholder4} style={{padding:'20px'}} />
</div>
</div>

<div class="fw-divider-space" style={{backgroundColor:'rgba(0,0,0,0.2)', width:'100%', height:'1px', marginTop:'60px'}}></div>

<div style={{paddingBottom:'30px'}} class="our-services-subsection">
<center><h1 style={{padding:'50px', fontFamily:'Karla', fontWeight:500, fontSize:'48px'}}>Featured Photos</h1></center>

<div class="services-array" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
<img src={placeholder5} style={{padding:'20px'}}  />
<img src={placeholder6} style={{padding:'20px'}} />
<img src={placeholder7} style={{padding:'20px'}} />

</div>
</div>


<div class="fw-divider-space" style={{backgroundColor:'rgba(0,0,0,0.2)', width:'100%', height:'1px', marginTop:'60px'}}></div>

<div style={{paddingBottom:'30px'}} class="featured-videos-subsection">
    
<center><h1 style={{padding:'50px', fontFamily:'Karla', fontWeight:500, fontSize:'48px'}}>Featured Videos</h1></center>

<div class="services-array" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
<iframe src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0" width="400" style={{padding:'20px'}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<iframe src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0" width="400" style={{padding:'20px'}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<iframe src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0" width="400" style={{padding:'20px'}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<div class="services-array" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
<iframe src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0" width="400" style={{padding:'20px'}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<iframe src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0" width="400" style={{padding:'20px'}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<iframe src="https://player.vimeo.com/video/338800475?title=0&byline=0&portrait=0" width="400" style={{padding:'20px'}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>


</div>

<div class="fw-divider-space" style={{backgroundColor:'rgba(0,0,0,0.2)', width:'100%', height:'1px', margin:'60px'}}></div>

<div style={{paddingBottom:'30px'}} class="featured-clients-subsection">
    
<center><h1 style={{fontFamily:'Karla', fontWeight:500, fontSize:'48px'}}>Our Clients</h1></center>

<div class="services-array" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingTop:40}}>
    <div style={{height:200,width:200, margin:10, backgroundColor:'rgba(0,0,0,0.5)'}} />
    <div style={{height:200,width:200, margin:10, backgroundColor:'rgba(0,0,0,0.5)'}} />
    <div style={{height:200,width:200, margin:10, backgroundColor:'rgba(0,0,0,0.5)'}} />
    <div style={{height:200,width:200, margin:10, backgroundColor:'rgba(0,0,0,0.5)'}} />
    <div style={{height:200,width:200, margin:10, backgroundColor:'rgba(0,0,0,0.5)'}} />
</div>

<div class="services-array" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
</div>


</div>



<div class="fw-divider-space" style={{backgroundColor:'rgba(0,0,0,0.2)', width:'100%', height:'1px', margin:'60px'}}></div>


<div style={{paddingBottom:'30px'}} class="client-testimonials-subsection">
    
<center><h1 style={{fontFamily:'Karla', fontWeight:500, fontSize:'48px'}}>Client Testimonials</h1></center>

<div class="services-array" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingTop:40}}>
<div class="container bootstrap snippet">
    <div class="row">
        <hr />
    	<div class="col-md-12">
			<div class="row testimonials">
				<div class="col-sm-4">
					<blockquote>
						<p class="clients-words">
                        The best in the business! They take care of all of the video and photos needed for my business, Catholic Community Choir. They also did photo and video for my wedding and they captured every magical moment! Great staff of talented and kind people!


                            </p>						<img class="img-circle img-thumbnail" src="https://lorempixel.com/400/400/people/1/" />

					</blockquote>
                    <span class="clients-name text-primary">— Amanda corey</span>

				</div>
                
				<div class="col-sm-4">
					<blockquote>
						<p class="clients-words">Mike, these are fantastic!!! Thank you so much for these beautiful photos – you captured the school and the students so well!

</p>
						<img class="img-circle img-thumbnail" src="https://lorempixel.com/400/400/people/5/" />
					</blockquote>
                    <span class="clients-name text-primary">— Factory nn (@facnnteam)</span>

				</div>
				<div class="col-sm-4">
					<blockquote>
						<p  class="clients-words">Thank you so much for doing such an awesome job for the MN Wrestling team! The senior posters and senior night pictures came out so nice! I appreciate you accommodating our schedules and making sure all of our guys had their photos done. You guys are the best! Thanks again at doing such a great job for the whole MN student body!!

</p>
						<img class="img-circle img-thumbnail" src="https://lorempixel.com/400/400/people/4/" />
					</blockquote>
                    <span class="clients-name text-primary">— Big daniel mont</span>

				</div>
			</div>
		</div>	
	</div>
</div>
</div>

<div class="services-array" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
</div>


</div>


</div>


</Layout>) }


export default HomePage;