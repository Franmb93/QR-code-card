import qr from "./images/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="qrcard">
          <div className="image-container">
            <img src={qr} className="App-logo" alt="logo" />
          </div>
          <div className="text-container">
            <div className="title-container">
              <h2>Improve your front-ent skills by building projects</h2>
            </div>
            <div className="paragraph-container">
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus non rem excepturi nam assumenda voluptates!
              </h3>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
