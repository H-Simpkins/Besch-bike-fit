import home from "../assets/home.jpg"
import "./home.css";

export function Home() {
  return (
    <body className="body">
      <div
        className="hero"
      >
        <img className="hero-img" src={home} />
        <div className="screen-size">
        <div className="hero-words">
            <span>CYCLING</span>
            <span>WELLNESS</span>
            <span>ADVENTURE</span>
        </div>
        <div className="button-container">
        <button className="contact-button">Work with me</button>
        </div>
        <span className="hero-words slogan">At-home bike fitting and Physical Therapy Services to help you get the most out of you cycling experience.</span>
        </div>
      </div>
    </body>
  );
}
