import logo from '../public/logo.png'
import './App.css'

function App() {

  return (
    <>
    <header>
      <img src={logo} className="logo" alt="logo" />
      <button className="nav-btn">Home</button>
      <button className="nav-btn">Why Bike Fit?</button>
      <button className="nav-btn">Request Appointment</button>
      <button className="nav-btn">Contact Us</button>
    </header>
    <body className="body">
      <div className="hero">
        <div className="motto">
          <h1 className= "lineOne">The trails are calling,</h1> 
          <h1 className="lineTwo">Be ready for them.</h1>
          <button className="schedule-btn">Schedule Now!</button>
        </div>
        <div className="hero-img"></div>
      </div>
    </body>
    </>
  )
}

export default App
