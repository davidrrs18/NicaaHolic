'use client';

import { motion } from 'framer-motion';
import { FaTshirt, FaPalette, FaRocket, FaShippingFast } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Elegí tu modelo',
    description: 'Seleccioná el estilo, color y talle de tu hoodie favorito.',
    icon: FaTshirt,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Diseñá',
    description: 'Subí tu logo, frase o diseño. Nuestro equipo de diseño te asesora gratuitamente.',
    icon: FaPalette,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 3,
    title: 'Producimos',
    description: 'Estampamos con tecnología de alta calidad. El proceso toma 5-7 días hábiles.',
    icon: FaRocket,
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    id: 4,
    title: 'Recibilo',
    description: 'Envíos a todo el país.',
    icon: FaShippingFast,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cómo{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              personalizamos
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un proceso simple y transparente para que tengas tu hoodie único
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Número de paso */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.id}
              </div>

              {/* Icono */}
              <div className={`w-20 h-20 mx-auto rounded-full ${step.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`text-3xl ${step.color}`} />
              </div>

              {/* Título y descripción */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Características adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold text-gray-800">Diseño ilimitado</h4>
              <p className="text-gray-500 text-sm">Sin límites de colores</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-800">Producción rápida</h4>
              <p className="text-gray-500 text-sm">5-7 días hábiles</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-semibold text-gray-800">Garantía</h4>
              <p className="text-gray-500 text-sm">6 meses en estampados</p>
            </div>
          </div>
        </motion.div>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold"
          >
            Comenzar mi diseño
          </button>
        </motion.div>
      </div>
    </section>
  );
};