import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const PRODUCT_IMAGES = [
  "https://i.postimg.cc/TPYRDsxF/1772154400297-Photoroom.png",
  "https://i.postimg.cc/pr54jfyS/nano-banana-removed-Photoroom.png",
  "https://i.postimg.cc/pdPwS518/nano-banana-removed2-Photoroom.png",
  "https://i.postimg.cc/Qx1xG50C/nano-banana-removed-(1)-Photoroom.png"
];

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference pointer-events-none"
    >
      <div className="w-16"></div> {/* Spacer for balance */}
      <Link to="/" className="text-2xl font-serif tracking-widest text-brand-offwhite pointer-events-auto">
        NEVERSET
      </Link>
      <div className="flex items-center gap-6 pointer-events-auto">
        <Link 
          to="/product"
          className="text-xs font-bold tracking-[0.2em] text-brand-offwhite hover:text-brand-offwhite/70 transition-colors uppercase"
        >
          Shop
        </Link>
        <Link to="/product" className="text-brand-offwhite hover:text-brand-offwhite/70 transition-colors">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        </Link>
      </div>
    </motion.nav>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen"
    >
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="flex flex-col items-center max-w-5xl mx-auto space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter bg-gradient-to-r from-gray-400 via-gray-100 to-gray-500 inline-block text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            THE HEAVYWEIGHT<br />STANDARD.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase max-w-2xl text-brand-offwhite/70 leading-relaxed"
          >
            240gsm Premium Cotton. Flawless oversized drape. Strictly limited allocation. Designed for the elite.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center pt-8 w-full"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-offwhite/60">
                BATCH 001: ONLY 3 UNITS REMAINING WORLDWIDE.
              </span>
            </div>
            <button 
              onClick={() => navigate('/product')}
              className="bg-white text-black px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-all w-full sm:w-auto rounded-none"
            >
              Acquire Now
            </button>
            <span className="font-sans text-[10px] font-bold tracking-[0.1em] uppercase text-brand-offwhite/40 mt-6">
              Orders dispatch in 24 hours. No restocks.
            </span>
          </motion.div>
        </div>
      </section>

      {/* Anti-Pitch Manifesto */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 flex items-center justify-center min-h-[60vh]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-10 tracking-wide"
          >
            NOT FOR EVERYONE.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-sm md:text-base text-brand-offwhite/70 mx-auto leading-relaxed tracking-wide"
          >
            NEVERSET is a uniform for the relentless. We don't do loud logos or fleeting trends. We engineer heavy, 240-gram armor for those who operate in silence. If you are looking for attention, look elsewhere. If you are looking for higher ground, you're in the right place.
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 min-h-[80vh] flex flex-col items-center justify-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-serif tracking-widest mb-20 text-center"
        >
          THE COLLECTION
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          onClick={() => navigate('/product')}
          className="group cursor-pointer flex flex-col items-center max-w-md w-full"
        >
          <div className="w-full aspect-[4/5] bg-transparent mb-8 overflow-hidden relative">
            <img 
              src={PRODUCT_IMAGES[0]} 
              alt="NEVERSET T-Shirt" 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
            />
            <div className="absolute inset-0 bg-brand-offwhite/0 group-hover:bg-brand-offwhite/5 transition-colors duration-700" />
          </div>
          <div className="text-center w-full flex flex-col items-center">
            <h3 className="font-serif text-xl md:text-2xl tracking-wide mb-3 group-hover:text-brand-offwhite/80 transition-colors">NEVERSET 240gsm Oversized T-Shirt</h3>
            <div className="flex flex-col items-center mb-6">
              <span className="bg-white text-black px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase mb-2">
                [ BATCH 001: INITIATION PRICE ]
              </span>
              <div className="flex items-center gap-3">
                <span className="font-sans text-sm tracking-[0.1em] text-neutral-500 line-through">MAD 249.00</span>
                <span className="font-sans text-base font-bold tracking-[0.1em] text-white">MAD 179.00</span>
              </div>
            </div>
            <div className="h-px w-12 bg-slate-600 group-hover:w-24 group-hover:bg-brand-offwhite transition-all duration-500 mb-6" />
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-offwhite/50 group-hover:text-brand-offwhite transition-colors">
              View Artifact
            </span>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const sizes = ['S', 'M', 'L', 'XL'];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!size || !fullName.trim() || !phone.trim() || !city.trim() || !address.trim()) {
      setError('INCOMPLETE DATA. FILL ALL FIELDS.');
      return;
    }

    setIsProcessing(true);

    const payload = {
      access_key: "1105ddb7-2a7e-424c-ae3f-3f9f5f6a378e",
      subject: "⬛ NEW NEVERSET ORDER ⬛",
      from_name: "NEVERSET Store",
      botcheck: false,
      Product: "240gsm Oversized T-Shirt (Black)",
      Size: size,
      Price: "MAD 179.00",
      Customer_Name: fullName,
      Phone: phone,
      City: city,
      Address: address
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        setError('CONNECTION ERROR. PLEASE TRY AGAIN.');
      }
    } catch (err) {
      setError('CONNECTION ERROR. PLEASE TRY AGAIN.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen pt-24 pb-12"
    >
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Visuals */}
          <div className="flex flex-col space-y-4 lg:sticky lg:top-32">
            {/* Desktop Main Image */}
            <motion.div 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block w-full aspect-[4/5] relative overflow-hidden bg-transparent"
            >
              <img 
                src={PRODUCT_IMAGES[activeImage]} 
                alt="NEVERSET T-Shirt" 
                className="w-full h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
            
            {/* Desktop Thumbnails */}
            <div className="hidden lg:grid grid-cols-4 gap-4">
              {PRODUCT_IMAGES.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-[4/5] overflow-hidden transition-all duration-300 bg-transparent ${activeImage === idx ? 'opacity-100 ring-1 ring-brand-offwhite' : 'opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" />
                </button>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden relative w-[calc(100%+3rem)] -ml-6 md:w-[calc(100%+6rem)] md:-ml-12 aspect-[4/5] overflow-hidden bg-transparent mb-8">
              <div 
                className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.clientWidth;
                  const newIndex = Math.round(scrollLeft / width);
                  setActiveImage(newIndex);
                }}
              >
                {PRODUCT_IMAGES.map((img, idx) => (
                  <div key={idx} className="w-full h-full flex-shrink-0 snap-center bg-transparent">
                    <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]" />
                  </div>
                ))}
              </div>
              {/* Mobile Indicator */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-widest text-brand-offwhite border border-slate-600/50">
                {activeImage + 1} / {PRODUCT_IMAGES.length}
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Form / Success State */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center border border-slate-600/50 p-12 bg-black/20 backdrop-blur-sm">
                <h2 className="font-serif text-3xl md:text-4xl tracking-widest mb-6 text-brand-offwhite">ACQUISITION CONFIRMED.</h2>
                <p className="font-sans text-sm tracking-wide text-brand-offwhite/60 leading-relaxed max-w-md mb-12">
                  Your order for the NEVERSET 240gsm T-Shirt has been securely received. Our team will contact you shortly for dispatch. Welcome to the doctrine.
                </p>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-transparent border border-brand-offwhite text-brand-offwhite px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-offwhite hover:text-brand-black transition-all rounded-none"
                >
                  Return
                </button>
              </div>
            ) : (
              <>
                <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">NEVERSET 240gsm Oversized T-Shirt</h1>
                <div className="mb-12">
                  <span className="inline-block bg-white text-black px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                    [ BATCH 001: INITIATION PRICE ]
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-xl tracking-tight text-neutral-500 line-through">MAD 249.00</span>
                    <span className="font-sans text-3xl font-bold tracking-tight text-white">MAD 179.00</span>
                  </div>
                </div>

                <div className="mb-12">
                  <span className="block font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-offwhite/50 mb-4">Select Size</span>
                  <div className="grid grid-cols-4 gap-3">
                    {sizes.map(s => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`py-4 text-sm font-medium transition-all border ${size === s ? 'bg-brand-offwhite text-brand-black border-brand-offwhite' : 'border-slate-600 text-brand-offwhite/70 hover:border-brand-offwhite/50'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-600/50 mb-12" />

                <form className="space-y-6" onSubmit={handleOrder}>
                  <div>
                    <label className="block font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-offwhite/50 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-transparent border border-slate-600 text-brand-offwhite px-4 py-4 text-sm focus:outline-none focus:border-brand-offwhite transition-colors rounded-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-offwhite/50 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent border border-slate-600 text-brand-offwhite px-4 py-4 text-sm focus:outline-none focus:border-brand-offwhite transition-colors rounded-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-offwhite/50 mb-2">City</label>
                    <input 
                      type="text" 
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-transparent border border-slate-600 text-brand-offwhite px-4 py-4 text-sm focus:outline-none focus:border-brand-offwhite transition-colors rounded-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-sans text-xs font-bold tracking-[0.2em] uppercase text-brand-offwhite/50 mb-2">Detailed Address</label>
                    <textarea 
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-transparent border border-slate-600 text-brand-offwhite px-4 py-4 text-sm focus:outline-none focus:border-brand-offwhite transition-colors rounded-none resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full bg-brand-offwhite text-brand-black py-5 mt-4 text-sm font-bold tracking-[0.2em] uppercase transition-all rounded-none ${isProcessing ? 'cursor-wait opacity-80' : 'hover:bg-opacity-90'}`}
                  >
                    {isProcessing ? 'PROCESSING...' : 'Confirm Order'}
                  </button>
                  
                  {error && (
                    <p className="text-center font-sans text-[10px] font-bold tracking-[0.1em] uppercase text-red-500 mt-4">
                      {error}
                    </p>
                  )}
                  
                  <p className="text-center font-sans text-[10px] font-bold tracking-[0.1em] uppercase text-brand-offwhite/40 mt-4">
                    Cash on Delivery. Free Nationwide Shipping.
                  </p>
                </form>

                <div className="pt-16 mt-16 border-t border-slate-600/50">
                  <h3 className="font-serif text-xl mb-8 tracking-wide text-brand-offwhite">THE ANATOMY</h3>
                  <ul className="space-y-6 font-sans text-sm tracking-wide text-brand-offwhite/70">
                    <li className="flex items-start gap-4">
                      <span className="w-1 h-1 bg-brand-offwhite/50 block mt-2 flex-shrink-0"></span> 
                      <span><strong className="text-brand-offwhite font-medium">The Weight:</strong> 240gsm High-Density Armor. Falls perfectly. Doesn't cling.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1 h-1 bg-brand-offwhite/50 block mt-2 flex-shrink-0"></span> 
                      <span><strong className="text-brand-offwhite font-medium">The Silhouette:</strong> Architecturally oversized. Dropped shoulders for a stoic, relaxed dominance.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-1 h-1 bg-brand-offwhite/50 block mt-2 flex-shrink-0"></span> 
                      <span><strong className="text-brand-offwhite font-medium">The Mark:</strong> Surgical precision off-white embroidery. Quiet but impossible to ignore.</span>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - React Router v6 Routes accepts key but types don't reflect it */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-brand-offwhite font-sans selection:bg-brand-offwhite selection:text-brand-black relative">
      {/* Solid Black Background */}
      <div className="pointer-events-none fixed inset-0 z-[-2] bg-black" />
      
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}
