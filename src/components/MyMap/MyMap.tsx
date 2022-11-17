import OSM from "ol/source/OSM";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { useEffect } from "react";
import styles from "./MyMap.module.css";
import { Coordinate } from "../../types/Map";

interface MyMapProps {
  id: string;
  view: { center: Coordinate; zoom: number };
}

const MyMap: React.FC<MyMapProps> = (props) => {
  const { id, view } = props;

  useEffect(() => {
    new Map({
      view: new View(view),
      layers: [new TileLayer({ source: new OSM() })],
      target: id,
    });
  }, [id, view]);

  return <div id={id} className={styles.map} />;
};

export default MyMap;
