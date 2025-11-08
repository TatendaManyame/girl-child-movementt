import React, { useState, useEffect, useRef } from 'react';
import { FaChartLine, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * (end - start) + start);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end, duration, start]);

  return [count, ref];
};

const Impact = () => {
  const [schoolAttendance, schoolRef] = useCountUp(75);
  const [girlsReached, girlsRef] = useCountUp(5000);
  const [workshops, workshopsRef] = useCountUp(300);

  const impacts = [
    {
      icon: <FaChartLine />,
      value: `${schoolAttendance}%`,
      description: "Increase in school attendance",
      ref: schoolRef
    },
    {
      icon: <FaUsers />,
      value: `${girlsReached.toLocaleString()}+`,
      description: "Girls to be reached and supported",
      ref: girlsRef
    },
    {
      icon: <FaChalkboardTeacher />,
      value: `${workshops}+`,
      description: "Workshops on hygiene and empowerment",
      ref: workshopsRef
    }
  ];

  return (
    <section id="impact" className="section impact-section">
      <div className="container">
        <div className="impact-header">
          <h2 className="section-title">Our Impact</h2>
          <p className="impact-subtitle">Making a measurable difference in the lives of Zimbabwean girls</p>
        </div>
        
        <div className="impact-stats">
          {impacts.map((impact, index) => (
            <div key={index} className="impact-card" ref={impact.ref}>
              <div className="impact-card-inner">
                <div className="impact-icon-wrapper">
                  <div className="impact-icon">
                    {impact.icon}
                  </div>
                  <div className="icon-pulse"></div>
                </div>

                <div className="impact-value" data-value={impact.value.replace('+', '').replace('%', '')}>
                  {impact.value}
                </div>

                <div className="impact-description">{impact.description}</div>

                <div className="impact-bar">
                  <div 
                    className="impact-progress" 
                    style={{ 
                      width: '0%',
                      animationDelay: `${index * 0.3}s`
                    }}
                  ></div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Impact;
