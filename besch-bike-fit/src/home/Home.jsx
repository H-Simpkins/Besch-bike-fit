import home from "../assets/home.jpg"
import "./home.css";

export function Home() {
  return (
    <body className="body">
      <div
        className="hero"
      >
        <img className="hero-img" src={home} />
        <div className="hero-words">
            <span>Cycling</span>
            <span>Wellnes</span>
            <span>Adventure</span>
        </div>
        <button className="contact-button">Work with me</button>
        <span className="hero-words slogan">At-home bike fitting and Physical Therapy Services to help you get the most out of you cycling experience.</span>
      </div>
    </body>
  );
}
