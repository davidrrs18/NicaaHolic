import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price);
};

export const sendWhatsAppMessage = (name: string, design: string, size: string) => {
  const phoneNumber = '5491123456789'; // Tu número de WhatsApp
  const message = `Hola! Me interesa personalizar una sudadera.%0A%0A` +
    `Nombre: ${name}%0A` +
    `Diseño: ${design}%0A` +
    `Talle: ${size}%0A%0A` +
    `¡Gracias!`;
  
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};