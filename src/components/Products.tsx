import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Wand2, Loader2, ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext';
import { GoogleGenAI } from '@google/genai';

const products = [
  {
    name: 'Business Cards',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Corporate Identity',
  },
  {
    name: 'Brochures & Flyers',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Marketing Materials',
  },
  {
    name: 'Custom Packaging',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Retail & E-commerce',
  },
  {
    name: 'Banners & Signage',
    image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Large Format',
  },
  {
    name: 'Books & Magazines',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Publishing',
  },
  {
    name: 'Wedding Invitations',
    image: 'https://images.unsplash.com/photo-1522062675402-232506e1245e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Personalized',
  },
];

export default function Products() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth > 1024 ? current.clientWidth / 3 : current.clientWidth > 640 ? current.clientWidth / 2 : current.clientWidth;
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const generateSticker = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: `A high quality sticker design of: ${prompt}. Die-cut sticker, white background, vibrant colors, vector art style, flat design, clean edges.`,
      });

      let base64Image = '';
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          base64Image = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          break;
        }
      }

      if (base64Image) {
        setGeneratedImage(base64Image);
      } else {
        setError('Failed to generate image. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while generating the image.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Products</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Print</h3>
            <p className="text-lg text-slate-600">
              Explore our wide range of high-quality printed products designed to elevate your brand and message.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
                aria-label="Previous products"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
                aria-label="Next products"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Request Custom Quote
            </a>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-8 hide-scrollbar"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[65%] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] snap-start shrink-0 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/2] sm:aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-blue-300 text-xs sm:text-sm font-medium mb-1">{product.category}</p>
                <h4 className="text-white text-lg sm:text-xl font-bold mb-4">{product.name}</h4>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart({ id: `prod-${index}`, name: product.name, category: product.category });
                  }}
                  className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg opacity-0 group-hover:opacity-100"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Sticker Generator Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6 w-fit">
                <Wand2 size={16} />
                AI Design Studio
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Design Custom Stickers with AI
              </h3>
              <p className="text-slate-600 mb-8">
                Describe your perfect sticker, and our AI will generate a unique design for you instantly. Use it as inspiration for your next print order!
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="prompt" className="block text-sm font-medium text-slate-700 mb-2">
                    What would you like to design?
                  </label>
                  <textarea
                    id="prompt"
                    rows={3}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A cute astronaut cat floating in space, vibrant colors, die-cut sticker..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all outline-none resize-none"
                  />
                </div>
                
                {error && <p className="text-red-500 text-sm">{error}</p>}
                
                <button
                  onClick={generateSticker}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Generating Design...
                    </>
                  ) : (
                    <>
                      <Wand2 size={20} />
                      Generate Sticker
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100 min-h-[300px]">
              {generatedImage ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-4"
                >
                  <img 
                    src={generatedImage} 
                    alt="AI Generated Sticker" 
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-700 shadow-sm">
                    AI Generated
                  </div>
                </motion.div>
              ) : (
                <div className="text-center text-slate-400 flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                    <Wand2 size={32} className="text-slate-300" />
                  </div>
                  <p>Your generated design will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:hidden flex justify-center">
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
