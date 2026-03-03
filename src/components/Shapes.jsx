import { Float, useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

// Preload textures to avoid blocking
export const preloadTextures = (urls) => {
  urls.forEach((url) => useTexture.preload(url));
};

export default function Plane({ size = [1, 1], pos = [0, 0, 0], texture, intensity = 1, speed = 1, rotationIntensity = 1 }) {
  const tex = useTexture(texture);
  const meshRef = useRef();

  // small random phase so each plane moves differently
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  // Determine texture aspect safely (use a fallback if image isn't loaded yet)
  const texAspect = tex && tex.image && tex.image.width && tex.image.height
    ? tex.image.width / tex.image.height
    : size[0] / size[1];

  // Use the provided width (size[0]) and compute height to preserve texture aspect
  const width = size[0];
  const height = width / texAspect;

  // apply a small per-frame offset on top of Drei's Float so motion patterns differ
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.position.y = pos[1] + Math.sin(t * speed + phase) * (intensity * 0.12);
    meshRef.current.rotation.z = Math.sin(t * speed * 0.7 + phase) * (rotationIntensity * 0.12);
  });

  return (
    <Float speed={speed} floatIntensity={Math.max(0.001, intensity * 0.6)} rotationIntensity={Math.max(0.01, rotationIntensity * 0.18)}>
      <mesh ref={meshRef} position={pos}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial map={tex} transparent />
      </mesh>
    </Float>
  );
}
