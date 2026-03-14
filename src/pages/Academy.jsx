import React, { useState } from 'react';
import { Search, Megaphone, PackageSearch, ReceiptText, PlayCircle, Clock, BookOpen, Star, Cloudy } from 'lucide-react';

export default function Academy() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = [
    'Todos', 'Finanzas & SAT', 'Marketing Digital', 'Logística', 
    'Gestión de Inventarios', 'Legal & Registro', 'Sustentabilidad'
  ];

  // Dummy data para los cursos
  const coursesDB = [
    { id: 1, title: 'SAT para Principiantes: Tu RFC sin miedo', category: 'Finanzas & SAT', level: 'Básico', duration: '2 min', type: 'Legal', image: '/course_sat.png', rating: 4.8 },
    { id: 2, title: 'Administra tu inventario como experta', category: 'Gestión de Inventarios', level: 'Intermedio', duration: '4 min', type: 'Logística', image: '/course_inventory.png', rating: 4.9 },
    { id: 3, title: 'Fotografía de producto con tu celular', category: 'Marketing Digital', level: 'Básico', duration: '5 min', type: 'Marketing', image: '/course_photo.png', rating: 5.0 },
    { id: 4, title: '¿Cómo proyectar tus ventas del mes?', category: 'Finanzas & SAT', level: 'Intermedio', duration: '7 min', type: 'Finanzas', image: '/course_sales.png', rating: 4.7 },
    { id: 5, title: 'Estrategias de precios psicológicos', category: 'Marketing Digital', level: 'Avanzado', duration: '10 min', type: 'Ventas', image: '/course_photo.png', rating: 4.9 },
    { id: 6, title: 'Envíos internacionales básicos', category: 'Logística', level: 'Intermedio', duration: '15 min', type: 'Envíos', image: '/course_inventory.png', rating: 4.5 },
    { id: 7, title: 'Registro de marca en el IMPI', category: 'Legal & Registro', level: 'Básico', duration: '8 min', type: 'Legal', image: '/course_sat.png', rating: 4.8 },
    { id: 8, title: 'Empaques ecológicos rentables', category: 'Sustentabilidad', level: 'Básico', duration: '6 min', type: 'Diseño', image: '/course_inventory.png', rating: 4.6 },
    { id: 9, title: 'Campaña de Ads desde Cero', category: 'Marketing Digital', level: 'Básico', duration: '12 min', type: 'Ads', image: '/course_sales.png', rating: 4.9 },
  ];

  const filteredCourses = activeCategory === 'Todos' 
    ? coursesDB 
    : coursesDB.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50/50 to-cyan-100 py-8 font-sans relative overflow-hidden">
      {/* Decorative Clouds */}
      <div className="absolute top-10 left-10 text-white/40 animate-float-slow"><Cloudy size={120} /></div>
      <div className="absolute top-40 right-20 text-white/30 animate-float"><Cloudy size={80} /></div>
      <div className="absolute bottom-20 left-1/4 text-white/50 animate-float-slow" style={{ animationDelay: '2s' }}><Cloudy size={100} /></div>

      <div className="relative z-10">
      
      {/* Hero Section */}
      <div className="pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
              NubeHug <span className="text-nimbus-blue">Academy 🎓</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-md font-medium">
              Aprende a tu ritmo para hacer crecer tu negocio. Soluciones prácticas y cursos completos en un solo lugar.
            </p>

            {/* Search Bar */}
            <div className="relative group max-w-md">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-14 pr-4 py-4 md:py-4 border border-white/70 rounded-2xl bg-white/80 backdrop-blur-sm text-slate-900 placeholder-slate-400 focus:ring-4 focus:ring-brand-cyan/30 text-lg shadow-sm focus:border-white transition-all font-medium"
                placeholder="¿Qué quieres aprender hoy?"
              />
            </div>
          </div>
          
          {/* Mascot Illustration */}
          <div className="hidden md:flex justify-center items-center relative h-64">
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-nimbus-blue opacity-5 leading-none select-none">
                 ACADEMY
             </div>
             <img 
               src="/nubehug_3d_academy_transparent.png" 
               alt="NubeHug Academy Mascot" 
               className="h-64 w-auto object-contain z-10 animate-float"
             />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Categories Chips */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4 mb-8">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all border backdrop-blur-md
                ${activeCategory === cat 
                  ? 'bg-nimbus-blue text-white border-nimbus-blue ring-2 ring-blue-300 ring-offset-1 ring-offset-blue-50 transform scale-105' 
                  : 'bg-white/80 text-slate-600 border-white/50 hover:bg-white hover:text-nimbus-blue hover:border-blue-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Course Grid - HORIZONTAL LAYOUT */}
        <div className="bg-blue-50/90 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-blue-100/50 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Cursos de {activeCategory}</h2>
              <p className="text-slate-500 font-medium text-sm mt-1">Mostrando {filteredCourses.length} resultados</p>
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 font-medium">No se encontraron cursos en esta categoría. ¡Próximamente más contenido!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 cursor-pointer flex flex-col sm:flex-row group">
                  {/* Image Section - Left side on desktop, top on mobile */}
                  <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-slate-100 flex-shrink-0">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-2 text-nimbus-blue transform scale-75 group-hover:scale-100 transition-transform">
                         <PlayCircle className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                      {course.duration}
                    </div>
                  </div>
                  
                  {/* Content Section - Right side on desktop, bottom on mobile */}
                  <div className="p-5 flex flex-col justify-between w-full">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md ${
                          course.level === 'Básico' ? 'bg-blue-50 text-brand-blue-dark' : 
                          course.level === 'Intermedio' ? 'bg-amber-50 text-amber-700' : 
                          'bg-purple-50 text-purple-700'
                        }`}>
                          {course.level}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span className="text-xs font-bold text-slate-600">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-extrabold text-lg text-slate-900 leading-tight mb-2 group-hover:text-nimbus-blue transition-colors duration-300">
                        {course.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                        Aprende paso a paso con expertos de {course.category}. Descubre los mejores secretos de la industria.
                      </p>
                    </div>
                    <div className="flex items-center text-xs text-slate-400 font-medium gap-4">
                      <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {course.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Soluciones Express */}
        <div className="bg-blue-50/90 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-blue-100/50">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            Soluciones Express
            <span className="text-sm font-semibold bg-blue-100 text-nimbus-blue px-3 py-1 rounded-full ml-2">Respuestas Rápidas</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Express Button 1 */}
            <button className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-xl hover:border-nimbus-blue/50 hover:-translate-y-2 transition-all duration-300 flex items-start gap-4 text-left group">
              <div className="bg-orange-50 p-3 rounded-xl group-hover:scale-125 group-hover:bg-orange-100 transition-all duration-300">
                <ReceiptText className="h-6 w-6 text-orange-500 group-hover:-rotate-12 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1 group-hover:text-nimbus-blue transition-colors">¿Cómo facturo en el SAT?</h3>
                <p className="text-xs text-slate-500 font-medium">(Guía rápida de 3 pasos)</p>
              </div>
            </button>

            {/* Express Button 2 */}
            <button className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-xl hover:border-nimbus-blue/50 hover:-translate-y-2 transition-all duration-300 flex items-start gap-4 text-left group">
              <div className="bg-purple-50 p-3 rounded-xl group-hover:scale-125 group-hover:bg-purple-100 transition-all duration-300">
                <Megaphone className="h-6 w-6 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 mb-1 group-hover:text-nimbus-blue transition-colors">Prompt de anuncio FB</h3>
                <p className="text-xs text-slate-500 font-medium">Plantilla de copy persuasivo</p>
              </div>
              <div className="bg-slate-50 px-2 py-1 rounded text-[10px] font-bold text-slate-400 mt-1 group-hover:bg-nimbus-blue group-hover:text-white transition-colors duration-300">COPIAR</div>
            </button>

            {/* Express Button 3 */}
            <button className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-xl hover:border-nimbus-blue/50 hover:-translate-y-2 transition-all duration-300 flex items-start gap-4 text-left group">
              <div className="bg-emerald-50 p-3 rounded-xl group-hover:scale-125 group-hover:bg-emerald-100 transition-all duration-300">
                <PackageSearch className="h-6 w-6 text-emerald-600 group-hover:-rotate-12 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1 group-hover:text-nimbus-blue transition-colors">Checklist: Primer envío</h3>
                <p className="text-xs text-slate-500 font-medium">Empaque y logística grupal</p>
              </div>
            </button>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
