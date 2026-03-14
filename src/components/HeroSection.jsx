import { Cloud } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        
        <div className="relative w-full max-w-xl flex justify-center -mb-24 mt-8">
            <img 
               src="/nubehug-logo.png?v=4" 
               alt="NubeHug Cloud Security" 
               className="relative z-10 w-full h-auto mix-blend-multiply hover:scale-105 transition-transform duration-700"
            />
        </div>

        <div className="mx-auto max-w-2xl text-center relative z-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-blue-dark sm:text-6xl mb-6">
            NubeHug: Tu espacio seguro en la nube
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 mb-10 max-w-xl mx-auto font-medium">
            Descubre la tranquilidad de almacenar y proteger lo que más te importa.  
            Con la seguridad empresarial que mereces, siempre a tu alcance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-2xl bg-gradient-to-r from-brand-blue-dark to-[#1565c0] px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-blue-dark/30 hover:shadow-brand-blue-dark/50 hover:from-[#1565c0] hover:to-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-dark transition-all duration-300 transform hover:-translate-y-1">
              Empieza ahora, es gratis
            </button>
            <a href="#" className="text-base font-semibold leading-6 text-brand-blue-dark hover:text-brand-cyan transition-colors flex items-center gap-2 group">
              Conoce más sobre nosotros <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </a>
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
