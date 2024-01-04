import "./contact.css";
import contactPic from "../assets/contact.jpg";

export function Contact() {
    return (
        <div className="background-img">
        <body className="contact-body">
          <h2 className="contact-title">CONTACT</h2>
          <img src={contactPic} alt="person on mountain bike" className="contact-pic" />
          <span className="email-title contact">Email: beschbikefit@gmail.com</span>
          <span className="phone-title contact">Phone: (262) 732-2453</span>
        </body>
      </div>
    )
}