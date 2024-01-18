// TeaCupHero.jsx

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TeaCupModel } from './cup'; // Create this component next

const SpinningTeaCup = () => {
  const teaCupRef = useRef();

  // Rotate the tea cup in the render loop
  useFrame(() => {
    teaCupRef.current.rotation.y += 0.01;
  });

  return (
    <TeaCupModel ref={teaCupRef} />
  );
};

const TeaCupHero = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SpinningTeaCup />
    </Canvas>
  );
};

export default TeaCupHero;
