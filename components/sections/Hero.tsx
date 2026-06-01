'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid con orden responsive */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Imagen - En móvil primero (order-1), en desktop a la derecha (md:order-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square order-1 md:order-2"
          >
            <Image 
              src="/IMG/P1.png"
              alt="Sudadera personalizada"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>

          {/* Texto - En móvil después (order-2), en desktop a la izquierda (md:order-1) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Sudaderas
              <span className="text-gray-600"> Únicas</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8">
              Nicaaholic es más que una marca de camisetas; es una forma de expresar el orgullo, 
              la cultura y la esencia de ser nicaragüense. Su nombre nace de la unión de "Nica", 
              una expresión de identidad nacional, y "aholic", que representa una pasión profunda 
              por lo que se ama. Nicaaholic está diseñada para quienes llevan a Nicaragua en el corazón, 
              dentro y fuera de sus fronteras, ofreciendo prendas que cuentan historias, resaltan 
              nuestras raíces y celebran nuestras tradiciones con un estilo moderno y auténtico. 
              Cada diseño es una muestra de amor por nuestra tierra, nuestra gente y nuestra cultura. 🇳🇮👕.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white px-6 md:px-8 py-3 rounded-lg hover:bg-gray-800 transition text-base md:text-lg font-semibold"
              >
                Crear mi hoodie
              </button>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-black text-black px-6 md:px-8 py-3 rounded-lg hover:bg-black hover:text-white transition text-base md:text-lg font-semibold"
              >
                Ver catálogo
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};