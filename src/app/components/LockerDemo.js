"use client";

import React, { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Edges,
  Center,
  Grid,
  Text,
  RoundedBox,
} from "@react-three/drei";
import cabinetsConfig from "./lockersConfig.json";

const STATUS_TINTS = {
  reserved: {
    base: "#3b82f6", // blue
    glow: "lightblue", // soft blue glow
  },
  rented: {
    base: "#f97316", // orange
    glow: "darkorange", // soft orange glow
  },
  maintenance: {
    base: "#9ca3af", // grey
    glow: "red", // soft grey glow
  },
  available: {
    base: "#22c55e", // green
    glow: "lightgreen", // soft green glow
  },
};

const COLORS = {
  text: "#020617", // almost black
  body: "#e5e7eb", // light locker metal
  frame: "#9ca3af", // subtle frame
  handle: "#d4d4d8", // lighter metal handle
};

const Locker3D = ({
  position,
  width,
  height,
  depth,
  status,
  label,
  id,
  rowId,
  onHoverChange,
}) => {
  const [hovered, setHovered] = useState(false);

  const doorTint = STATUS_TINTS[status] || STATUS_TINTS.available;

  const doorWidth = width - 0.16;
  const doorHeight = height - 0.16;
  const doorDepth = depth * 0.45;
  const bodyDepth = depth * 0.7;

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = "pointer";

    onHoverChange?.({
      id,
      label,
      status,
      width,
      height,
      rowId,
    });
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHovered(false);
    document.body.style.cursor = "auto";
    onHoverChange?.(null);
  };

  return (
    <group position={position} scale={hovered ? 1.02 : 1}>
      {/* Locker body / shell */}
      <mesh>
        <boxGeometry args={[width, height, bodyDepth]} />
        <meshStandardMaterial
          color={COLORS.body}
          roughness={0.85}
          metalness={0.15}
        />
        <Edges color={COLORS.frame} threshold={15} />
      </mesh>

      {/* Glass door */}
      <mesh
        position={[0, 0, bodyDepth / 2 - doorDepth / 2 + 0.01]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <boxGeometry args={[doorWidth, doorHeight, doorDepth]} />
        <meshPhysicalMaterial
          color={doorTint.base} // status color
          transparent
          opacity={0.7} // a bit softer
          roughness={0.2}
          metalness={0.5}
          transmission={0.55} // glass effect
          thickness={0.3}
          reflectivity={0.9}
          clearcoat={0.9}
          clearcoatRoughness={0.08}
          // softer glow, boosted a little on hover
          emissive={doorTint.glow}
          emissiveIntensity={hovered ? 0.35 : 0.15}
        />

        <Edges color="#e5e7eb" threshold={20} />
      </mesh>

      {/* Handle on right side of door (vertical line) */}
      <mesh position={[doorWidth / 2 - 0.12, 0, bodyDepth / 2 + 0.02]}>
        <boxGeometry args={[0.05, 0.45, 0.07]} />
        <meshStandardMaterial
          color={COLORS.handle}
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Small key area under handle (dot) */}
      <mesh
        position={[doorWidth / 2 - 0.12, -doorHeight / 4, bodyDepth / 2 + 0.03]}
      >
        <boxGeometry args={[0.07, 0.07, 0.04]} />
        <meshStandardMaterial
          color={COLORS.handle}
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>

      <group
        position={[
          0,
          doorHeight / 2 - 0.15, // inside top area of the door
          bodyDepth / 2 + 0.035, // flush with door surface
        ]}
      >
        {/* Chip background with border radius */}
        <RoundedBox
          args={[doorWidth * 0.7, 0.18, 0.02]} // width, height, depth
          radius={0.08}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.3}
            metalness={0.05}
          />
        </RoundedBox>

        {/* Label text */}
        <Text
          position={[0, 0, 0.02]}
          fontSize={Math.min(doorWidth, height) * 0.16}
          color="#0f172a"
          anchorX="center"
          anchorY="middle"
          maxWidth={doorWidth * 0.65}
          overflowWrap="break-word"
        >
          {label}
        </Text>
      </group>

      {/* 🔹 White chip label INSIDE the locker at the top of the door */}
      <group
        position={[
          0,
          doorHeight / 2 - 0.15, // inside top area of the door
          bodyDepth / 2 + 0.035, // flush with door surface
        ]}
      >
        {/* Chip background */}
        <mesh>
          <boxGeometry args={[doorWidth * 0.7, 0.18, 0.02]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.3}
            metalness={0.05}
          />
        </mesh>

        {/* Label text */}
        <Text
          position={[0, 0, 0.015]}
          fontSize={Math.min(doorWidth, height) * 0.16}
          color="#0f172a"
          anchorX="center"
          anchorY="middle"
          maxWidth={doorWidth * 0.65}
          overflowWrap="break-word"
        >
          {label}
        </Text>
      </group>
    </group>
  );
};

