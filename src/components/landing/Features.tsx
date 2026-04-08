import { motion } from 'framer-motion';
import { Building2, Calendar, Route, PieChart } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Savings por Empresa',
    description: 'Veja a economia detalhada de cada empresa: voos, hotéis, total e padrão de antecedência de compra.',
  },
  {
    icon: Calendar,
    title: 'Melhores Dias para Voar',
    description: 'Descubra os dias da semana com ticket médio mais baixo e maior competitividade de tarifas.',
  },
  {
    icon: Route,
    title: 'Análise por Trechos',
    description: 'Top rotas por empresa com ticket médio, antecedência e percentual de tarifas mais baratas que o mercado.',
  },
  {
    icon: PieChart,
    title: 'Padrão de Antecedência',
    description: 'Identifique se a empresa compra com antecedência ideal, de última hora ou de forma mista — e recomendações personalizadas.',
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Funcionalidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inteligência completa em um painel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O Savings Intelligence reúne dados de milhões de reservas para mostrar exatamente onde e como sua empresa está economizando.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
