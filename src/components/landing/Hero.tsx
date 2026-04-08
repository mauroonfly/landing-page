import { motion } from 'framer-motion';
import { Plane, ArrowRight } from 'lucide-react';
import heroImg from '@/assets/hero-dashboard.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient min-h-[90vh] flex items-center">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2 bg-glass rounded-full px-4 py-2">
              <Plane className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-semibold text-primary-foreground tracking-wide">
                onfly
              </span>
            </div>
            <span className="bg-saving/20 text-saving rounded-full px-3 py-1 text-xs font-semibold">
              Novo
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6">
            Savings
            <br />
            <span className="text-saving">Intelligence</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
            Descubra quanto sua empresa economiza com a Onfly.
            Inteligência de dados em tempo real sobre voos, hotéis e padrões de compra
            — tudo em um único painel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#funcionalidades"
              className="inline-flex items-center justify-center gap-2 bg-saving text-saving-foreground font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all text-base"
            >
              Conhecer agora
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#metricas"
              className="inline-flex items-center justify-center gap-2 bg-glass text-primary-foreground font-medium px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition-all text-base border border-primary-foreground/20"
            >
              Ver métricas
            </a>
          </div>
        </motion.div>

        {/* Right — Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
            <img
              src={heroImg}
              alt="Dashboard Onfly Savings Intelligence mostrando métricas de economia"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Economia Total</p>
            <p className="text-2xl font-bold text-saving">R$ 14,1 mi</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
