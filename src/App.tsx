import "./app.css";
import Layers from "./components/Layers/Layers";
import Map from "./components/Map/Map";
import TileLayer from "./components/TileLayer/TileLayer";
import OSM from "ol/source/OSM";
import Controls from "./components/Controls/Controls";
import ScaleLine from "./components/ScaleLine/ScaleLine";

function App() {
  return (
    <div className="App">
      <Map viewOptions={{ center: [0, 0], zoom: 2 }}>
        <Layers>
          <TileLayer source={new OSM()} zIndex={0} />
        </Layers>
        <Controls>
          <ScaleLine bar={true} minWidth={125} text={true} />
        </Controls>
      </Map>
    </div>
  );
}

export default App;
