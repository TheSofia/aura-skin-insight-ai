
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const FloatingLogo3D: React.FC = () => {
  const logoRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (logoRef.current) {
      // Subtle rotation and floating motion
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      logoRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.02;
    }
    
    if (materialRef.current) {
      // Dynamic material properties for futuristic feel
      materialRef.current.thickness = 0.5 + Math.sin(state.clock.elapsedTime) * 0.1;
      materialRef.current.roughness = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={logoRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Text3D
          font="/fonts/IBMPlexMono_Regular.json"
          size={0.8}
          height={0.15}
          curveSegments={12}
          position={[-2.5, 0, 0]}
        >
          DERMO.AGENT
          <MeshTransmissionMaterial
            ref={materialRef}
            backside
            samples={16}
            resolution={512}
            transmission={0.85}
            roughness={0.15}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.04}
            anisotropy={0.2}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            color="#A93226"
            opacity={0.9}
          />
        </Text3D>
      </Float>
      
      {/* Subtle ambient lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#2C3E73" intensity={0.3} />
    </group>
  );
};

interface Enhanced3DLogoProps {
  isVisible: boolean;
}

const Enhanced3DLogo: React.FC<Enhanced3DLogoProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ 
          background: 'transparent',
          opacity: isVisible ? 0.8 : 0,
          transition: 'opacity 2s ease-out'
        }}
      >
        <Environment preset="studio" />
        <FloatingLogo3D />
      </Canvas>
    </div>
  );
};

export default Enhanced3DLogo;
