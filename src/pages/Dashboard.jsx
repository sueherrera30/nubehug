import React from 'react';
import { Coins, ChevronRight, Star } from 'lucide-react';

export default function Dashboard() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50/50 to-cyan-100 py-8 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-brand-blue-light/30 p-6 flex items-start gap-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center flex-shrink-0 relative">
               <img className="h-20 w-20 max-w-none absolute -top-3 -left-3 animate-float-slow drop-shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500" src="/nubehug_3d_logistics_transparent.png" alt="" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 flex items-center gap-2 group-hover:text-emerald-700 transition-colors">
                Envíos Nube <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">ACTIVO</span>
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">Tienes <strong className="text-emerald-600">3 envíos pendientes</strong> de recolección para hoy.</p>
              <button className="mt-3 text-sm text-emerald-600 font-bold hover:text-emerald-700 flex items-center transition-colors">
                Gestionar envíos <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-brand-blue-light/30 p-6 flex items-start gap-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-brand-blue-light to-blue-50 flex items-center justify-center flex-shrink-0 relative">
               <img className="h-20 w-20 max-w-none absolute -top-3 -left-3 animate-float drop-shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500" src="/nubehug_3d_marketplace_transparent.png" alt="" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 flex items-center gap-2 group-hover:text-nimbus-blue transition-colors">
                Aplicaciones <span className="text-[10px] bg-blue-100 text-nimbus-blue px-2 py-0.5 rounded-full font-bold">SUGERENCIA</span>
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">Instala "Facturación Automática" para ahorrar tiempo.</p>
              <button className="mt-3 text-sm text-nimbus-blue font-bold hover:text-blue-700 flex items-center transition-colors">
                Ver en la tienda <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Top Grid: Logistics & AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Left Section (Logística) - Dynamic Infographic Style */}
          <div className="bg-blue-50/90 backdrop-blur-md rounded-3xl shadow-sm border border-blue-100/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="p-8 flex flex-col justify-center items-center relative h-64 overflow-hidden">
               {/* Huge abstract background number */}
               <div className="absolute -right-4 -bottom-10 text-[180px] font-black text-brand-blue-dark opacity-5 leading-none select-none">
                 85
               </div>
               
               <img 
                 src="/nubehug_3d_logistics_transparent.png" 
                 alt="Logística NubeHug" 
                 className="h-40 w-auto object-contain z-10 animate-float"
               />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-extrabold text-brand-blue-dark">Pool Logístico</h2>
              <p className="text-gray-600 mt-2 font-medium">Estás al <span className="text-2xl font-black text-nimbus-blue ml-1 mr-1">85%</span> de tu meta.</p>
              <div className="mt-4 w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden">
                <div className="bg-nimbus-blue h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-sm font-semibold text-gray-500">🔥 ¡Faltan solo 2 pedidos para tu tarifa VIP en México!</p>
            </div>
          </div>

          {/* Right Section (Academia IA) - Dynamic Infographic Style */}
          <div className="bg-blue-50/90 backdrop-blur-md rounded-3xl shadow-sm border border-blue-100/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="p-8 flex flex-col justify-center items-center relative h-64 overflow-hidden">
               {/* Huge abstract background number */}
               <div className="absolute -left-10 -top-4 text-[180px] font-black text-nimbus-blue opacity-5 leading-none select-none">
                 IA
               </div>

               <img 
                 src="/nubehug_3d_ai_transparent.png" 
                 alt="IA NubeHug" 
                 className="h-44 w-auto object-contain z-10 animate-float-slow"
               />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                <h2 className="text-xl font-extrabold text-gray-900">Alerta de Conversión: 0.8%</h2>
              </div>
              <p className="text-gray-600 mt-2 font-medium">Nuestro robot detectó una caída en tus ventas.</p>
              <button className="mt-5 w-full bg-nimbus-blue hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-colors flex justify-center items-center gap-2">
                Mejorar fotos con IA <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section (Marketplace) */}
        <div className="mt-12 bg-blue-50/90 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-blue-100/50">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
               <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center p-2">
                  <img src="/nubehug_3d_marketplace_transparent.png" alt="Herramientas" className="w-full h-full object-contain hover:animate-bounce" />
               </div>
               <div>
                  <h2 className="text-2xl font-extrabold text-gray-900">Aliados NubeHug</h2>
                  <p className="text-gray-500 font-medium">Servicios premium para potenciar tu tienda.</p>
               </div>
            </div>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-xl transition-colors">
              Explorar Todos
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border-2 border-gray-100 p-5 hover:border-brand-blue-light hover:shadow-md transition-all duration-300 cursor-pointer group bg-gray-50/50 hover:bg-white hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-full ring-4 ring-white shadow-sm overflow-hidden relative">
                  <img src="https://ui-avatars.com/api/?name=Ana+Ruiz&background=f3e8ff&color=9333ea" alt="Ana" className="absolute -top-2 -left-2 h-16 w-16 object-cover scale-150 group-hover:scale-[1.65] transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Ana Ruiz</h3>
                  <div className="flex items-center text-xs text-amber-500 font-bold">
                    <Star className="h-3.5 w-3.5 fill-amber-500 mr-1" /> 4.9 <span className="text-gray-400 font-medium ml-1">(Fotografía)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-100">
                <span className="text-lg font-black text-brand-blue-dark flex items-center gap-1">
                  <Coins className="h-4 w-4 text-yellow-500" /> 200
                </span>
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">$1,500 MXN</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border-2 border-gray-100 p-5 hover:border-brand-blue-light hover:shadow-md transition-all duration-300 cursor-pointer group bg-gray-50/50 hover:bg-white hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-full ring-4 ring-white shadow-sm overflow-hidden relative">
                  <img src="https://ui-avatars.com/api/?name=Luis+P&background=dcfce7&color=16a34a" alt="Luis" className="absolute -top-2 -left-2 h-16 w-16 object-cover scale-150 group-hover:scale-[1.65] transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">Luis Pérez</h3>
                  <div className="flex items-center text-xs text-amber-500 font-bold">
                    <Star className="h-3.5 w-3.5 fill-amber-500 mr-1" /> 5.0 <span className="text-gray-400 font-medium ml-1">(SEO)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-100">
                <span className="text-lg font-black text-brand-blue-dark flex items-center gap-1">
                  <Coins className="h-4 w-4 text-yellow-500" /> 150
                </span>
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">$990 MXN</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border-2 border-gray-100 p-5 hover:border-brand-blue-light hover:shadow-md transition-all cursor-pointer group bg-gray-50/50 hover:bg-white">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://ui-avatars.com/api/?name=Marta+G&background=ffedd5&color=ea580c" alt="Marta" className="h-12 w-12 rounded-full ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-base font-bold text-gray-900">Marta Gómez</h3>
                  <div className="flex items-center text-xs text-amber-500 font-bold">
                    <Star className="h-3.5 w-3.5 fill-amber-500 mr-1" /> 4.8 <span className="text-gray-400 font-medium ml-1">(Diseño Web)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-3 border border-gray-100">
                <span className="text-lg font-black text-brand-blue-dark flex items-center gap-1">
                  <Coins className="h-4 w-4 text-yellow-500" /> 400
                </span>
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md">$3,200 MXN</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
