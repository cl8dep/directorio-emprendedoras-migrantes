"use client";

import React from "react";
import Link from "next/link";
import Diversity1Icon from "@mui/icons-material/Diversity1";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-10 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
            <Diversity1Icon className="text-teal-600" fontSize="small" />
            <span className="text-sm tracking-tight">
              Directorio <span className="font-light text-slate-500">Migrantes</span>
            </span>
          </Link>

          {/* Contexto del proyecto */}
          <p className="text-center text-xs text-slate-400 sm:text-right max-w-md">
            Demo. Uruguay, 2026.
          </p>
        </div>
        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Directorio de Emprendedoras Migrantes. Desarrollado con ❤️ para la Cámara de Comercio.
        </div>
      </div>
    </footer>
  );
}