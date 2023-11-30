import { ImageSlider } from "../ImageSlider";
import lake from "../assets/lake.jpg"
import "./home.css";

export function Home() {
  return (
    <body className="body">
      <div
        className="hero"
      >
        <span className="hero-words">
          At-home bike fitting and Physical Therapy services to help you get the
          most out of your cycling experience.
        </span>
        <img className="hero-img" src={lake} />
        {/* <ImageSlider className="hero-img"/> */}
      </div>
    </body>
  );
}
