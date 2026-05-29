import { useState, useEffect } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR safety, though this is likely a client-side app)
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia('(max-width: 767px)');
    
    // Set initial value
    setIsMobile(mql.matches);
    
    // Create event listener
    const onChange = (e) => setIsMobile(e.matches);
    
    // Add event listener
    // Note: addEventListener is preferred, but for older browsers addListener might be needed
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange);
    } else {
      mql.addListener(onChange);
    }
    
    // Cleanup
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, []);

  return isMobile;
}
