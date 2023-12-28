/* eslint-disable react/no-unescaped-entities */
import about from "../assets/about.jpg";
import "./about.css";

export function About() {
  return (
    <>
      <div className="background-img">
        <body className="about-body">
          <h1 className="about">ABOUT ME</h1>
          <hr />
          <div className="about-container">
            <div className="about-words">
              <p className="about-p-emphasis">
                GROWING UP, MY BICYCLE WAS MY FIRST TICKET TO FREEDOM.
              </p>
              <p className="about-p">
                From riding around town with friends to racing dirt track BMX,
                you could always find me on two wheels. Cycling evolved to serve
                a more utilitarian purpose when I moved to Chicago to attend
                Northwestern’s Feinberg School of Medicine to obtain my
                Doctorate in Physical Therapy. During this time of my life I put
                countless miles on my single speed commuter. Upon returning home
                to Minnesota I returned to cycling for pure joy the sport when I
                discovered mountain biking. Since then I have found myself
                becoming more and more fascinated with all aspects of cycling
                and have competed in gravel racing and criterium racing.
              </p>
              <p className="about-p">
                As a Physical Therapist I have spent a majority of my career
                working in the Emergency Department at two different University
                Hospitals in major metropolitan areas. In this setting I assess
                and treat acute musculoskeletal injuries and vestibular
                impairments. When I’m not in the Emergency Department I also
                spend a large amount of time in the Intensive Care Unit working
                with critically ill patients.
              </p>
              <p className="about-p">
                I am excited to have the opportunity to bring together my
                understanding of the human body and expertise in human movement
                with my passion for cycling. With BBF, I hope to help others
                experience the joy and freedom that two wheels can offer.
              </p>
              <h3 className="sign-off">
                Ben Besch, PT, DPT, ICE Certified Professional Bike Fitter
              </h3>
            </div>
            <img src={about} className="about-img" />
          </div>
        </body>
      </div>
    </>
  );
}
