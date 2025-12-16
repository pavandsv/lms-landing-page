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
  available: { base: "#e5e7eb", glow: "#ffffff", accent: "#22c55e" },
  rented: { base: "#cbd5e1", glow: "#e5e7eb", accent: "#f97316" },
  reserved: { base: "#cbd5e1", glow: "#e5e7eb", accent: "#3b82f6" },
  maintenance: { base: "#a1a1aa", glow: "#d4d4d8", accent: "#ef4444" },
};

const COLORS = {
  body: "#64748b",
  frame: "#cbd5e1",
};

// --- 3D COMPONENT: INDIVIDUAL LOCKER ---
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
  cabinetDims,
}) => {
  const [hovered, setHovered] = useState(false);

  const doorTint = STATUS_TINTS[status] || STATUS_TINTS.available;

  const doorWidth = width - 0.16;
  const doorHeight = height - 0.16;
  const doorDepth = depth * 0.45;
  const bodyDepth = depth * 0.7;
  const FRONT_Z = bodyDepth / 2 + 0.012;

  // Label chip
  const CHIP_H = 0.22;
  const CHIP_PAD_X = 0.1;
  const CHIP_Z = 0.008;
  const CHIP_MARGIN_TOP = 0.14;

  const LABEL_FONT = Math.min(0.16, Math.max(0.11, doorWidth * 0.075));
  const CHIP_W = Math.min(doorWidth * 0.82, 1.9);
  const LABEL_MAX_W = CHIP_W - CHIP_PAD_X * 2;

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
      depth,
      rowId,
      cabinetDims,
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
      {/* Locker body */}
      <mesh>
        <boxGeometry args={[width, height, bodyDepth]} />
        <meshPhysicalMaterial
          color={COLORS.body}
          roughness={0.22}
          metalness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.06}
          reflectivity={0.9}
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
          color="#ffffff"
          transparent
          opacity={0.14}
          roughness={0.08}
          metalness={0.0}
          transmission={0.95}
          thickness={0.25}
          reflectivity={0.95}
          clearcoat={1}
          clearcoatRoughness={0.06}
          emissive={doorTint.glow}
          emissiveIntensity={hovered ? 0.18 : 0.06}
        />
        <Edges color="#e5e7eb" threshold={20} />
      </mesh>

      {/* Handle */}
      <mesh position={[-doorWidth * 0.28, 0, 0.021]}>
        <circleGeometry args={[0.05, 24]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.25}
          roughness={0.2}
          metalness={0.0}
        />
      </mesh>

      {/* Status badge */}
      <mesh
        position={[
          -doorWidth / 2 + 0.14,
          -doorHeight / 2 + 0.14,
          bodyDepth / 2 + 0.04,
        ]}
      >
        <boxGeometry args={[0.18, 0.18, 0.02]} />
        <meshStandardMaterial
          color={doorTint.accent}
          emissive={doorTint.accent}
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.15}
        />
      </mesh>

      {/* Label chip */}
      <group
        position={[0, doorHeight / 2 - CHIP_MARGIN_TOP - CHIP_H / 2, FRONT_Z]}
      >
        <RoundedBox args={[CHIP_W, CHIP_H, CHIP_Z]} radius={0.06} smoothness={8}>
          <meshBasicMaterial color="#ffffff" />
        </RoundedBox>

        <Text
          position={[0, 0, CHIP_Z / 2 + 0.002]}
          fontSize={LABEL_FONT}
          color="#0f172a"
          anchorX="center"
          anchorY="middle"
          maxWidth={LABEL_MAX_W}
          overflowWrap="break-word"
          lineHeight={0.95}
        >
          {label}
        </Text>
      </group>
    </group>
  );
};

// --- 3D COMPONENT: CABINET ASSEMBLY ---
// ✅ Back panel removed: only lockers render now
const Cabinet3D = ({ rows, specs, onHoverChange }) => {
  const { width, height, depth } = specs;

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
            cabinetDims={{ width, height, depth }}
          />
        );

        currentX += locker.width;
      });

      currentY -= row.height;
    });

    return components;
  }, [rows, width, height, depth, onHoverChange]);

  return <group>{renderedRows}</group>;
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
        <ambientLight intensity={1.0} />
        <spotLight
          position={[10, 12, 10]}
          angle={0.4}
          penumbra={0.9}
          intensity={1.3}
          castShadow
        />
        <directionalLight position={[-8, 6, 6]} intensity={0.55} color="#ffffff" />
        <pointLight position={[0, -4, 8]} intensity={0.35} />

        {/* Controls */}
        <OrbitControls
          makeDefault
          autoRotate={!isHoveringLocker}
          autoRotateSpeed={0.7}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.6}
          enableZoom
        />

        <Center position={[0, -0.5, 0]}>
          <Cabinet3D rows={rows} specs={specs} onHoverChange={setHoveredLocker} />
        </Center>

        <Grid
          args={[30, 30]}
          cellColor="#94a3b8"
          sectionColor="#475569"
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

      {/* Tooltip */}
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
              <span className="font-medium capitalize">{hoveredLocker.status}</span>
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

            {hoveredLocker?.cabinetDims && (
              <div className="flex justify-between gap-4">
                <span className="text-slate-500">Cabinet</span>
                <span className="font-medium">
                  W {hoveredLocker.cabinetDims.width.toFixed(2)} × H{" "}
                  {hoveredLocker.cabinetDims.height.toFixed(2)} × D{" "}
                  {hoveredLocker.cabinetDims.depth.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
