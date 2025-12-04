import React, { useEffect, useState } from "react";

const Counter = ({ to, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // Only start counting when start=true

    let startTime = null;
    const duration = 1500; // counting duration in ms

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * to), to);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [to, start]);

  return <>{count}</>;
};

export default Counter;
