import { Canvas } from '@react-three/fiber';
import HackerRoom from '../components/HackerRoom.tsx';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.tsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target.tsx';
import ReactLogo from '../components/ReactLogo.tsx';
import Cube from '../components/Cube.tsx';
import Rings from '../components/Rings.tsx';
import HeroCamera from '../components/HeroCamera.tsx';
import { PerspectiveCamera } from '@react-three/drei';
import Button from '../components/Button.tsx';

export default function Hero() {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Dr Prime <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag">Building Products & Brands</p>
      </div>
      <div className="size-full absolute inset-0">
        <Canvas className="size-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 inset-x-0 w-full c-space z-10">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          ></Button>
        </a>
      </div>
    </section>
  );
}
