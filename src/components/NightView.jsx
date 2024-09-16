import React from 'react';
import { useGLTF } from '@react-three/drei';

const NightView = (props) => {
  const { nodes, materials } = useGLTF('/models/NightView.glb'); // Update the path to your model if necessary

  return (
    <group {...props} dispose={null}>
      <group position={[-0.017, 0, -0.01]} rotation={[-0.071, 0, -1.276]}>
        <group position={[-1.221, -1.227, -0.2]}>
          {/* Apply emissive glow based on original material */}
          
          {/* Mesh 1 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.defaultMat}
            material-emissive={materials.defaultMat.color} // Glow based on original texture color
            material-emissiveIntensity={0.0} // Adjust glow intensity
          />
          
          {/* Mesh 2 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.defaultMat_0}
            material-emissive={materials.defaultMat_0.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 3 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.defaultMat_1}
            material-emissive={materials.defaultMat_1.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 4 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.defaultMat_2}
            material-emissive={materials.defaultMat_2.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 5 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.defaultMat_3}
            material-emissive={materials.defaultMat_3.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 6 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.defaultMat_4}
            material-emissive={materials.defaultMat_4.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 7 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.defaultMat_5}
            material-emissive={materials.defaultMat_5.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 8 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.defaultMat_6}
            material-emissive={materials.defaultMat_6.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 9 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.defaultMat_7}
            material-emissive={materials.defaultMat_7.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 10 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.defaultMat_8}
            material-emissive={materials.defaultMat_8.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 11 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.defaultMat_8}
            material-emissive={materials.defaultMat_8.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 12 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials.defaultMat_9}
            material-emissive={materials.defaultMat_9.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 13 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_27.geometry}
            material={materials.defaultMat_10}
            material-emissive={materials.defaultMat_10.color}
            material-emissiveIntensity={0.8}
          />
          
          {/* Mesh 14 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials.defaultMat_11}
            material-emissive={materials.defaultMat_11.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 15 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_31.geometry}
            material={materials.defaultMat_12}
            material-emissive={materials.defaultMat_12.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 16 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.defaultMat_13}
            material-emissive={materials.defaultMat_13.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 17 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_35.geometry}
            material={materials.defaultMat_14}
            material-emissive={materials.defaultMat_14.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 18 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_37.geometry}
            material={materials.defaultMat_15}
            material-emissive={materials.defaultMat_15.color}
            material-emissiveIntensity={0.0}
          />
          
          {/* Mesh 19 */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39.geometry}
            material={materials.defaultMat_16}
            material-emissive={materials.defaultMat_16.color}
            material-emissiveIntensity={0.0}
          />
          
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/NightView.glb'); // Preload the model for optimization
export default NightView;
