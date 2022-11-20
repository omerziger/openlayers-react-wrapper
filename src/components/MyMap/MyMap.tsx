import { Map, View } from "ol";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./MyMap.module.css";
import { Coordinate } from "../../types/Map";
import BaseEvent from "ol/events/Event";

interface MyMapProps {
  view: { center: Coordinate; zoom: number };
  children: ReactNode;
}

interface OmerMap extends Map {
  scaleChangeEvent: BaseEvent;
}

export const MapContext = createContext<OmerMap | null>(null);

const MyMap: React.FC<MyMapProps> = (props) => {
  const { view, children } = props;
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<OmerMap | null>(null);

  useEffect(() => {
    const map = new Map({
      view: new View(view),
      layers: [],
      controls: [],
      overlays: [],
    }) as OmerMap;

    map.setTarget(mapRef.current as HTMLElement);

    setMap(map);

    return () => map.setTarget(undefined);
  }, [view]);

  return (
    <MapContext.Provider value={map}>
      <div ref={mapRef} className={styles.map}>
        {children}
      </div>
    </MapContext.Provider>
  );
};

export default MyMap;
