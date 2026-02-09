import { useEffect, useRef, useState } from 'react';

/**
 * useScrollDirection
 * -------------------
 * Detects scroll direction (`up` or `down`) based on window scroll.
 *
 * ✔ Uses `useRef` instead of state for previous scroll position
 * ✔ Avoids unnecessary re-renders
 * ✔ Adds a threshold to prevent jitter
 *
 * ------------------------------------------------------
 * USAGE EXAMPLES
 * ------------------------------------------------------
 *
 * 1️⃣ Basic usage (most common)
 *
 * const scrollDirection = useScrollDirection();
 *
 * if (scrollDirection === 'down') {
 *   // hide header / navbar
 * }
 *
 * if (scrollDirection === 'up') {
 *   // show header / navbar
 * }
 *
 * ------------------------------------------------------
 *
 * 2️⃣ Hide / show navbar example
 *
 * const Navbar = () => {
 *   const scrollDirection = useScrollDirection();
 *
 *   return (
 *     <header
 *       className={
 *         scrollDirection === 'down'
 *           ? 'translate-y-[-100%]'
 *           : 'translate-y-0'
 *       }
 *     >
 *       Navbar
 *     </header>
 *   );
 * };
 *
 * ------------------------------------------------------
 *
 * 3️⃣ Animate based on scroll direction
 *
 * const scrollDirection = useScrollDirection();
 *
 * useEffect(() => {
 *   if (scrollDirection === 'down') {
 *     animateOut();
 *   } else if (scrollDirection === 'up') {
 *     animateIn();
 *   }
 * }, [scrollDirection]);
 */

type ScrollDirection = 'up' | 'down';

const SCROLL_THRESHOLD = 10; // Ignore tiny scroll movements

const useScrollDirection = (): ScrollDirection | null => {
  const [direction, setDirection] = useState<ScrollDirection | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // Ignore small scroll changes to prevent flickering
      if (Math.abs(diff) < SCROLL_THRESHOLD) return;

      setDirection(diff > 0 ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    // Passive listener improves scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return direction;
};

export default useScrollDirection;
