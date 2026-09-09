import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

// The glowing data core
const DataCore = () => {
  const meshRef = useRef();

  // Rotate slowly over time
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={meshRef}>
      {/* Inner glowing sphere (the "Core") */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" toneMapped={false} />
      </mesh>

      {/* Outer frosted glass shell (Icosahedron) */}
      <mesh>
        <icosahedronGeometry args={[1.2, 0]} />
        {/* Premium physical glass material */}
        <meshPhysicalMaterial 
          transmission={1} 
          opacity={1}
          metalness={0.1}
          roughness={0.1}
          ior={1.5} 
          thickness={0.5} 
          color="#ffffff"
          emissive="#2563eb"
          emissiveIntensity={0.2}
        />
        {/* Wireframe overlay to make it look "techy" */}
        <mesh>
          <icosahedronGeometry args={[1.201, 0]} />
          <meshBasicMaterial color="#ffffff" wireframe={true} transparent opacity={0.1} />
        </mesh>
      </mesh>
    </group>
  );
};

// Main 3D Canvas Component
const Hero3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0" style={{ pointerEvents: 'auto', cursor: 'grab' }} onMouseDown={(e) => e.target.style.cursor = 'grabbing'} onMouseUp={(e) => e.target.style.cursor = 'grab'}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        <PresentationControls 
          global 
          config={{ mass: 2, tension: 500 }} 
          snap={{ mass: 4, tension: 1500 }} 
          rotation={[0, 0.3, 0]} 
          polar={[-Math.PI / 3, Math.PI / 3]} 
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <DataCore />
          </Float>
        </PresentationControls>

        <Environment preset="city" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#000000" />
      </Canvas>
    </div>
  );
};

export default Hero3D;
