import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import NightView from '../components/NightView';
import CanvasLoader from '../components/CanvasLoader';
import { Leva, useControls } from 'leva';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Hero = () => {
  // Leva for interactive controls (Optional)
  const x = useControls('NightView', {
    rotationX: { value: 0, min: -Math.PI, max: Math.PI },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI },
    scale: { value: 5, min: 0.1, max: 10 },
  });

  return (
    <section className="top-10 min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Aniket <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products &amp; Brands</p>
      </div>
      <div className="w-full top-40 h-full absolute inset-0">
        <Canvas className="w-full h-full" antialias>
          {/* Camera setup */}
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          {/* Lighting */}
          <ambientLight intensity={1} color="#FFFFFF" />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls />

          {/* Model */}
          <Suspense fallback={<CanvasLoader />}>
            <NightView
              position={[0, -5, 0]}
              rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              scale={[x.scale, x.scale, x.scale]}
            />
          </Suspense>

          {/* Postprocessing for Bloom effect */}
          <EffectComposer>
            <Bloom
              intensity={0.8} // Reduced bloom intensity
              luminanceThreshold={0.4} // Apply bloom to even fewer bright parts
              luminanceSmoothing={0.9} // Smooth transition
              kernelSize={2} // Smaller bloom kernel for a softer effect
            />
          </EffectComposer>
        </Canvas>

        <Leva />
      </div>
    </section>
  );
};

export default Hero;
