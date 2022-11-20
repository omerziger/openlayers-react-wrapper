import "./app.css";
import MyLayers from "./components/MyLayers/MyLayers";
import MyMap from "./components/MyMap/MyMap";
import MyTileLayer from "./components/MyTileLayer/MyTileLayer";
import OSM from "ol/source/OSM";
import MyControls from "./components/MyControls/MyControls";
import MyScaleControl from "./components/MyScaleControl/MyScaleControl";

function App() {
  return (
    <div className="App">
      <MyMap view={{ center: [0, 0], zoom: 2 }}>
        <MyLayers>
          <MyTileLayer source={new OSM()} zIndex={0} />
        </MyLayers>
        <MyControls>
          <MyScaleControl bar={true} minWidth={125} text={true} />
        </MyControls>
      </MyMap>
    </div>
  );
}

export default App;
