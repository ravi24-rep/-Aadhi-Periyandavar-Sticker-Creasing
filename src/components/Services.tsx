import { motion } from 'motion/react';
import { Layers, Monitor, Droplet, Package, BookOpen, PenTool, ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext';

const services = [
  {
    title: 'Offset Printing',
    description: 'High-volume, cost-effective printing with exceptional color accuracy and crisp details for brochures, catalogs, and books.',
    icon: Layers,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    title: 'Digital Printing',
    description: 'Fast turnaround for short-run projects. Ideal for business cards, flyers, and personalized marketing materials.',
    icon: Monitor,
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  {
    title: 'Screen Printing',
    description: 'Durable and vibrant prints on various materials including apparel, promotional items, and signage.',
    icon: Droplet,
    color: 'text-red-600',
    bg: 'bg-red-100',
  },
  {
    title: 'Packaging Solutions',
    description: 'Custom boxes, labels, and packaging designs that make your product stand out on the shelf.',
    icon: Package,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    title: 'Binding & Finishing',
    description: 'Professional finishing touches including perfect binding, spiral binding, lamination, and UV coating.',
    icon: BookOpen,
    color: 'text-amber-600',
    bg: 'bg-amber-100',
  },
  {
    title: 'Graphic Design',
    description: 'Creative design services to help you conceptualize and prepare your artwork for print.',
    icon: PenTool,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
];

export default function Services() {
  const { addToCart } = useCart();
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Printing Solutions</h3>
          <p className="text-lg text-slate-600">
            We offer a wide range of printing services using state-of-the-art technology to meet all your personal and business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                onClick={() => addToCart({ id: `serv-${index}`, name: service.title, category: 'Service' })}
                className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/btn"
              >
                Add to Cart
                <ShoppingCart size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
