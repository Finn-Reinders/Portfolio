import Plane from "./Shapes.jsx";

export default function ThreeScene({ textureUrls }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      
      {/* Mountains */}
      <Plane intensity={1} speed={0.6} rotationIntensity={0.3} pos={[2, -1, 2]} size={[2.5]} texture={textureUrls[0]} />
      {/* Grass Plane */}
      <Plane intensity={1.0} speed={1.0} rotationIntensity={0.7} pos={[-2.5, -2, -1]} size={[5]} texture={textureUrls[1]} />
      {/* Bus Plane */}
      <Plane intensity={0.9} speed={1.0} rotationIntensity={0.4} pos={[0, 0, 1.7]} size={[4]} texture={textureUrls[2]} />
      {/* City Plane */}
      <Plane intensity={0.9} speed={0.9} rotationIntensity={0.5} pos={[-3, 1.5, 1]} size={[3]} texture={textureUrls[3]} />
      {/* Interstellar Plane */}
      <Plane intensity={0.8} speed={0.9} rotationIntensity={0.35} pos={[2, 1, 1]} size={[4]} texture={textureUrls[4]} />
    </>
  );
}
