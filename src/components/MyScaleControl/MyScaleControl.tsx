import { useContext, useEffect } from "react";
import { MapContext } from "../MyMap/MyMap";
import ScaleLine from "ol/control/ScaleLine";

type Props = {
  bar?: boolean;
  text?: boolean;
  minWidth?: number;
};

export default function MyScaleControl(props: Props) {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    const scaleLine = new ScaleLine(props);
    const units = scaleLine.getUnits();
    map?.addControl(scaleLine);

    return () => {
      if (map) map.removeControl(scaleLine);
    };
  }, [map, props]);

  return null;
}
