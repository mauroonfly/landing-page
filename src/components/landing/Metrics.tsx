import { motion } from 'framer-motion';
import { TrendingUp, Receipt, Award, BarChart2 } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    label: 'Economia Total vs. Mercado',
    value: 'R$ 197 mi',
    sub: 'em voos + hotéis · Mar 2025 – Mar 2026',
    color: 'text-saving',
  },
  {
    icon: Receipt,
    label: 'Economia Média por Reserva',
    value: 'R$ 172',
    sub: 'quando Onfly é mais barata que o mercado',
    color: 'text-primary',
  },
  {
    icon: Award,
    label: 'Reservas mais Baratas',
    value: '70%',
    sub: 'de 1,6 milhão de tarifas analisadas',
    color: 'text-saving',
  },
  {
    icon: BarChart2,
    label: 'Tarifas Comparadas',
    value: '1,7 mi',
    sub: 'voos com referência de preço disponível',
    color: 'text-primary',
  },
];

export default function Metrics() {
  return (
    <section id="metricas" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Resultados reais
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Números que falam por si
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <m.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                {m.label}
              </p>
              <p className={`text-3xl font-extrabold ${m.color} mb-1`}>
                {m.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
