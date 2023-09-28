import "./App.css";
import Typewriter from "./Typingtext.js";
function App() {
  return (
    <div className="container">
      <nav>
        <img src="favicon.ico" className="logo" alt="imaged" />
        <ul>
          <li>
            <a href="www.ziontutorial.com">Traval Guide</a>
          </li>
          <li>
            <a href="www.ziontutorial.com">Famous Places</a>
          </li>
          <li>
            <a href="www.ziontutorial.com">Contact Us</a>
          </li>
        </ul>
        <button className="btn">Contact me</button>
      </nav>
      <div className="content">
        {/* <Typewriter>Hello</Typewriter> */}
        <h1>
          Hello
          <br />I am Parv
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <form>
          <input type="text" placeholder="Country Name" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <p></p>
    </div>
  );
}

export default App;
