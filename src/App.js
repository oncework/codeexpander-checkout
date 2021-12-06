import loadjs from "loadjs";
import { useEffect } from "react";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  useEffect(() => {
    loadjs("https://cdn.paddle.com/paddle/paddle.js", function () {
      window.Paddle.Setup({ vendor: 33404 });
    });
  }, []);

  return (
    <div className="App w-full">
      <div
        className="w-full h-16 flex justify-center items-center text-xl"
        style={{ backgroundColor: "#edf2f7", color: "#718096" }}
      >
        <img className="w-10" src={logo} alt="Codeexpander" />
        Codeexpander
      </div>
      <div className="my-16 flex justify-center items-center flex-wrap">
        <img className="w-40" src={logo} alt="Codeexpander" />
        <div className="mx-20" style={{ color: "#4a5568" }}>
          A cross-platform cloud synchronization development tool for developers
          that includes input enhancement, code snippet management, and
          Markdown.
        </div>
        <div className="mx-auto w-full my-4">Thank you for your support.</div>
        <div className="mx-auto my-10">
          <a
            href="#!"
            className="paddle_button bg-blue-500"
            data-product="540339"
          >
            Buy Now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
