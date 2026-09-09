import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Starfield = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Slow continuous deep space rotation
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 35;

    // Subtle 3D parallax tilt tracking the user's mouse
    const targetX = state.pointer.y * 0.15;
    const targetY = state.pointer.x * 0.15;
    
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
  });

  return (
    <group ref={ref}>
      {/* Reduced star count from 6000 to 1500 for massive performance boost */}
      <Stars radius={100} depth={50} count={1500} factor={4} saturation={0.5} fade speed={1.5} />
    </group>
  );
};

const GalaxyBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.8 }}>
      {/* Limit device pixel ratio to max 1.5 to prevent massive lag on high-res displays */}
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <Starfield />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;
