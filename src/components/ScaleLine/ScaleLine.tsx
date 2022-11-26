import { useContext, useEffect } from "react";
import { MapContext } from "../Map/Map";
import OLScaleLine, { Units } from "ol/control/ScaleLine";
import { ListenerFunction } from "ol/events";

type Props = {
  className?: string;
  minWidth?: number;
  maxWidth?: number;
  render?: () => unknown;
  target?: HTMLElement | string;
  units?: Units;
  bar?: boolean;
  steps?: number;
  text?: boolean;
  dpi?: number;
  onChange?: ListenerFunction;
  onUnitsChange?:ListenerFunction;
  onError?:ListenerFunction;
  onPropertyChange?:ListenerFunction;
};

export default function ScaleLine(props: Props) {
  const { onChange, onUnitsChange, onError, onPropertyChange, ...scaleOptions } = props;
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    const scaleLine = new OLScaleLine(scaleOptions);

    onChange && scaleLine.on("change", onChange);
    onUnitsChange && scaleLine.on("change:units", onUnitsChange);
    onError && scaleLine.on("error", onError);
    onPropertyChange && scaleLine.on("propertychange", onPropertyChange);

    map?.addControl(scaleLine);

    return () => {
      onChange && scaleLine.removeEventListener("change", onChange)
      onUnitsChange && scaleLine.removeEventListener("change:units", onUnitsChange);
      onError && scaleLine.removeEventListener("error", onError);
      onPropertyChange && scaleLine.removeEventListener("propertychange", onPropertyChange);

      map?.removeControl(scaleLine);
    };
  }, [map, onChange, onError, onPropertyChange, onUnitsChange, scaleOptions]);

  return null;
}
