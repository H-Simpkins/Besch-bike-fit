import "./services.css";

export function Services() {
  return (
    <>
      <div className="background-img">
        <body className="body">
          <p className="service-description">
            All fit services are deesigned to be mobile and performed in your
            home or training location. No travel charge is applied within 20
            miles of downtown St. Paul and a $1 per mile fee is added for travel
            beyond this 20 mile radius.
          </p>
          <h2 className="service-title">Bike Services</h2>
          <h3 className="service-subtitle">Peloton/Stationary Trainer Fit: $125</h3>
          <p className="service-description">
            Designed for optimization of home trainer set-up to ensure pain-free
            miles year round
          </p>
          <h3 className="service-subtitle">Entry Level Bike Fit: $100</h3>
          <p className="service-description">
            Ideal service for those riding bikes with flat pedals who are hoping
            to increase comfort and performance for leisurely rides, commutes,
            etc.
          </p>
          <h3 className="service-subtitle">Basic Bike Fit: $200</h3>
          <p className="service-description">
            Full mobility asssessment andd bike fit to help you advance to the
            next level wheter your goal is performance, endurance, or comfort.
            Expect this to take at least 90 minutes to perform.
          </p>
          <h3 className="service-subtitle">Advanced Bike Fit: $300</h3>
          <p className="service-description"> 
            This service is for experienced cyclists who are currently
            struggling with any pain or discomfort while cycling. In addition to
            fitting, this service inculdes recommendations and guidance
            regarding any bike modifications which will enhance your experience
            as a cyclist. Expect this service to take at least 2 hours to
            perform.
          </p>
        </body>
      </div>
    </>
  );
}
