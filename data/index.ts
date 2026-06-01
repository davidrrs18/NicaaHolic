import { Product, Testimonial, ProcessStep, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '#products' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Hoodie Essential',
    price: 12999,
    image: '/images/hoodie-essential.jpg',
    colors: ['Negro', 'Gris', 'Blanco'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'basic',
  },
  {
    id: '2',
    name: 'Hoodie Premium',
    price: 17999,
    image: '/images/hoodie-premium.jpg',
    colors: ['Negro', 'Azul Marino', 'Borgoña'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'premium',
  },
  {
    id: '3',
    name: 'Oversized Hoodie',
    price: 15999,
    image: '/images/hoodie-oversized.jpg',
    colors: ['Negro', 'Gris Claro', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'oversized',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Martina González',
    role: 'Cliente',
    content: 'La calidad es increíble y el estampado perfecto. Superaron mis expectativas. El proceso de diseño fue súper fácil y el resultado final impecable.',
    rating: 5,
    image: '/images/testimonial-1.jpg',
  },
  {
    id: '2',
    name: 'Lucas Rodríguez',
    role: 'Cliente',
    content: 'Personalicé una sudadera para mi banda y quedó espectacular. El equipo me ayudó con el diseño y la comunicación fue excelente. 10/10.',
    rating: 5,
    image: '/images/testimonial-2.jpg',
  },
  {
    id: '3',
    name: 'Camila Fernández',
    role: 'Cliente',
    content: 'Excelente atención y calidad. Hice un pedido para todo mi equipo y quedaron fascinados. Sin dudas voy a seguir comprando aquí.',
    rating: 5,
    image: '/images/testimonial-3.jpg',
  },
  {
    id: '4',
    name: 'Tomás Martínez',
    role: 'Cliente',
    content: 'Llegó antes de lo esperado y la calidad de la tela es premium. El estampado no se ha dañado después de varios lavados. Muy recomendado.',
    rating: 5,
    image: '/images/testimonial-4.jpg',
  },
  {
    id: '5',
    name: 'Sofía López',
    role: 'Cliente',
    content: 'Amo mi hoodie personalizado! Todo el mundo me pregunta dónde lo compré. El proceso de creación fue muy intuitivo y el resultado perfecto.',
    rating: 5,
    image: '/images/testimonial-5.jpg',
  },
  {
    id: '6',
    name: 'Julián Pérez',
    role: 'Cliente',
    content: 'Compré para regalar y fue un éxito. La personalización quedó impecable y la entrega fue muy rápida. Volveré a comprar sin duda.',
    rating: 5,
    image: '/images/testimonial-6.jpg',
  },
];