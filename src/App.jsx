import { useState } from "react";
import HomePage from "./HomePage.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
