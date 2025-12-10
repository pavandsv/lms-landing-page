"use client";

import React, { useState } from "react";
import { MousePointerClick, Lock, Eye } from "lucide-react";
import LockerDemo from "./LockerDemo";
import cabinetsConfig from "./lockersConfig.json";

const STATUS_COLORS = {
  available: "#22c55e", // Green
  rented: "#fb923c", // Orange
  maintenance: "#9ca3af", // Grey
  reserved: "#3b82f6", // Blue
};

const DemoSection = () => {
  const [selectedCabinetId, setSelectedCabinetId] = useState(
    cabinetsConfig[0]?.id ?? ""
  );

  const selectedCabinet =
    cabinetsConfig.find((c) => c.id === selectedCabinetId) || cabinetsConfig[0];

  return (
    <section
      id="demo"
      className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-16 relative"
    >
      {/* Subtle background ring */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-8 rounded-[3rem] border border-dashed border-slate-200/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Text block */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                  Interactive 3D demo
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  Experience our realtime locker configuration tool.
                </p>
                <ul className="space-y-4 mb-4">
                  <li className="flex items-start gap-3 text-slate-700">
                    <MousePointerClick className="w-5 h-5 text-slate-900 mt-0.5" />
                    <span className="text-sm">
                      <strong>Click</strong> on a locker to see its status or edit it.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <Lock className="w-5 h-5 text-slate-900 mt-0.5" />
                    <span className="text-sm">
                      <strong>Customize</strong> rows and sizes using the panel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <Eye className="w-5 h-5 text-slate-900 mt-0.5" />
                    <span className="text-sm">
                      <strong>Drag &amp; scroll</strong> to rotate and zoom the camera.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Controls */}
              <div className="space-y-4">
                {/* Cabinet Dropdown */}
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Cabinet
                  </h3>
                  <select
                    className="text-sm px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
                    value={selectedCabinetId}
                    onChange={(e) => setSelectedCabinetId(e.target.value)}
                  >
                    {cabinetsConfig.map((cabinet) => (
                      <option key={cabinet.id} value={cabinet.id}>
                        {cabinet.name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Viewing:{" "}
                    <span className="font-semibold text-slate-700">
                      {selectedCabinet?.name}
                    </span>
                  </p>
                </div>

                {/* Live Status Legend */}
                <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Live status
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: STATUS_COLORS.available }}
                      />
                      <span className="text-xs text-slate-700 font-medium">
                        Available
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: STATUS_COLORS.rented }}
                      />
                      <span className="text-xs text-slate-700 font-medium">
                        Rented
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: STATUS_COLORS.reserved }}
                      />
                      <span className="text-xs text-slate-700 font-medium">
                        Reserved
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: STATUS_COLORS.maintenance }}
                      />
                      <span className="text-xs text-slate-700 font-medium">
                        Maintenance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D card ONLY */}
          <div className="lg:col-span-3 h-[600px] lg:h-[700px] w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 ring-4 ring-slate-100">
            <LockerDemo selectedCabinetId={selectedCabinetId} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
