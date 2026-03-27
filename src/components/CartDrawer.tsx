import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../CartContext';

export default function CartDrawer() {
  const { cart, isDrawerOpen, setIsDrawerOpen, updateQuantity, removeFromCart, totalItems, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    const phoneNumber = '919003535350'; // Replace with actual business number
    const message = `Hello Aadhi Periyandavar, I would like to place an order for:\n\n${cart
      .map((item) => `- ${item.name} (${item.category}) x ${item.quantity}`)
      .join('\n')}\n\nPlease let me know the next steps.`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <ShoppingCart size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Your Print Cart</h2>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs font-bold">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                    <ShoppingCart size={40} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">Your cart is empty</p>
                    <p className="text-slate-500">Add some print types to get started!</p>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex-1">
                      <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">
                        {item.category}
                      </p>
                      <h4 className="font-bold text-slate-900 truncate">{item.name}</h4>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center border border-slate-200 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-slate-50 text-slate-500 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-1 text-sm font-bold text-slate-700 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-slate-50 text-slate-500 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                <div className="flex items-center justify-between text-slate-600">
                  <p className="text-sm font-medium">Total Print Types</p>
                  <p className="font-bold text-slate-900">{cart.length}</p>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  Order via WhatsApp
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
                >
                  Clear All Items
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
