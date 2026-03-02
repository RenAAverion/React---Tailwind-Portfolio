import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  animation = "slide-up",
  delay = 0,
  repeat = false,
  className = "",
  as: Component = "div"
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("active");
          if (!repeat) observer.unobserve(element);
        } else {
          if (repeat) element.classList.remove("active");
        }
      },
      { threshold: 0.15 }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [repeat]);

  return (
    <Component
      ref={ref}
      className={`reveal ${animation} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}