import { motion } from 'motion/react';
import { Award, Clock, Users, Zap } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '25+', icon: Clock },
  { label: 'Happy Clients', value: '10k+', icon: Users },
  { label: 'Projects Completed', value: '50k+', icon: Award },
  { label: 'Fast Delivery', value: '24/7', icon: Zap },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598301257982-0cf014d13266?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Printing Press Facility"
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block border-4 border-white">
              <p className="text-5xl font-extrabold mb-2">25+</p>
              <p className="text-blue-100 font-medium text-lg">Years of Printing<br/>Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Vision, Our Precision
            </h3>
            <div className="space-y-6 text-lg text-slate-600 mb-10">
              <p>
                Founded over two decades ago, Aadhi Periyandavar Sticker Creasing has grown from a small local shop to a state-of-the-art printing facility. We combine traditional craftsmanship with modern technology to deliver exceptional results.
              </p>
              <p>
                Our commitment to quality, reliability, and customer satisfaction has made us the preferred printing partner for businesses and individuals alike. We don't just print; we help you communicate effectively.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
