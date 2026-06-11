"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  Button,
  Chip,
  IconButton,
  Modal,
  Box,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import StorefrontIcon from "@mui/icons-material/Storefront";
import entrepreneursData from "@/data/entrepreneurs.json";

export default function EntrepreneurProfilePage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Buscar emprendedora
  const entrepreneur = entrepreneursData.find((e) => e.id === id);

  if (!entrepreneur) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Emprendedora no encontrada</h2>
        <p className="mt-2 text-slate-500">
          El perfil que intentas buscar no existe o ha sido modificado.
        </p>
        <Link href="/directorio" passHref legacyBehavior>
          <Button
            variant="contained"
            color="primary"
            className="mt-6 bg-slate-900 text-white rounded-xl px-6 py-2"
          >
            Volver al Directorio
          </Button>
        </Link>
      </div>
    );
  }

  // Crear link de WhatsApp pre-llenado
  const whatsappMessage = `Hola ${entrepreneur.name}, vi tu emprendimiento "${entrepreneur.businessName}" en el Directorio de Emprendedoras Migrantes de la Cámara de Comercio. ¡Me gustaría ponerme en contacto contigo para conocer más sobre tus productos!`;
  const whatsappUrl = `https://wa.me/${entrepreneur.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  // Combinar imagen principal + galería para formar la galería completa
  const allImages = [entrepreneur.image, ...entrepreneur.gallery];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Botón Volver */}
      <div className="mb-8">
        <Button
          onClick={() => router.back()}
          startIcon={<ArrowBackIcon />}
          className="text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 rounded-xl px-4 py-2 text-sm"
        >
          Volver
        </Button>
      </div>

      {/* Grid Superior: Imagen de Perfil + Información de Contacto */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 mb-12">
        {/* Lado Izquierdo: Imagen Destacada Principal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 overflow-hidden rounded-3xl border border-slate-200/60 shadow-sm"
        >
          <img
            src={entrepreneur.image}
            alt={entrepreneur.businessName}
            className="h-[350px] sm:h-[480px] w-full object-cover"
          />
        </motion.div>

        {/* Lado Derecho: Info Rápida y Acciones de Contacto */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm"
        >
          <div>
            {/* Badges de Categoría y Origen */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Chip
                icon={<StorefrontIcon className="!text-teal-600 !text-sm" />}
                label={entrepreneur.category}
                size="small"
                className="bg-teal-50 text-teal-700 font-semibold text-xs border-none py-1.5 px-1"
              />
              <Chip
                icon={<PublicIcon className="!text-indigo-600 !text-sm" />}
                label={`Origen: ${entrepreneur.origin}`}
                size="small"
                className="bg-indigo-50 text-indigo-700 font-semibold text-xs border-none py-1.5 px-1"
              />
            </div>

            {/* Nombre del Negocio y la Emprendedora */}
            <h1 className="text-3xl font-extrabold text-slate-950 sm:text-4xl leading-tight">
              {entrepreneur.businessName}
            </h1>
            <p className="text-sm font-medium text-slate-400 mt-1">
              Emprendedora: <span className="text-slate-600 font-semibold">{entrepreneur.name}</span>
            </p>

            {/* Ubicación */}
            <div className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 mt-4">
              <LocationOnIcon fontSize="small" />
              <span>{entrepreneur.location}, Uruguay</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-6">
              {entrepreneur.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  className="text-slate-500 border-slate-200 text-xs"
                />
              ))}
            </div>
          </div>

          {/* Tarjeta de Contacto Directo */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 mb-4">
              ¿Quieres hacer un pedido o consulta? ¡Escríbele!
            </h3>
            <div className="flex flex-col gap-3">
              {/* WhatsApp CTA */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  variant="contained"
                  fullWidth
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-2xl py-3 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  startIcon={<WhatsAppIcon />}
                >
                  Contactar por WhatsApp
                </Button>
              </a>

              {/* Instagram Link */}
              <a
                href={`https://instagram.com/${entrepreneur.contact.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="outlined"
                  fullWidth
                  className="border-slate-200 text-slate-700 hover:bg-slate-50 rounded-2xl py-3 transition-all flex items-center justify-center gap-2"
                  startIcon={<InstagramIcon className="text-pink-600" />}
                >
                  Seguir en Instagram
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detalle / Historia del Emprendimiento */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-slate-950 mb-4">Sobre el Emprendimiento</h2>
        <p className="text-slate-600 leading-relaxed text-md whitespace-pre-line">
          {entrepreneur.description}
        </p>
      </section>

      {/* Galería de Fotos de Productos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-950 mb-6">Galería de Productos</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {allImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm bg-slate-100"
              onClick={() => setActiveImage(img)}
            >
              <img
                src={img}
                alt={`${entrepreneur.businessName} - Producto ${idx + 1}`}
                className="h-full w-full object-cover transition-transform hover:opacity-90"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal / Lightbox para expandir imágenes */}
      <Modal
        open={!!activeImage}
        onClose={() => setActiveImage(null)}
        closeAfterTransition
        className="flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      >
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="outline-none"
            >
              <Box className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-white shadow-2xl">
                <img
                  src={activeImage}
                  alt="Vista expandida de producto"
                  className="max-h-[85vh] w-auto max-w-full object-contain"
                />
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/60 text-white hover:bg-slate-950/80 transition-colors"
                >
                  ✕
                </button>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </div>
  );
}