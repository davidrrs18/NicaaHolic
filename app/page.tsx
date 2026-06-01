import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}