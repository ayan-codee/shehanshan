import { useCart } from './CartContext';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  Heart,
  Search,
  User,
  Menu,
  X,
  Sparkles,
  Flame,
  ChevronRight
} from 'lucide-react';


export default function Navbar() {
  const { cartCount } = useCart();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 120) {
        if (window.scrollY > lastScrollY) {
          setShow(false);
          setIsSearchOpen(false);
        } else {
          setShow(true);
        }
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } shadow-sm`}
      >
        {/* ROW 1: TOP ANNOUNCEMENT BAR */}
        <div className="bg-neutral-900 text-neutral-200 text-xs py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="hidden sm:flex items-center gap-2">
              <Sparkles size={13} className="text-amber-400 animate-pulse" />
              <span>Free Shipping on Orders Over Rs. 15,000</span>
            </div>
            
            <div className="mx-auto sm:mx-0 flex items-center gap-2 tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>FESTIVE SALE IS LIVE</span>
              <span className="bg-neutral-800 text-amber-300 px-2 py-0.5 rounded text-[10px] uppercase border border-neutral-700">
                CODE: ROYAL2026
              </span>
            </div>
          </div>
        </div>

        {/* ROW 2: LOGO & SEARCH BAR */}
        <div className="bg-white border-b border-neutral-300 py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-800 hover:bg-neutral-100 rounded-full transition"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex flex-col items-center mx-auto md:mx-0 group">
              <img 
                src="/logo.png" 
                alt="Shehanshah Fabric" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center">
                <span className="text-2xl head md:text-3xl tracking-widest lowercase text-neutral-900">
                  SHEHANSHAH
                </span>
              </div>
            </Link>

            {/* Quick Search Bar */}
            <div className="hidden md:flex items-center relative w-72">
              <input 
                type="text" 
                placeholder="Search Suits, Velvet, Silk..."
                className="w-full bg-neutral-50 border border-neutral-200 rounded-full pl-9 pr-4 py-1.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-800"
              />
              <Search size={15} className="absolute left-3 text-neutral-400" />
            </div>

          </div>
        </div>

        {/* ROW 3: NAV LINKS & ICONS */}
        <div className="bg-white/95 backdrop-blur-md border-b border-neutral-200 py-2.5 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm tracking-wider uppercase text-neutral-700">
              <Link 
                to="/" 
                className={`relative py-1 transition-colors hover:text-neutral-900 group ${isActive('/') ? 'text-neutral-900' : ''}`}
              >
                Home
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full transition-transform duration-300 ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>

              <Link 
                to="/shop" 
                className={`relative py-1 transition-colors hover:text-neutral-900 group ${isActive('/shop') ? 'text-neutral-900' : ''}`}
              >
                Shop All
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full transition-transform duration-300 ${isActive('/shop') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>

              <Link 
                to="/shop?cat=pret" 
                className="relative py-1 transition-colors hover:text-neutral-900 group flex items-center gap-1.5"
              >
                Pret Collection
                <span className="text-[9px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded lowercase">new</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </Link>

              <Link 
                to="/shop?cat=unstitched" 
                className="relative py-1 transition-colors hover:text-neutral-900 group"
              >
                Unstitched
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 rounded-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </Link>

              <Link 
                to="/shop?sale=true" 
                className="relative py-1 text-rose-600 transition hover:opacity-80 flex items-center gap-1 group"
              >
                <Flame size={15} className="fill-rose-500 text-rose-500 animate-bounce" />
                Festive Sale
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </Link>
            </nav>

            {/* Action Icons */}
            <div className="flex items-center gap-3 sm:gap-4 text-neutral-800 ml-auto md:ml-0">
              
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-1.5 hover:bg-neutral-100 rounded-full transition"
                title="Search"
              >
                <Search size={20} />
              </button>

              <button 
                className="p-1.5 hover:bg-neutral-100 rounded-full transition relative group"
                title="Wishlist"
              >
                <Heart size={20} />
                <span className="absolute -top-0.5 -right-0.5 bg-neutral-900 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              <Link 
                to="/cart" 
                className="p-1.5 hover:bg-neutral-100 rounded-full transition relative group flex items-center justify-center"
                title="Cart"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-0.5 -right-0.5 bg-rose-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
  {cartCount}
</span>
              </Link>

              <button 
                className="p-1.5 hover:bg-neutral-100 rounded-full transition"
                title="Account"
              >
                <User size={20} />
              </button>

            </div>

          </div>

          {/* Search Dropdown for Mobile */}
          {isSearchOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-neutral-200">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  placeholder="Search Velvet Suits, Lawn..."
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-full pl-9 pr-8 py-2 text-xs text-neutral-800"
                  autoFocus
                />
                <Search size={16} className="absolute left-3 text-neutral-400" />
                <button onClick={() => setIsSearchOpen(false)} className="absolute right-3">
                  <X size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6 space-y-4">
            <nav className="flex flex-col gap-4 text-sm uppercase tracking-wider text-neutral-800">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-between items-center border-b border-neutral-100 py-2">
                <span>Home</span>
                <ChevronRight size={16} className="text-neutral-400" />
              </Link>

              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-between items-center border-b border-neutral-100 py-2">
                <span>Shop All</span>
                <ChevronRight size={16} className="text-neutral-400" />
              </Link>

              <Link to="/shop?cat=pret" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-between items-center border-b border-neutral-100 py-2">
                <span>Pret Collection</span>
                <ChevronRight size={16} className="text-neutral-400" />
              </Link>

              <Link to="/shop?cat=unstitched" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-between items-center border-b border-neutral-100 py-2">
                <span>Unstitched Lawn</span>
                <ChevronRight size={16} className="text-neutral-400" />
              </Link>

              <Link to="/shop?sale=true" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-between items-center text-rose-600 py-2">
                <div className="flex items-center gap-2">
                  <Flame size={16} className="fill-rose-500 text-rose-500" />
                  <span>Festive Sale</span>
                </div>
                <span className="bg-rose-600 text-white text-[10px] px-2 py-0.5 rounded-full">40% OFF</span>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Spacing Div to Prevent Content Overlap */}
      <div className="h-[140px] md:h-[155px]"></div>
    </>
  );
}