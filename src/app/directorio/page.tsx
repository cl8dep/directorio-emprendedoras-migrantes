"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  TextField,
  MenuItem,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import PublicIcon from "@mui/icons-material/Public";
import entrepreneursData from "@/data/entrepreneurs.json";

export default function DirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedLocation, setSelectedLocation] = useState("Todos");

  // Extraer categorías y ubicaciones únicas para los filtros
  const categories = useMemo(() => {
    const allCats = entrepreneursData.map((e) => e.category);
    return ["Todos", ...Array.from(new Set(allCats))];
  }, []);

  const locations = useMemo(() => {
    const allLocs = entrepreneursData.map((e) => e.location);
    return ["Todos", ...Array.from(new Set(allLocs))];
  }, []);

  // Filtrar los datos en tiempo real
  const filteredEntrepreneurs = useMemo(() => {
    return entrepreneursData.filter((e) => {
      const matchesSearch =
        e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "Todos" || e.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "Todos" || e.location === selectedLocation;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Todos");
    setSelectedLocation("Todos");
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header de Sección */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Directorio de Emprendedoras
        </h1>
        <p className="mt-2 text-slate-500">
          Encuentra y contacta directamente con emprendedoras migrantes de todo el Uruguay.
        </p>
      </div>

      {/* Contenedor Principal (Filtros + Resultados) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Panel de Filtros Lateral (Escritorio) */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200/80 h-fit relative lg:sticky lg:top-24">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-md font-bold text-slate-950 flex items-center gap-1.5">
              <FilterAltIcon className="text-slate-500" fontSize="small" />
              Filtros de Búsqueda
            </h2>
            {(searchQuery || selectedCategory !== "Todos" || selectedLocation !== "Todos") && (
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-0.5"
              >
                <ClearIcon fontSize="inherit" />
                Limpiar
              </button>
            )}
          </div>

          <div className="flex flex-col gap-5">
            {/* Campo de Búsqueda de Texto */}
            <TextField
              label="Buscar por palabra clave"
              placeholder="Ej: tequeños, lino..."
              variant="outlined"
              size="small"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon className="text-slate-400" fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Divider />

            {/* Selector de Categoría */}
            <TextField
              select
              label="Categoría"
              size="small"
              fullWidth
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>

            {/* Selector de Ubicación */}
            <TextField
              select
              label="Departamento / Ciudad"
              size="small"
              fullWidth
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map((loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </aside>

        {/* Sección de Resultados */}
        <div className="lg:col-span-3">
          {/* Contador de resultados */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              Mostrando{" "}
              <span className="font-bold text-slate-900">
                {filteredEntrepreneurs.length}
              </span>{" "}
              {filteredEntrepreneurs.length === 1 ? "emprendedora" : "emprendedoras"}
            </p>
          </div>

          {/* Grilla de Resultados con AnimatePresence para animar la entrada/salida */}
          {filteredEntrepreneurs.length > 0 ? (
            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              <AnimatePresence>
                {filteredEntrepreneurs.map((e) => (
                  <motion.div
                    key={e.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <Card className="flex flex-col h-full rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                      {/* Imagen principal con badge de categoría */}
                      <div className="relative h-48 w-full shrink-0">
                        <CardMedia
                          component="img"
                          className="h-full w-full object-cover"
                          image={e.image}
                          alt={e.businessName}
                        />
                        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                          <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-slate-900 shadow-sm border border-slate-200/20">
                            {e.category}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="inline-flex items-center gap-1 rounded-full bg-teal-50/95 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-teal-800 shadow-sm border border-teal-100/30">
                            <PublicIcon className="text-teal-600 !text-sm" />
                            {e.origin}
                          </span>
                        </div>
                      </div>

                      {/* Detalles */}
                      <CardContent className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-teal-600">
                          <LocationOnIcon fontSize="inherit" />
                          <span>{e.location}</span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 leading-tight">
                          {e.businessName}
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mb-3">
                          Por {e.name}
                        </p>

                        <p className="text-sm text-slate-500 line-clamp-3 mb-4 flex-1">
                          {e.description}
                        </p>

                        {/* Chips de tags */}
                        <div className="flex flex-wrap gap-1 mb-5">
                          {e.tags.slice(0, 3).map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              variant="outlined"
                              className="text-slate-500 border-slate-200 text-[11px]"
                            />
                          ))}
                        </div>

                        {/* Botón de Perfil */}
                        <Link href={`/emprendedora/${e.id}`} passHref legacyBehavior>
                          <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            className="border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 rounded-xl py-2"
                          >
                            Ver Perfil y Galería
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-2xl border border-slate-200/80"
            >
              <p className="text-slate-400 mb-2 font-medium">
                No encontramos emprendedoras que coincidan con tu búsqueda.
              </p>
              <button
                onClick={resetFilters}
                className="text-sm font-semibold text-teal-600 hover:text-teal-700"
              >
                Restablecer todos los filtros
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}