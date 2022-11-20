import { useContext, useEffect } from "react";
import TileLayer from "ol/layer/Tile";
import TileSource from "ol/source/Tile";
import { MapContext } from "../MyMap/MyMap";

type Props = {
  source: TileSource;
  zIndex: number;
};

export default function MyTileLayer(props: Props) {
  const { source, zIndex } = props;
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    const tileLayer = new TileLayer({ source });
    tileLayer.setZIndex(zIndex);
    map.addLayer(tileLayer);

    return () => {
      if (map) map.removeLayer(tileLayer);
    };
  }, [map, source, zIndex]);

  return null;
}
