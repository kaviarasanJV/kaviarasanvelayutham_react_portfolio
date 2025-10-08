import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/J.V.KAVIARASAN_profile_PIC.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Seasoned IT Professional with 7.11 years of expertise in React.js, Nodejs
              MongoDB, ExpressJS, JavaScript (ES6), TypeScript, Redux, Redux Toolkit,
              Node.js, JEST, Auth0, and Jenkins, delivering high-performance applications
              within leading product-based companies, committed to innovation and
              technical excellence.</p>
            <p> Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Redux with thunk & saga</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>ReduxToolKit with thunk & saga</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Typescript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>JwtToken, Auth0</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Material UI</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Fluent UI</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Tailwind CSS</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>8</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>12+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>6 companies</p>
        </div>
      </div>
    </div>
  )
}
export default About
