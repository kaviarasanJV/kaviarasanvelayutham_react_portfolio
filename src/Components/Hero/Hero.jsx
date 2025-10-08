import './Hero.css'
import profile_img from '../../assets/J.V.KAVIARASAN_profile_PIC.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>{`I'm J.V.KAVIARASAN,`}</span> {`FrontEnd & FullStack developer based in Tamilnadu, India.`}</h1>
      <p>{`I am a FrontEnd  & FullStack developer from Tamilnadu, India with 8 years of experience in multiple companies like CISCO, Wipro, CSC corps,Mastek,Synechron Technologies`}</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
          {`Connect with me`}
          </AnchorLink>
          </div>
           <a 
          href="/KAVIARASAN VELAYUTHAM RESUME.pdf" 
          download 
          className="hero-resume"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {`My Resume / CV`}
        </a>
      </div>
    </div>
  )
}
export default Hero
