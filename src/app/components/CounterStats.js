'use client';
import { useEffect, useRef, useState } from 'react';

export default function CounterStats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { end: 5, suffix: '+', label: 'Years Experience', duration: 2000 },
    { end: 1000, suffix: '+', label: 'Happy Patients', duration: 2500 },
    { end: 100, suffix: '%', label: 'Satisfaction', duration: 2000 },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-number">
              {visible ? (
                <AnimatedNumber end={stat.end} duration={stat.duration} />
              ) : (
                '0'
              )}
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ end, duration }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let startTime = null;
    let frame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * end));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return <>{current}</>;
}
