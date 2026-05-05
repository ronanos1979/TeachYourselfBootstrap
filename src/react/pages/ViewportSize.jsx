import { useEffect, useState } from 'react';

function getViewportSize() {
  return `${window.innerWidth}px x ${window.innerHeight}px`;
}

export default function ViewportSize() {
  const [size, setSize] = useState(() => getViewportSize());

  useEffect(() => {
    const updateSize = () => setSize(getViewportSize());

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <p className="viewport-size">
      Viewport size: <strong>{size}</strong>
    </p>
  );
}
