import React from 'react';
import { Cloud, Cloudy, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { user } = useAuth();

  // Logged In State: Dynamic Board
  if (user) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50/50 to-cyan-100 py-12 sm:py-20 min-h-[calc(100vh-80px)] flex flex-col items-center">
        {/* Decorative Clouds */}
        <div className="absolute top-10 left-10 text-white/40 animate-float-slow"><Cloudy size={120} /></div>
        <div className="absolute top-40 right-20 text-white/30 animate-float"><Cloudy size={80} /></div>
        <div className="absolute bottom-20 left-1/4 text-white/50 animate-float-slow" style={{ animationDelay: '2s' }}><Cloudy size={100} /></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-blue-dark sm:text-5xl mb-4">
              ¡Hola de nuevo, {user.name}! 👋
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              ¿A dónde quieres ir hoy? Selecciona tu destino espacial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Link to="/dashboard" className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group">
              <div className="h-40 w-full mb-6 flex justify-center items-center">
                 <img src="/nubehug-logo.png?v=4" alt="Dashboard" className="h-32 w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-nimbus-blue transition-colors">Mi Dashboard 📊</h2>
              <p className="text-sm text-slate-500 font-medium mb-4">Tu panel de control financiero y métricas principales.</p>
              <div className="mt-auto bg-blue-50 text-nimbus-blue px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 group-hover:bg-nimbus-blue group-hover:text-white transition-colors">
                Entrar <ArrowRight size={16} />
              </div>
            </Link>

            <Link to="/academy" className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group">
              <div className="h-40 w-full mb-6 flex justify-center items-center">
                 <img src="/nubehug_3d_academy_transparent.png" alt="Academy" className="h-40 w-auto object-contain animate-float group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-nimbus-blue transition-colors">Academy 🎓</h2>
              <p className="text-sm text-slate-500 font-medium mb-4">Aprende y haz crecer tu negocio a tu ritmo.</p>
              <div className="mt-auto bg-blue-50 text-nimbus-blue px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 group-hover:bg-nimbus-blue group-hover:text-white transition-colors">
                Estudiar <ArrowRight size={16} />
              </div>
            </Link>

            <Link to="/alianzas" className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group">
              <div className="h-40 w-full mb-6 flex justify-center items-center">
                 <img src="/nubehug_3d_alianzas_transparent.png" alt="Alianzas" className="h-40 w-auto object-contain animate-float group-hover:scale-110 transition-transform duration-500" style={{ animationDelay: '1s' }} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-emerald-500 transition-colors">Nube Alianzas 🤝</h2>
              <p className="text-sm text-slate-500 font-medium mb-4">Conecta, colabora y ahorra compartiendo envíos.</p>
              <div className="mt-auto bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                Conectar <ArrowRight size={16} />
              </div>
            </Link>

            <Link to="/talento" className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group">
              <div className="h-40 w-full mb-6 flex justify-center items-center">
                 <img src="/nubehug_3d_talento_transparent.png" alt="Talento" className="h-48 w-auto object-contain animate-float group-hover:scale-110 transition-transform duration-500" style={{ animationDelay: '2s' }} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-purple-500 transition-colors">NubeTalento 🎯</h2>
              <p className="text-sm text-slate-500 font-medium mb-4">Marketplace de micro-tareas y servicios.</p>
              <div className="mt-auto bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                Explorar <ArrowRight size={16} />
              </div>
            </Link>

          </div>
        </div>
      </section>
    );
  }

  // Logged Out State: Public Landing
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        
        <div className="relative w-full max-w-xl flex justify-center -mb-24 mt-8">
            <img 
               src="/nubehug-logo.png?v=4" 
               alt="NubeHug Logo" 
               className="relative z-10 w-full h-auto mix-blend-multiply hover:scale-105 transition-transform duration-700"
            />
        </div>

        <div className="mx-auto max-w-2xl text-center relative z-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-blue-dark sm:text-6xl mb-6">
            NubeHug: El impulso que tu sueño necesita para hacerse realidad
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 mb-10 max-w-xl mx-auto font-medium">
            Somos el puente entre tu gran producto y el éxito comercial. Conecta, aprende y colabora con otros emprendedores para llevar tu tienda al siguiente nivel.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-col sm:flex-row gap-y-4">
            <Link to="/signup" className="rounded-2xl bg-gradient-to-r from-brand-blue-dark to-[#1565c0] px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-blue-dark/30 hover:shadow-brand-blue-dark/50 hover:from-[#1565c0] hover:to-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-dark transition-all duration-300 transform hover:-translate-y-1">
              Empieza ahora, es gratis
            </Link>
            <Link to="/login" className="text-base font-semibold leading-6 text-brand-blue-dark hover:text-brand-cyan transition-colors flex items-center gap-2 group">
              Inicia Sesión <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00bcd4] to-[#01579b] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] mix-blend-multiply"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}
