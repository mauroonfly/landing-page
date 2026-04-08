import { motion } from 'framer-motion';

const companies = [
  'GRUPO NC', 'Fasttel Engenharia', 'AGCO', 'Arco Educação', 'Autoglass',
  'PicPay', 'Senior Sistemas', 'BliP', 'Bureau Veritas', 'DASA',
  'Madero', 'Algar Telecom', 'Bp Bioenergy', 'SEBRAE', 'Grupo Multilaser',
];

export default function Companies() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Empresas que já economizam
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            +30 empresas monitoradas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {companies.map((name) => (
            <span
              key={name}
              className="bg-background border border-border rounded-full px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 hover:shadow-sm transition-all"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
