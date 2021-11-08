import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"></img>
        </header>
        <main>
          <Dictionary defaultkeyword="sunset" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            Coded by{" "}
            <a
              href="https://jackymadenfrost.com/"
              target="_blank"
              rel="noreferrer"
            >
              Jacky Madenfrost
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/jackymadenfrost/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>
            and hoted on{" "}
            <a
              href="https://dreamy-villani-6c93d3.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
