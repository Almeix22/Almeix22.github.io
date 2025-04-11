import { useEffect } from "react";

export default function Observer(){
    useEffect(() => {
        const ratio = .1;
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: ratio
        };
    
        const handleIntersect = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > ratio) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersect, options);
    
        document.querySelectorAll('[class*="reveal-"]').forEach(r => {
          observer.observe(r);
        });
    
        return () => {
          document.querySelectorAll('[class*="reveal-"]').forEach(r => {
            observer.unobserve(r);
          });
        };
      }, []);
}