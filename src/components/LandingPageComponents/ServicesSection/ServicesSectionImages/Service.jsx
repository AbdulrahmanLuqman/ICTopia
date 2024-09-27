import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';

const Service = ({Icon:icon, servname, servdesc, durationTime }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`text-white transform transition-all duration-${durationTime}ms 
    ${isVisible ? `translate-x-0 opacity-100` : `translate-x-full opacity-0`} `}>
        <p className='text-5xl hover:text-black w-fit sm:mx-0 mx-auto'>{icon}</p>
        <h2 className='mt-5'>{servname}</h2>
        <p className='mt-4'>{servdesc}.</p>
    </div>
  )
}

export default Service;