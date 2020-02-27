import { useRef, useEffect } from "react";

export default value => {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
};
