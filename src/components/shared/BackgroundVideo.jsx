import { useEffect, useRef, useState } from 'react';

export default function BackgroundVideo({ src, title }) {
  const container = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let interacted = false;
    let visible = false;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPlaying(interacted && visible && !document.hidden && !motion.matches);
    const activate = () => { interacted = true; update(); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(container.current);
    window.addEventListener('pointerdown', activate, { once: true, passive: true });
    window.addEventListener('keydown', activate, { once: true });
    document.addEventListener('visibilitychange', update);
    motion.addEventListener('change', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('pointerdown', activate);
      window.removeEventListener('keydown', activate);
      document.removeEventListener('visibilitychange', update);
      motion.removeEventListener('change', update);
    };
  }, []);

  return (
    <div ref={container} className="section-video absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
      {playing && <iframe src={src} title={title} allow="autoplay" tabIndex={-1} className="pointer-events-none border-none" />}
    </div>
  );
}
