import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <section className="min-h-screen min-w-fit bg-black overflow-x-hidden ">
        <Navbar />
      </section>
    </div>
  );
}

export default App;
