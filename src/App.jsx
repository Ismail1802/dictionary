import { Header, Main } from "./components";
import { useState } from "react";

import "./styles/App.css";
function App() {
  const [mode, setMode] = useState(true);

  const [fontText, setFontText] = useState("Sans Serif");
  return (
    <div
      style={{
        fontFamily:
          `${fontText}` === "Sans Serif"
            ? "Inter, sans-serif"
            : "Serif" === `${fontText}`
            ? "serif"
            : "monospace",
      }}
      data-theme={mode ? "light" : "dark"}
      className="app"
    >
      <Header
        fontText={fontText}
        setFontText={setFontText}
        mode={mode}
        setMode={setMode}
      />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
