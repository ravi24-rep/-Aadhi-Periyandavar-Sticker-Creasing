import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Let's Discuss Your Project</h3>
          <p className="text-lg text-slate-600">
            Have a question or need a quote? Reach out to us, and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-full shadow-sm text-blue-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Our Location</h4>
                <p className="text-slate-600 leading-relaxed">
                  123 Printing Press Lane,<br />
                  Industrial Area Phase 1,<br />
                  Cityville, State 12345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-full shadow-sm text-blue-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Number</h4>
                <p className="text-slate-600 leading-relaxed">
                  +1 (555) 123-4567<br />
                  +1 (555) 987-6543
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-full shadow-sm text-blue-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Email Address</h4>
                <p className="text-slate-600 leading-relaxed">
                  info@aadhiperiyandavar.com<br />
                  sales@aadhiperiyandavar.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-full shadow-sm text-blue-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Working Hours</h4>
                <p className="text-slate-600 leading-relaxed">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="Quote for Business Cards"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Please describe your printing requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Slot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[450px] relative group"
        >
          <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto text-slate-400 mb-2 h-12 w-12" />
              <p className="text-slate-500 font-medium">Map Loading...</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.621287664366!2d80.2588433!3d13.067439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662057777777%3A0x7777777777777777!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-10 w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
            title="Office Location"
          ></iframe>
          <div className="absolute bottom-6 right-6 z-20">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg text-blue-600 font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <MapPin size={18} />
              Open in Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
