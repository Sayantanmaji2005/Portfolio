import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = -100;
    let mouseY = -100;
    let outlineX = -100;
    let outlineY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly position the inner pointer dot using translate3d
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    // Smooth physics follower loop for outer ring
    let animationFrameId;
    const updateOutlinePosition = () => {
      const lerpSpeed = 0.16; // Easing coefficient
      outlineX += (mouseX - outlineX) * lerpSpeed;
      outlineY += (mouseY - outlineY) * lerpSpeed;

      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;

      animationFrameId = requestAnimationFrame(updateOutlinePosition);
    };
    updateOutlinePosition();

    // Hover state observer
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.btn-premium') ||
        target.closest('.btn-premium-secondary') ||
        target.closest('.btn-premium-accent');

      if (isClickable) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] hidden md:block">
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
};

export default CustomCursor;
