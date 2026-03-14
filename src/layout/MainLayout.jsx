import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

export default function MainLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white relative">
      <header className="bg-blue-50/90 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100/50 shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex flex-1">
            <Link to="/" onClick={closeMenu} className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <span className="sr-only">NubeHug</span>
              <img 
                src="/nubehug-logo.png?v=4" 
                alt="NubeHug Logo" 
                className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
              />
              <span className="text-xl sm:text-2xl font-extrabold text-[#0d47a1] tracking-tight">NubeHug</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-blue-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            {user ? (
              <>
                <Link to="/talento" className="text-sm font-bold leading-6 text-purple-600 hover:text-purple-700 transition-colors mr-2 whitespace-nowrap">
                  NubeTalento 🎯
                </Link>
                <Link to="/alianzas" className="text-sm font-bold leading-6 text-emerald-500 hover:text-emerald-600 transition-colors mr-2 whitespace-nowrap">
                  Nube Alianzas 🤝
                </Link>
                <Link to="/dashboard" className="text-sm font-bold leading-6 text-[#00bcd4] hover:text-[#029ab0] transition-colors whitespace-nowrap">
                  Mi Dashboard 📊
                </Link>
                <Link to="/academy" className="text-sm font-bold leading-6 text-[#00bcd4] hover:text-[#029ab0] transition-colors whitespace-nowrap">
                  Academy 🎓
                </Link>
                <div className="flex items-center gap-3 pl-4 border-l border-brand-blue-light/50">
                  <span className="text-sm font-bold text-brand-blue-dark">{user.name}</span>
                  <img src={user.avatar} alt="Avatar" className="h-8 w-8 rounded-full border border-brand-blue-light" />
                  <button onClick={handleLogout} className="text-xs font-semibold text-slate-500 hover:text-red-500 ml-2 transition-colors">
                    Salir
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-bold leading-6 text-brand-blue-dark hover:text-[#00bcd4] transition-colors">
                  Iniciar sesión
                </Link>
                <Link to="/signup" className="text-sm font-bold leading-6 text-white bg-gradient-to-r from-brand-blue-dark to-[#1565c0] shadow-md shadow-brand-blue-dark/20 hover:from-[#1565c0] hover:to-brand-blue-dark px-5 py-2.5 rounded-xl transition-all transform hover:-translate-y-0.5">
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-blue-100 shadow-xl z-50 flex flex-col py-4 px-6 gap-4">
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                   <img src={user.avatar} alt="Avatar" className="h-10 w-10 rounded-full border border-brand-blue-light" />
                   <div className="flex flex-col">
                     <span className="text-sm font-bold text-brand-blue-dark">{user.name}</span>
                     <button onClick={handleLogout} className="text-xs text-left font-semibold text-red-500 hover:text-red-700 transition-colors">
                       Cerrar sesión
                     </button>
                   </div>
                </div>
                <Link to="/talento" onClick={closeMenu} className="text-base font-bold text-purple-600 block">
                  NubeTalento 🎯
                </Link>
                <Link to="/alianzas" onClick={closeMenu} className="text-base font-bold text-emerald-500 block">
                  Nube Alianzas 🤝
                </Link>
                <Link to="/dashboard" onClick={closeMenu} className="text-base font-bold text-[#00bcd4] block">
                  Mi Dashboard 📊
                </Link>
                <Link to="/academy" onClick={closeMenu} className="text-base font-bold text-[#00bcd4] block">
                  Academy 🎓
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4 py-2">
                <Link to="/login" onClick={closeMenu} className="text-base font-bold text-brand-blue-dark block text-center py-3 bg-blue-50 rounded-xl">
                  Iniciar sesión
                </Link>
                <Link to="/signup" onClick={closeMenu} className="text-base font-bold text-white block text-center py-3 bg-gradient-to-r from-brand-blue-dark to-[#1565c0] rounded-xl">
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white py-12 border-t border-brand-blue-light/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} NubeHug. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