// --- 3D COMPONENT: CABINET ASSEMBLY ---
const Cabinet3D = ({ rows, specs, onHoverChange }) => {
  const { width, height, depth, thickness } = specs;

  const renderedRows = useMemo(() => {
    const components = [];
    let currentY = height / 2;

    rows.forEach((row) => {
      const rowY = currentY - row.height / 2;
      let currentX = -width / 2;

      row.lockers.forEach((locker) => {
        const lockerX = currentX + locker.width / 2;
        components.push(
          <Locker3D
            key={locker.id}
            id={locker.id}
            label={locker.label}
            width={locker.width}
            height={row.height}
            depth={depth}
            position={[lockerX, rowY, 0]}
            status={locker.status}
            rowId={row.id}
            onHoverChange={onHoverChange}
          />
        );
        currentX += locker.width;
      });

      currentY -= row.height;
    });

    return components;
  }, [rows, width, height, depth, onHoverChange]);

  return (
    <group>
      {/* Back Panel / wall */}
      <mesh position={[0, 0, -depth / 2 - thickness / 2]}>
        <boxGeometry
          args={[width + thickness, height + thickness, thickness]}
        />
        <meshStandardMaterial
          color="#e5e7eb"
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>

      {/* Outer wireframe removed (no more diagonal line) */}

      {renderedRows}
    </group>
  );
};

// --- MAIN COMPONENT ---
export default function LockerDemo({ selectedCabinetId }) {
  const [hoveredLocker, setHoveredLocker] = useState(null);

  const selectedCabinet = useMemo(() => {
    if (!selectedCabinetId) return cabinetsConfig[0];
    return (
      cabinetsConfig.find((c) => c.id === selectedCabinetId) ||
      cabinetsConfig[0]
    );
  }, [selectedCabinetId]);

  if (!selectedCabinet) return null;

  const { specs, rows } = selectedCabinet;
  const isHoveringLocker = !!hoveredLocker;

  return (
    <div className="w-full h-full relative">
      <Canvas
        shadows
        camera={{ position: [8, 3, 12], fov: 40 }}
        className="w-full h-full"
      >
        <color attach="background" args={["#f3f4f6"]} />

        {/* Lighting */}
        <ambientLight intensity={0.75} />
        <spotLight
          position={[10, 12, 10]}
          angle={0.4}
          penumbra={0.9}
          intensity={1.3}
          castShadow
        />
        <directionalLight
          position={[-8, 6, 6]}
          intensity={0.55}
          color="#ffffff"
        />
        <pointLight position={[0, -4, 8]} intensity={0.35} />

        {/* Controls */}
        <OrbitControls
          makeDefault
          autoRotate={!isHoveringLocker}
          autoRotateSpeed={0.7}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.6}
          enableZoom={true}
        />

        <Center position={[0, -0.5, 0]}>
          <Cabinet3D
            rows={rows}
            specs={specs}
            onHoverChange={setHoveredLocker}
          />
        </Center>

        <Grid
          args={[30, 30]}
          cellColor="#e5e7eb"
          sectionColor="#d4d4d8"
          position={[0, -5, 0]}
          fadeDistance={24}
        />
      </Canvas>

      {/* Caption */}
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <span className="text-[10px] text-slate-400 font-semibold tracking-widest">
          INTERACTIVE 3D VIEW
        </span>
      </div>

      {/* Tooltip (top-left) */}
      {hoveredLocker && (
        <div className="absolute left-4 top-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl px-4 py-3 shadow-lg text-xs text-slate-800">
          <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-1">
            Locker details
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">ID</span>
              <span className="font-medium text-slate-900">
                {hoveredLocker.label || hoveredLocker.id}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Status</span>
              <span className="font-medium capitalize">
                {hoveredLocker.status}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Row</span>
              <span className="font-medium">Row {hoveredLocker.rowId}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-slate-500">Size</span>
              <span className="font-medium">
                W {hoveredLocker.width.toFixed(2)} × H{" "}
                {hoveredLocker.height.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
