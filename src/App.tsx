import "./app.css";
import MyMap from "./components/MyMap/MyMap";
import { useId } from "react";

function App() {
  const mapId = useId();

  return (
    <div className="App">
      <MyMap id={mapId} view={{ center: [0, 0], zoom: 2 }} />
    </div>
  );
}

export default App;
