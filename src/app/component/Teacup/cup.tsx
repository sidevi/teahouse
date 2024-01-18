// TeaCupModel.jsx

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three';

interface TeaCupModelProps {
  // You can define any additional props you need
}

const TeaCupModel: React.FC<TeaCupModelProps> = (props) => {
  const group = useRef();
  const { nodes } = useGLTF('/path/to/your/tea-cup-model.gltf') as GLTF;

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Tea_Cup} />
    </group>
  );
};

export { TeaCupModel };
