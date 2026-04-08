import { motion } from 'framer-motion';
import { ArrowRight, Plane } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-saving/20 flex items-center justify-center mx-auto mb-6">
          <Plane className="h-7 w-7 text-saving" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
          Descubra quanto sua empresa pode economizar
        </h2>
        <p className="text-lg text-primary-foreground/75 mb-10 max-w-xl mx-auto">
          Solicite uma demonstração do Savings Intelligence e veja dados reais de economia na gestão de viagens corporativas.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-saving text-saving-foreground font-semibold px-10 py-4 rounded-xl hover:brightness-110 transition-all text-lg"
        >
          Solicitar demonstração
          <ArrowRight className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
}
