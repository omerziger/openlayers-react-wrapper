import { useContext, useEffect } from "react";
import OLTileLayer from "ol/layer/Tile";
import TileSource from "ol/source/Tile";
import { MapContext } from "../Map/Map";

type Props = {
  source: TileSource;
  zIndex: number;
};

export default function TileLayer(props: Props) {
  const { source, zIndex } = props;
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    const tileLayer = new OLTileLayer({ source });
    tileLayer.setZIndex(zIndex);
    map.addLayer(tileLayer);

    return () => {
      if (map) map.removeLayer(tileLayer);
    };
  }, [map, source, zIndex]);

  return null;
}
