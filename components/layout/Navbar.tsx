'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '#products' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo a la izquierda */}
          <Link href="/" className="text-2xl font-bold">
            Nicaa<span className="text-gray-600">Holic</span>
          </Link>

          {/* Menú centrado en desktop */}
          <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Espacio vacío a la derecha para mantener el centrado */}
          <div className="hidden md:block w-24"></div>

          {/* Botón de menú móvil */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};