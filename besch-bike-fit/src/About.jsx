/* eslint-disable react/no-unescaped-entities */
import finishline from "./assets/finishline.jpg";

export function About() {
  return (
    <>
      <div className="background-img">
        <body className="body about">
          <h1>About Me</h1>
          <img src={finishline} style={{height:"600px"}}/>
          <p>
            Growing up, my bicycle was my firrst ticket to freedom. From riding
            around town with friends to racing dirt track BMX, you could always
            find me on two wheels. Cycling evolved to serve a more ultiltarian
            purpose when I moved to Chicago to atteend Northwestern's Feinberg
            School of Medicine to obtain my Doctorate in Physical Therapy.
            During this time of my life I put countless miles on my single speed
            commuter. Upon returning home to Minnesota, I returned to cycling
            for the pure joy of the sport when I discovered mountain biking.
            Since then I have found myself becoming more and more fascinated
            with all aspects of cycling and have competed in gravel racing and
            criterium racing.
          </p>
          <p>
            As a Physical Therapist i have spent a majority of my career working
            in the Emergency Department at two different University Hospitals in
            major metropolitain areas. In this setting I assess and treat acute
            musculoskeletal injuries and vestibular impairments. When I'm not in
            the Emergency Department I also spend a large amount of time in the
            Intensive Care Unit working with critically ill patients.
          </p>
          <p>
            I am excited to have the opportunity to bring together my
            understanding of the human body and expertise in human movement with
            my passion for cycling. With BBF, I hope to help others experience
            the joy and freedom that two wheels can offer.
          </p>
          <h3>Ben Besch, PT, DPT</h3>
        </body>
      </div>
    </>
  );
}
