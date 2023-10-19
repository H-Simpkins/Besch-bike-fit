export function Home() {
  return (
    <div className="background-img">
      <body className="body">
        <div className="hero">
          <div className="motto">
            <h1 className="lineOne">The trails are calling,</h1>
            <h1 className="lineTwo">Be ready for them.</h1>
            <button className="schedule-btn">Schedule Now!</button>
          </div>
          <div className="hero-img-container">
            <img
              className="hero-img"
              src="https://images.unsplash.com/photo-1613444129079-b7862af832ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            />
          </div>
        </div>
      </body>
    </div>
  );
}
