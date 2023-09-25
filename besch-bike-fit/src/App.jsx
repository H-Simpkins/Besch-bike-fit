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
    <div className="motto">
        <h1 className= "lineOne">The trails are calling,</h1> 
        <h1 className="lineTwo">Be ready for them.</h1>
    </div>
    <div>
      <button className="schedule-btn">Schedule Now!</button>
    </div>

    </>
  )
}

export default App
