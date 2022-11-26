import { Map as OLMap, View } from "ol";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Map.module.css";
import { Coordinate } from "../../types/Map";

interface MapProps {
  view: { center: Coordinate; zoom: number };
  children: ReactNode;
}

export const MapContext = createContext<OLMap | null>(null);

const Map: React.FC<MapProps> = (props) => {
  const { view, children } = props;
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<OLMap | null>(null);

  useEffect(() => {
    const map = new OLMap({
      view: new View(view),
      layers: [],
      controls: [],
      overlays: [],
    }) as OLMap;

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

export default Map