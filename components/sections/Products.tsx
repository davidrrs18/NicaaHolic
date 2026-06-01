'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoClose, IoArrowBack, IoArrowForward } from 'react-icons/io5';

const products = [
  { 
    id: 1, 
    name: 'Hoodie Essential', 
    price: 12999, 
    image: '/IMG/P2.png',
    description: 'Algodón 100%, corte clásico',
    colors: [
      { name: 'Negro', image: '/IMG/P2.png', code: '#000' },
    ],
    category: 'básico'
  },
  { 
    id: 2, 
    name: 'Hoodie Premium', 
    price: 17999, 
    image: '/IMG/P3.png',
    description: 'Algodón premium, capucha forrada',
    colors: [
      { name: 'Negro', image: '/IMG/P3.png', code: '#000' },
    ],
    category: 'premium'
  },
  { 
    id: 3, 
    name: 'Oversized Hoodie', 
    price: 15999, 
    image: '/IMG/P4.png',
    description: 'Estilo oversize, fit relajado',
    colors: [
      { name: 'Negro', image: '/IMG/P4.png', code: '#000' },
    ],
    category: 'oversized'
  },
  { 
    id: 4, 
    name: 'Hoodie Vintage', 
    price: 14999, 
    image: '/IMG/P5.png',
    description: 'Estilo retro, lavado a la piedra',
    colors: [
      { name: 'Marrón', image: '/IMG/P5.png', code: '#8b4513' },
    ],
    category: 'vintage'
  },
  { 
    id: 5, 
    name: 'Hoodie Floral', 
    price: 16999, 
    image: '/IMG/P6.png',
    description: 'Estampado floral, algodón orgánico',
    colors: [
      { name: 'Blanco', image: '/IMG/P6.png', code: '#fff' },
      { name: 'Rosa', image: '/IMG/P62.png', code: '#ff69b4' },
    ],
    category: 'estampado'
  },
  { 
    id: 6, 
    name: 'Hoodie Camuflaje', 
    price: 18999, 
    image: '/IMG/P7.png',
    description: 'Estilo militar, resistente al agua',
    colors: [
      { name: 'Verde Camuflaje', image: '/IMG/P7.png', code: '#4a5d23' },
      { name: 'Negro', image: '/IMG/P72.png', code: '#000' },
    ],
    category: 'estampado'
  },
  { 
    id: 7, 
    name: 'Hoodie Navideño', 
    price: 19999, 
    image: '/IMG/P8.png',
    description: 'Edición limitada, diseño festivo',
    colors: [
      { name: 'Rojo', image: '/IMG/P8.png', code: '#dc2626' },
      { name: 'Verde', image: '/IMG/P82.png', code: '#22c55e' },
    ],
    category: 'edicion-limitada'
  },
];

const categories = ['todos', 'básico', 'premium', 'oversized', 'vintage', 'estampado', 'edicion-limitada'];

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImages, setSelectedImages] = useState<{ [key: number]: string }>({});
  const [visibleCount, setVisibleCount] = useState(3);
  
  // Estado para el modal de imagen
  const [modalImage, setModalImage] = useState<{ url: string; name: string } | null>(null);

  const handleColorChange = (productId: number, imageUrl: string) => {
    setSelectedImages(prev => ({
      ...prev,
      [productId]: imageUrl
    }));
  };

  const getCurrentImage = (product: typeof products[0]) => {
    return selectedImages[product.id] || product.colors[0].image;
  };

  // Abrir modal con la imagen actual del producto
  const openImagePreview = (product: typeof products[0]) => {
    setModalImage({
      url: getCurrentImage(product),
      name: product.name
    });
  };

  // Cerrar modal
  const closeModal = () => {
    setModalImage(null);
  };

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;
  const hasLess = visibleCount > 3;

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProducts.length));
  };

  const showLess = () => {
    setVisibleCount(3);
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(3);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Nuestras Sudaderas
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Calidad premium, diseños únicos
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full transition text-sm md:text-base ${
                selectedCategory === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat === 'todos' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Contenedor de imagen - Click para ver en grande */}
              <div 
                className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => openImagePreview(product)}
              >
                <Image
                  src={getCurrentImage(product)}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay con ícono de lupa */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 bg-black/60 rounded-full p-3 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full mb-2">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Colores disponibles:</p>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleColorChange(product.id, color.image);
                        }}
                        className="group relative"
                        title={color.name}
                      >
                        <div
                          className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                            getCurrentImage(product) === color.image 
                              ? 'border-black scale-110 ring-2 ring-offset-1 ring-black' 
                              : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color.code }}
                        />
                        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toLocaleString('es-AR')}
                  </span>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm font-semibold"
                  >
                    Personalizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(hasMore || hasLess) && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            {hasMore && (
              <button
                onClick={showMore}
                className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
              >
                Ver más productos
              </button>
            )}
            {hasLess && (
              <button
                onClick={showLess}
                className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition font-semibold"
              >
                Ver menos
              </button>
            )}
          </div>
        )}

        <div className="text-center mt-6 text-gray-500 text-sm">
          Mostrando {displayedProducts.length} de {filteredProducts.length} productos
        </div>
      </div>

      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition z-50"
            >
              <IoClose size={24} />
            </button>
            
            <div className="relative aspect-square md:aspect-auto md:h-[80vh]">
              <Image
                src={modalImage.url}
                alt={modalImage.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-bold">{modalImage.name}</h3>
              
            </div>
          </div>
        </div>
      )}
    </section>
  );
};