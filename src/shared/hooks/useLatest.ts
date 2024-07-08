import { useLayoutEffect, useRef } from "react";

export function useLatest <T>(value: T): React.MutableRefObject<T> {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}