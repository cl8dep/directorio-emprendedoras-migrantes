"use client";

import React from "react";
import Link from "next/link";
import { Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PublicIcon from "@mui/icons-material/Public";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-slate-900 py-20 text-white sm:py-32">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/30 via-slate-900 to-slate-900" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3.5 py-1 text-sm font-semibold leading-6 text-teal-400 ring-1 ring-inset ring-teal-500/20"
            >
              Proyecto de Integración Territorial
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl"
            >
              Conectando el Talento de las{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Emprendedoras Migrantes
              </span>{" "}
              en Uruguay
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg text-slate-300 sm:text-xl"
            >
              Un directorio nacional con alcance territorial para que empresas y particulares descubran y colaboren con emprendimientos liderados por mujeres migrantes en todo el país.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Link href="/directorio" passHref legacyBehavior>
                <Button
                  variant="contained"
                  color="secondary"
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-3.5 text-base shadow-lg hover:shadow-xl transition-all"
                  endIcon={<ArrowForwardIcon />}
                >
                  Explorar Directorio
                </Button>
              </Link>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Value Proposition Section */}
      <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="mb-4 rounded-full bg-teal-50 p-3 text-teal-600">
                <BusinessCenterIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Regalos Empresariales</h3>
              <p className="mt-2 text-sm text-slate-500">
                Propuestas de gran calidad y con impacto social directo, ideales para fechas de fin de año o presentes institucionales cotidianos.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="mb-4 rounded-full bg-teal-50 p-3 text-teal-600">
                <StorefrontIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Diversidad de Sectores</h3>
              <p className="mt-2 text-sm text-slate-500">
                Desde gastronomía internacional, diseño textil sostenible y cosmética orgánica, hasta artesanías hechas 100% a mano.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="mb-4 rounded-full bg-teal-50 p-3 text-teal-600">
                <PublicIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Alcance Nacional</h3>
              <p className="mt-2 text-sm text-slate-500">
                Aseguramos la descentralización territorial, visibilizando emprendimientos de Montevideo, Canelones, Maldonado, Colonia, Rivera y más departamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Context Section */}
      <section id="programa" className="w-full py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Fases del Programa de Apoyo a Migrantes
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Este directorio es una iniciativa clave de la Fase 3 del programa, diseñada para asentar las bases comerciales de las emprendedoras en el mercado local.
            </p>
          </div>

          <div className="relative border-l border-teal-200 ml-4 md:ml-32">
            {/* Fase 1 */}
            <div className="mb-12 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 ring-4 ring-slate-50">
                <span className="h-2 w-2 rounded-full bg-teal-600" />
              </span>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider md:w-28 md:text-right shrink-0">Fase 1</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Trabajo en Territorio</h3>
                  <p className="mt-1 text-slate-600">
                    Comienzo en territorio, iniciando en Montevideo con talleres presenciales, diagnóstico inicial de necesidades y encuentros de contención grupal.
                  </p>
                </div>
              </div>
            </div>

            {/* Fase 2 */}
            <div className="mb-12 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 ring-4 ring-slate-50">
                <span className="h-2 w-2 rounded-full bg-teal-600" />
              </span>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider md:w-28 md:text-right shrink-0">Fase 2</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Talleres Específicos</h3>
                  <p className="mt-1 text-slate-600">
                    Formaciones en temáticas especializadas esenciales para el bienestar y desarrollo de la comunidad, incluyendo talleres de salud sexual y reproductiva.
                  </p>
                </div>
              </div>
            </div>

            {/* Fase 3 */}
            <div className="mb-4 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 ring-4 ring-slate-50">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider md:w-28 md:text-right shrink-0">Fase 3 (Actual)</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Comercialización y Vinculación</h3>
                  <p className="mt-1 text-slate-600">
                    Talleres de comercialización, preparación para rondas de negocios (virtuales y presenciales), seguidos de encuentros en la Cámara de Comercio con empresas compradoras y exhibición presencial de sus productos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white sm:p-16">
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl font-extrabold sm:text-4xl max-w-xl">
                ¿Tu empresa busca opciones de regalos corporativos o nuevos proveedores?
              </h2>
              <p className="max-w-xl text-slate-300">
                Encuentra productos artesanales, gastronómicos y servicios de alta calidad con historias inspiradoras detrás. Apoya de manera directa la integración socio-económica de mujeres migrantes en el país.
              </p>
              <Link href="/directorio" passHref legacyBehavior>
                <Button
                  variant="contained"
                  color="secondary"
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-3 text-base shadow-md hover:shadow-lg transition-all mt-4"
                >
                  Acceder al Directorio Completo
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}