import { ImageSlider } from "./ImageSlider";

export function Home() {
  return (
    <body className="body">
      <div className="hero" style={{display:"flex", height:"600px", width:"50%"}}>
        <span className="hero-words">At-home bike fitting and Physical Therapy services to help you get the emost out of your cycling experience.</span>
        <ImageSlider />
      </div>
    </body>
  );
}
