import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "62c1e492-5f77-47de-b2f6-43899a6a40d8");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
      alert(res.message);
  };
  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>{`Get in touch`}</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>{`Let's talk`}</h1>
            <p>{`I'm currently avaliable to take on new project in new organization, so feel free to contact me anytime.`}</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p><b>{`kaviarasan202203@gmail.com`}</b></p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p><b>{`9319342983  /  9385501534`}</b></p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p><b>{`Vellore, Tamilnadu /  Bangaluru,Karnataka`}</b></p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">{`Your Name`}</label>
            <input type="text" placeholder='Enter your name' name='name' />

            <label htmlFor="">{`Your Email`}</label>
            <input type="email" placeholder='Enter your email' name='email' />

            <label htmlFor="">{`Your Mobile`}</label>
            <input type="mobile" placeholder='Enter your Mobile Number' name='mobile' />

            <label htmlFor="">{`Write your message here`}</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">{`Submit now`}</button>
        </form>
      </div>
    </div>
  )
}
export default Contact
