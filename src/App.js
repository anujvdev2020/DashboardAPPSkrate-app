import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="sideNav">
        <div className="navItem">
          <img src="./assets/home.png" style={{ margin: "20px" }} />
          <h3 style={{ margin: "20px" }}>Home</h3>
        </div>
        <div className="navItem">
          <img style={{ margin: "20px" }} src="./assets/shuffle.png" />
          <h3 style={{ margin: "20px" }}>Shuffle</h3>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="left-content">
          <div>
            <h2>Overview</h2>
            <div>
              <img className="blueImg" src="./assets/two2.png" />
            </div>
          </div>
          <div>
            <h2>Sesions</h2>
            <div>
              <img className="blueImg" src="./assets/two2.png" />
            </div>
          </div>
        </div>
        <div className="right-content">
          <div>
            <h2>New Jobs</h2>
            <div>
              <img className="blueImg" src="./assets/two2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
