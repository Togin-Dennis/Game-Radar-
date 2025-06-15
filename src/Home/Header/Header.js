import React, { useState } from 'react'
import './Header.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSearch ,FaAndroid, FaGithub, FaStore } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import GameRadarLogo from '../../Assets/GameRadarLogo.png'
function Header() {


const scrollToFreeGames = () => {
  const section = document.getElementById("free-games-section");
  section?.scrollIntoView({ behavior: 'smooth' });
};


const scrollToFreeDLC = () => {
  const section = document.getElementById("free-DLC-section");
  section?.scrollIntoView({ behavior: 'smooth' });
};
const scrollToFreeAPPS = () => {
  const section = document.getElementById("free-Apps-section");
  section?.scrollIntoView({ behavior: 'smooth' });
};


const [Searchdata,setsearchdata]=useState('')

const navigate = useNavigate();

  return (
    <div className='HeaderMainDiv'>

      <div className='smallheader'>

        <div className='SocialMeadiaHeader'>
          <FaGithub onClick={()=>{window.open('https://github.com/Togin-Dennis', '_blank');}} className='Socialiconbutton' size={16} />
          <FaInstagram onClick={()=>{window.open('https://www.instagram.com/togin_dennis_/', '_blank');}} className='Socialiconbutton' size={16} />

          <FaLinkedin onClick={()=>{window.open('https://www.linkedin.com/in/togin-dennis-a8642a359/', '_blank');}} className='Socialiconbutton' size={16} />
        </div>


        <div>

          <h4 className='SmallheaderText' >Welcome to Game Radar</h4>
        </div>



      </div>
      <div className='bigheader'>

        <div className='bigheaderfirstbox'>
          <img className='headerlogo' onClick={()=>{navigate('/');}} src={GameRadarLogo} alt="" />


          <div className='Searchbox'>

            <input className='searchinputbox' placeholder='Search' onChange={(e)=>{setsearchdata(e.target.value)}}
          
            
            ></input>
          


            <div className='Searchiconbox'   onClick={()=>{navigate('/search', { state: { Searchdata: Searchdata } });}}>
              <FaSearch className='Searchicon' size={20} />
            </div>

          </div>


        </div>



      </div>

<div className='Endheader'>

<div className='Endheaderwrapper'>



<div className='Dowmloadappbox' onClick={()=>{window.open('https://play.google.com/store/apps/details?id=in.TCode.gameradar&pcampaignid=web_share', '_blank');}}>
  <FaAndroid size={30} />
  
  <h4 className='DownloadappText'>DOWNLOAD ANDROID APP</h4>
  </div>


<div className='Sections'>

<h5 className='sectionname'onClick={()=>{navigate('/');}}>Home</h5>
<h5 className='sectionname' onClick={scrollToFreeGames}>Free Games</h5>
<h5 className='sectionname' onClick={scrollToFreeDLC}>Free DLC</h5>
<h5 className='sectionname' onClick={scrollToFreeAPPS}>Free Apps</h5>


</div>
</div>


<div className='LoginBox'>

<HiOutlineMail size={30} className='icons'/>
<div className='LoginTextBox'>
  <h5 className='HelpTextHEading'>Need Help ?</h5>
  <h5 className='HelpvalueText'>tcodeappssupport@gmail.com</h5>
</div>

</div>




</div>







    </div>
  )
}

export default Header
