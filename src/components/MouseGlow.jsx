import { useEffect, useRef } from 'react';

const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = -1000;
    let mouseY = -1000;
    let glowX = -1000;
    let glowY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let animationFrameId;
    const updateGlowPosition = () => {
      const lerpSpeed = 0.08; // Smooth trailing lag
      glowX += (mouseX - glowX) * lerpSpeed;
      glowY += (mouseY - glowY) * lerpSpeed;

      // Center the 450px blob by subtracting 225px
      glow.style.transform = `translate3d(${glowX - 225}px, ${glowY - 225}px, 0)`;

      animationFrameId = requestAnimationFrame(updateGlowPosition);
    };
    updateGlowPosition();

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18)_0%,rgba(124,58,237,0.12)_50%,rgba(236,72,153,0.04)_75%,transparent_100%)] blur-[70px] z-[1] hidden md:block"
      style={{ transform: 'translate3d(-1000px, -1000px, 0)', willChange: 'transform' }}
    />
  );
};

export default MouseGlow;
