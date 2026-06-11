"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";
import Diversity1Icon from "@mui/icons-material/Diversity1";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Nombre del Proyecto */}
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 transition-colors hover:text-teal-600">
          <Diversity1Icon className="text-teal-600" fontSize="medium" />
          <span className="hidden text-lg tracking-tight sm:block">
            Directorio <span className="font-light text-slate-500">Migrantes</span>
          </span>
          <span className="text-lg tracking-tight sm:hidden">
            D.<span className="font-light text-slate-500">Migrantes</span>
          </span>
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-teal-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link href="/directorio" passHref legacyBehavior>
            <Button
              variant="contained"
              color="secondary"
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-sm hover:shadow-md transition-all px-5 py-2 text-sm"
              size="small"
            >
              Explorar Directorio
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}