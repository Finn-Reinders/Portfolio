import React from "react";
import { Float } from "@react-three/drei";

function normalizeVec3(value, fallback = [0, 0, 0]) {
  if (Array.isArray(value) && value.length === 3) return value;
  return fallback;
}

function normalizeBoxSize(size, fallback = [1, 1, 1]) {
  if (Array.isArray(size)) {
    if (size.length === 3) return size;
    if (size.length === 1 && typeof size[0] === "number") return [size[0], size[0], size[0]];
  }
  if (typeof size === "number") return [size, size, size];
  return fallback;
}

function Box({ color = "#ffffff", position = [0, 0, 0], size = 1 }) {
  const meshPosition = normalizeVec3(position);
  const boxSize = normalizeBoxSize(size);
  return (
    <Float floatingRange={0.1} floatIntensity={2} rotationIntensity={2}>
      <mesh position={meshPosition}>
        <boxGeometry args={boxSize} />
        <meshPhysicalMaterial ior={1} roughness={0.3} color={color} />
      </mesh>
    </Float>
  );
}

function Torus({
  color = "#ffffff",
  position = [0, 0, 0],
  radius = 0.7,
  tube = 0.2,
  radialSegments = 16,
  tubularSegments = 64,
  arc = Math.PI * 2,
}) {
  const meshPosition = normalizeVec3(position);
  return (
    <Float floatingRange={0.1} floatIntensity={2} rotationIntensity={2}>
      <mesh position={meshPosition}>
        <torusGeometry args={[radius, tube, radialSegments, tubularSegments, arc]} />
        <meshPhysicalMaterial ior={1.4} roughness={0} color={color} />
      </mesh>
    </Float>
  );
}

function Cone({
  color = "#ffffff",
  position = [0, 0, 0],
  radius = 0.7,
  height = 1.2,
  radialSegments = 32,
}) {
  const meshPosition = normalizeVec3(position);
  return (
    <Float floatingRange={0.1} floatIntensity={2} rotationIntensity={2}>
      <mesh position={meshPosition}>
        <coneGeometry args={[radius, height, radialSegments]} />
        <meshPhysicalMaterial ior={1.4} roughness={0} color={color} />
      </mesh>
    </Float>
  );
}

function Dodecahedron({ color = "#ffffff", position = [0, 0, 0], radius = 0.8, detail = 0 }) {
  const meshPosition = normalizeVec3(position);
  return (
    <Float floatingRange={0.1} floatIntensity={2} rotationIntensity={2}>
      <mesh position={meshPosition}>
        <dodecahedronGeometry args={[radius, detail]} />
        <meshPhysicalMaterial ior={1.4} roughness={0} color={color} />
      </mesh>
    </Float>
  );
}

export { Box, Cone, Dodecahedron, Torus };