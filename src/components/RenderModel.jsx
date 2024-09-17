"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={true}  // Enable shadows for sunlight
      dpr={[1, 2]}    // Device pixel ratio for sharpness
  
    >
      {/* Add the directional light acting as sunlight */}
      <directionalLight
        position={[10, 20, 10]}  // Adjust position closer to the scene
        intensity={1.5}          // Lower the intensity for a more natural look
        color={"#FFFF00"}        // Soft yellow color for sunlight
        castShadow               // Enable shadows for this light
        shadow-mapSize-width={2048}  // Higher resolution shadows
        shadow-mapSize-height={2048}
        shadow-camera-far={50}   // Adjust far for large scenes
        shadow-camera-left={-15} // Widen the shadow area
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />

      {/* Add ambient light for soft general illumination */}
      <ambientLight intensity={0.4} />

      {/* Suspense loader for async model loading */}
      <Suspense fallback={<CanvasLoader />}>
        {children}
      </Suspense>

      {/* Environment lighting for global light and reflections */}
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
