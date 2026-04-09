"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth || window.innerWidth;
    const h = mount.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    Object.assign(renderer.domElement.style, {
      position: "absolute",
      top: "0", left: "0",
      width: "100%", height: "100%",
      pointerEvents: "none",
    });
    mount.appendChild(renderer.domElement);

    /* ── Particle cloud ─────────────────────────────────────── */
    const pCount = 180;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 24;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xC8A96E,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    /* ── Neural-network lines ───────────────────────────────── */
    const nCount = 70;
    const nodes: THREE.Vector3[] = Array.from({ length: nCount }, () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
      )
    );
    const lineBuf: number[] = [];
    const thr = 3.8;
    for (let i = 0; i < nCount; i++) {
      for (let j = i + 1; j < nCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < thr) {
          lineBuf.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lineBuf.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(lineBuf), 3));
    const lMat = new THREE.LineBasicMaterial({ color: 0xC8A96E, transparent: true, opacity: 0.1 });
    const networkLines = new THREE.LineSegments(lGeo, lMat);
    scene.add(networkLines);

    /* ── Floating wireframe icosahedra ──────────────────────── */
    type SDef = { pos: [number, number, number]; scale: number; speed: [number, number] };
    const shapeDefs: SDef[] = [
      { pos: [4.5, 1.5, -4],   scale: 2,   speed: [0.04, 0.06] },
      { pos: [-5.5, -1.5, -6], scale: 2.8, speed: [0.06, 0.03] },
      { pos: [0.5, 3.5, -12],  scale: 5,   speed: [0.02, 0.05] },
    ];
    const meshes = shapeDefs.map(({ pos, scale, speed }) => {
      const geo = new THREE.IcosahedronGeometry(1, 1);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xC8A96E,
        wireframe: true,
        transparent: true,
        opacity: 0.09,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...pos);
      mesh.scale.setScalar(scale);
      mesh.userData.speed = speed;
      scene.add(mesh);
      return mesh;
    });

    /* ── Resize ─────────────────────────────────────────────── */
    const onResize = () => {
      const nw = mount.clientWidth, nh = mount.clientHeight;
      if (!nw || !nh) return;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    /* ── Animation loop ─────────────────────────────────────── */
    let rafId: number;
    let lastT = 0;
    const loop = (t: number) => {
      rafId = requestAnimationFrame(loop);
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;

      points.rotation.y      += 0.007 * dt;
      points.rotation.x      += 0.003 * dt;
      networkLines.rotation.y += 0.007 * dt;
      networkLines.rotation.x += 0.003 * dt;

      for (const m of meshes) {
        const [sx, sy] = m.userData.speed as [number, number];
        m.rotation.x += sx * dt;
        m.rotation.y += sy * dt;
      }
      renderer.render(scene, camera);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
