'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', design: '', size: 'M' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Me interesa personalizar una sudadera.%0A%0ANombre: ${formData.name}%0ADiseño: ${formData.design}%0ATalle: ${formData.size}`;
    window.open(`https://wa.me/+50587802300?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl font-bold mb-4">Compartenos tu diseño</h2>
            <p className="text-gray-300 mb-6">
              ¿Tenés una idea? Compartila con nosotros y te ayudamos a hacerla realidad.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">📞 WhatsApp</h3>
                <p className="text-gray-300">+505 8780 2300</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📧 Email</h3>
                <p className="text-gray-300">Nicaaholic@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📍 Delivery</h3>
                <p className="text-gray-300">León Nicaragua</p>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre*"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
            />
            <textarea
              placeholder="Contanos tu diseño o idea*"
              required
              rows={4}
              value={formData.design}
              onChange={(e) => setFormData({ ...formData, design: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
            />
            <select
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
            >
              <option value="S">Talle S</option>
              <option value="M">Talle M</option>
              <option value="L">Talle L</option>
              <option value="XL">Talle XL</option>
            </select>
            <button type="submit" className="w-full bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition font-semibold">
              Enviar por WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};