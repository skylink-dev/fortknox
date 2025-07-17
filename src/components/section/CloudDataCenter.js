'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CloudDataCenter() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.set(0, 0, 30);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Add 3D server cubes
    const group = new THREE.Group();
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: '#00ffff', metalness: 0.5, roughness: 0.2 });

    for (let x = -10; x <= 10; x += 5) {
      for (let y = -10; y <= 10; y += 5) {
        const box = new THREE.Mesh(boxGeometry, material.clone());
        box.position.set(x, y, 0);
        group.add(box);
      }
    }

    scene.add(group);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 25);
    scene.add(pointLight);

    // Scroll zoom
    const onWheel = (e) => {
      camera.position.z += e.deltaY * 0.05;
      camera.position.z = Math.max(10, Math.min(100, camera.position.z));
    };
    window.addEventListener('wheel', onWheel);

    // Mouse move rotate
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / width) * 2 - 1;
      mouseY = (e.clientY / height) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y = mouseX * 0.5;
      group.rotation.x = mouseY * 0.5;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen bg-black" />;
}
