"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Floating wireframe icosahedra ─────────────────────────────────── */
function FloatingGeo({
  position,
  speed,
  scale,
}: {
  position: [number, number, number];
  speed: [number, number];
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    ref.current.rotation.x += dt * speed[0];
    ref.current.rotation.y += dt * speed[1];
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#C8A96E" wireframe transparent opacity={0.09} />
    </mesh>
  );
}

/* ─── Particle cloud ────────────────────────────────────────────────── */
function Particles({ count = 180 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.007;
    ref.current.rotation.x += dt * 0.003;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#C8A96E"
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Neural-network lines between nearby particles ─────────────────── */
function LineNetwork({ count = 70 }: { count?: number }) {
  const ref = useRef<THREE.LineSegments>(null!);

  const linePositions = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      pts.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
      ]);
    }

    const threshold = 3.8;
    const buf: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i][0] - pts[j][0];
        const dy = pts[i][1] - pts[j][1];
        const dz = pts[i][2] - pts[j][2];
        if (dx * dx + dy * dy + dz * dz < threshold * threshold) {
          buf.push(...pts[i], ...pts[j]);
        }
      }
    }
    return new Float32Array(buf);
  }, [count]);

  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.007;
    ref.current.rotation.x += dt * 0.003;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[linePositions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#C8A96E" transparent opacity={0.1} />
    </lineSegments>
  );
}

/* ─── Full scene ────────────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <Particles count={180} />
      <LineNetwork count={70} />
      <FloatingGeo position={[4.5, 1.5, -4]} speed={[0.04, 0.06]} scale={2} />
      <FloatingGeo position={[-5.5, -1.5, -6]} speed={[0.06, 0.03]} scale={2.8} />
      <FloatingGeo position={[0.5, 3.5, -12]} speed={[0.02, 0.05]} scale={5} />
    </>
  );
}

/* ─── Export ────────────────────────────────────────────────────────── */
export default function HeroBackground3D() {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 10], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      }}
      frameloop="always"
    >
      <Scene />
    </Canvas>
  );
}
