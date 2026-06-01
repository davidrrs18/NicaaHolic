'use client';

import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
          
          {/* Marca */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Nicaa<span className="text-gray-500">Holic</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Diseño y calidad en cada prenda. Personalizamos tus ideas para crear sudaderas únicas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
                <FaWhatsapp />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition text-sm">Inicio</Link></li>
              <li><Link href="#products" className="text-gray-400 hover:text-white transition text-sm">Productos</Link></li>
              <li><Link href="#process" className="text-gray-400 hover:text-white transition text-sm">Proceso</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition text-sm">Contacto</Link></li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Hoodie 70% 30%</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Hoodie 100%</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Oversized</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Diseño personalizado</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <FaWhatsapp className="text-gray-500" />
                <a href="https://wa.me/+50587304861" className="text-gray-400 hover:text-white transition">+505 8780 2300</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-gray-500" />
                <a href="mailto:hola@hoodielab.com" className="text-gray-400 hover:text-white transition">hola@hoodielab.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaMapMarkerAlt className="text-gray-500" />
                <span className="text-gray-400">León, Nicaragua</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">© {currentYear} NicaaHolic. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            
          </div>
        </div>
      </div>
    </footer>
  );
};