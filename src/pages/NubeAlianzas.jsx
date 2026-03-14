import React, { useState } from 'react';
import { 
  MapPin, 
  Leaf, 
  TrendingDown, 
  Users, 
  HeartHandshake, 
  Truck, 
  Store, 
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Cloudy,
  Coins,
  CalendarCheck
} from 'lucide-react';

export default function NubeAlianzas() {
  const [showAllCities, setShowAllCities] = useState(false);
  const [activePin, setActivePin] = useState(null);
  const [filterTab, setFilterTab] = useState('showrooms'); // 'showrooms' or 'rutas'

  const primaryCities = [
    { id: 'cdmx', name: 'CDMX', x: '40%', y: '60%', users: 120 },
    { id: 'qro', name: 'Querétaro', x: '35%', y: '45%', users: 45 },
    { id: 'pue', name: 'Puebla', x: '50%', y: '65%', users: 38 },
  ];

  const secondaryCities = [
    { id: 'mty', name: 'Monterrey', x: '30%', y: '20%', users: 85 },
    { id: 'gdl', name: 'Guadalajara', x: '20%', y: '50%', users: 92 },
  ];

  const visibleCities = showAllCities ? [...primaryCities, ...secondaryCities] : primaryCities;

  const routePins = [
    { id: 1, city: 'cdmx', name: 'Elena', role: 'Bodega', avatar: 'https://ui-avatars.com/api/?name=Elena&background=fbcfe8&color=9d174d', message: 'Tengo espacio para 3 marcas más este fin de semana. ¿Te unes?', type: 'store', x: '42%', y: '58%' },
    { id: 2, city: 'qro', name: 'Luis', role: 'Camioneta', avatar: 'https://ui-avatars.com/api/?name=Luis&background=dcfce7&color=16a34a', message: 'Salgo para CDMX mañana con media camioneta vacía. ¡Aprovecha!', type: 'truck', x: '36%', y: '43%' },
    { id: 3, city: 'pue', name: 'Casa Talavera', role: 'Tienda', avatar: 'https://ui-avatars.com/api/?name=Casa+Talavera&background=c7d2fe&color=3730a3', message: 'Buscamos marcas de decoración para pop-up navideño.', type: 'store', x: '52%', y: '67%' },
  ];

  const showroomPins = [
    { 
      id: 4, 
      city: 'cdmx', 
      name: 'Showroom Centro Histórico', 
      role: 'Espacio Fijo', 
      cover: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60', 
      message: '2 Corners Disponibles', 
      actionLabel: 'Ver Calendario / Reservar',
      type: 'store', 
      x: '43%', 
      y: '59%',
      isOpportunity: true
    },
    { 
      id: 5, 
      city: 'gdl', 
      name: 'NubeShowroom GDL - Pop-up fin de semana', 
      role: 'Pop-Up', 
      cover: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=60', 
      message: "Estante 'B' libre para Marcas de Moda", 
      actionLabel: 'Hacer Match con Pedro (Joyas)',
      type: 'store', 
      x: '20%', 
      y: '50%',
      isOpportunity: true
    },
  ];

  const activePins = filterTab === 'showrooms' ? showroomPins : routePins;

  const handlePinClick = (pin) => {
    setActivePin(activePin?.id === pin.id ? null : pin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50/50 to-cyan-100 py-8 font-sans relative overflow-hidden">
      {/* Decorative Clouds */}
      <div className="absolute top-10 left-10 text-white/40 animate-float-slow"><Cloudy size={120} /></div>
      <div className="absolute top-40 right-20 text-white/30 animate-float"><Cloudy size={80} /></div>
      <div className="absolute bottom-20 left-1/4 text-white/50 animate-float-slow" style={{ animationDelay: '2s' }}><Cloudy size={100} /></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-sm border border-brand-blue-light/30 p-6 sm:p-8 mb-8 flex flex-col items-center text-center relative overflow-hidden group">
          
          <div className="relative z-10 sm:mt-4 mb-4">
             <img src="/nubehug_3d_alianzas_transparent.png" alt="NubeHug Comunidad" className="w-48 sm:w-64 h-auto animate-float drop-shadow-xl hover:scale-105 transition-transform duration-500 relative z-10" />
          </div>

          <div className="relative z-20 bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl w-full max-w-2xl shadow-sm border border-white/50">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight mb-2 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
               hug me: <span className="text-nimbus-blue">nube alianzas</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-bold max-w-2xl mx-auto">
              Ahorra uniendo tus envíos con la comunidad. Juntos llegamos más lejos. ☁️🤝
            </p>
          </div>
        </div>

        {/* Savings & NC Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-md rounded-3xl shadow-sm border border-emerald-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-4 rounded-2xl">
                  <Leaf className="h-8 w-8 text-emerald-600 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Impacto NubeHug de este mes</h3>
                  <p className="text-sm text-slate-600 font-medium max-w-xl mt-1">
                    Gracias a la comunidad, se han evitado <strong className="text-slate-900">15 trayectos innecesarios</strong>, reduciendo la huella de carbono.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">Ahorro Comunitario</p>
                <div className="text-3xl lg:text-4xl font-black text-emerald-500 flex items-center justify-end gap-2 drop-shadow-sm">
                  <TrendingDown className="h-8 w-8 text-emerald-400" />
                  $12,450 <span className="text-lg font-bold text-emerald-600/70">MXN</span>
                </div>
              </div>
            </div>
          </div>

          {/* New NubeCreditos Widget for Showrooms */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-50 backdrop-blur-md rounded-3xl shadow-sm border border-amber-200 p-6 flex flex-col justify-center items-center text-center group">
            <div className="flex items-center gap-2 mb-2">
               <Coins className="text-amber-500" size={24} />
               <h3 className="text-2xl font-black text-amber-600">150 NC</h3>
            </div>
            <p className="text-sm text-slate-700 font-bold">Acumulados este mes</p>
            <p className="text-xs text-amber-700 font-medium mt-1 group-hover:underline cursor-pointer">
              Úsalos para tu próximo Showroom ✨
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Community Map */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-sm border border-brand-blue-light/30 overflow-hidden flex flex-col h-[600px]">
              
              <div className="p-6 border-b border-slate-100 bg-white/50 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                       <MapPin className={filterTab === 'showrooms' ? 'text-emerald-500' : 'text-nimbus-blue'} /> 
                       Mapa de Comunidad
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-1">Encuentra o publica espacios físicos y de traslado</p>
                  </div>
                  <button 
                    onClick={() => setShowAllCities(!showAllCities)}
                    className="text-sm font-bold text-slate-500 hover:text-[#1565c0] flex items-center gap-1 transition-colors"
                  >
                    {showAllCities ? 'Ocultar mapa' : 'Ver todo el país'}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAllCities ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Filter Tabs */}
                <div className="flex bg-slate-100/80 p-1.5 rounded-2xl w-fit">
                  <button 
                    onClick={() => setFilterTab('showrooms')} 
                    className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${filterTab === 'showrooms' ? 'bg-white text-emerald-600 shadow-sm border border-emerald-100' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <Store size={16} /> Ver Showrooms Disponibles
                  </button>
                  <button 
                    onClick={() => setFilterTab('rutas')} 
                    className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${filterTab === 'rutas' ? 'bg-white text-nimbus-blue shadow-sm border border-blue-100' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <Truck size={16} /> Ver Rutas de Envío
                  </button>
                </div>
              </div>
              
              {/* Interactive Map Area */}
              <div className="flex-1 relative bg-gradient-to-b from-[#e0f2fe] to-[#bae6fd] overflow-hidden">
                {/* Simulated map background styling */}
                <div 
                  className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-contain" 
                  style={{ 
                    backgroundImage: 'url(/mexico_map.svg)',
                    backgroundSize: '80%',
                    backgroundPosition: '10% 40%'
                  }}>
                </div>
                
                {/* Render Cities */}
                {visibleCities.map(city => (
                  <div key={city.id} className="absolute flex flex-col items-center animate-fade-in" style={{ left: city.x, top: city.y }}>
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200 shadow-sm text-xs font-bold text-slate-600 mb-1">
                      {city.name}
                    </div>
                  </div>
                ))}

                {/* Render Interactive Pins */}
                {activePins.map(pin => (
                  <div key={pin.id} className="absolute cursor-pointer group" style={{ left: pin.x, top: pin.y, zIndex: activePin?.id === pin.id ? 50 : 10 }}>
                    <div 
                      onClick={() => handlePinClick(pin)}
                      className={`relative transition-all duration-300 ${activePin?.id === pin.id ? 'scale-125 z-50' : 'hover:scale-110 hover:-translate-y-2'}`}
                    >
                      {pin.isOpportunity ? (
                        <div className="bg-emerald-500 p-2.5 rounded-full shadow-lg border-2 border-white animate-pulse">
                          <Store className="text-white" size={20} />
                        </div>
                      ) : (
                        <img src={pin.avatar} alt={pin.name} className="w-12 h-12 rounded-full border-4 border-white shadow-md" />
                      )}

                      {!pin.isOpportunity && (
                        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-slate-100 text-nimbus-blue">
                          {pin.type === 'store' ? <Store size={14} /> : <Truck size={14} />}
                        </div>
                      )}
                    </div>

                    {/* Popover Card */}
                    {activePin?.id === pin.id && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in z-50 before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-slate-200">
                        
                        {pin.cover ? (
                           <div className="h-24 w-full bg-slate-200">
                             <img src={pin.cover} alt="Cover" className="w-full h-full object-cover" />
                           </div>
                        ) : (
                           <div className="h-4 w-full bg-nimbus-blue"></div>
                        )}

                        <div className="p-4 pt-3">
                          <div className={`flex items-center gap-3 mb-2 ${pin.cover ? '' : ''}`}>
                            {!pin.cover && <img src={pin.avatar} alt={pin.name} className="w-10 h-10 rounded-full" />}
                            <div>
                              <h4 className="font-bold text-sm text-slate-900 leading-tight">{pin.name}</h4>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 inline-block ${pin.isOpportunity ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-nimbus-blue'}`}>
                                {pin.role}
                              </span>
                            </div>
                          </div>
                          
                          <p className={`text-xs mt-2 mb-3 ${pin.isOpportunity ? 'font-bold text-emerald-700' : 'text-slate-600'}`}>
                            {pin.message}
                          </p>
                          
                          <button className={`w-full text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm flex justify-center items-center gap-2 ${pin.isOpportunity ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-nimbus-blue hover:bg-blue-700'}`}>
                            {pin.isOpportunity ? <CalendarCheck size={16} /> : <MessageCircle size={16} />}
                            {pin.actionLabel || `Contactar a ${pin.name}`}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Social Feed & Trust */}
          <div className="flex flex-col gap-8">
            
            {/* Social Feed: Quién se une */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-sm border border-brand-blue-light/30 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                <Users className="text-purple-500" /> ¿Quién se une?
              </h2>
              
              <div className="space-y-4">
                {/* Post 1: Ruta */}
                <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 transition-colors group">
                  <div className="flex items-center gap-3 mb-2">
                    <img src="https://ui-avatars.com/api/?name=Claudia+Bolsas&background=fce7f3&color=db2777" className="w-10 h-10 rounded-full" alt="Claudia" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Claudia <span className="text-slate-500 font-medium">(Bolsas Eco)</span></h4>
                      <p className="text-[10px] text-slate-400">Hace 2 horas • Rumbo a GDL</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    Tengo 5 envíos a Guadalajara el lunes. Si alguien más envía para allá, ¡podemos pedir una camioneta juntos y bajar el costo! 🚚💨
                  </p>
                  <button className="w-full bg-nimbus-blue hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-xl transition-colors shadow-sm shadow-blue-500/30 group-hover:-translate-y-0.5 transform duration-200">
                    ¡Me uno al viaje!
                  </button>
                </div>

                {/* Post 2: Showroom Match */}
                <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100 hover:border-emerald-300 transition-colors group">
                  <div className="flex items-center gap-3 mb-2">
                    <img src="https://ui-avatars.com/api/?name=Pedro+Joyas&background=e0e7ff&color=4338ca" className="w-10 h-10 rounded-full border-2 border-emerald-200" alt="Pedro" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">Pedro <span className="text-slate-500 font-medium">(Joyas)</span></h4>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <p className="text-[10px] font-bold text-emerald-600">Buscando Aliado Showroom Zapopan</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-800 mb-3 font-medium">
                    ¡Match para Showroom Zapopan! Reservé el Corner C, busco aliado para dividir gastos. ¡Hagamos equipo! 🤝✨
                  </p>
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold py-2.5 rounded-xl transition-colors shadow-sm shadow-emerald-500/30 flex justify-center items-center gap-2 group-hover:-translate-y-0.5 transform duration-200">
                    ¡Hacer Match para Showroom! <Store size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Consolidator: Aliados Frecuentes */}
            <div className="bg-gradient-to-br from-[#1956E2] to-[#0d47a1] rounded-3xl shadow-xl p-6 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                 <ShieldCheck size={100} />
               </div>
               <h2 className="text-xl font-bold mb-1 relative z-10 flex items-center gap-2">Aliados frecuentes</h2>
               <p className="text-blue-100 text-sm mb-6 relative z-10 font-medium">Automatiza tus ahorros con tus socios de confianza.</p>

               <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 relative z-10 hover:bg-white/20 cursor-pointer transition-colors">
                 <div className="flex items-center gap-3">
                   <div className="relative">
                     <img src="https://ui-avatars.com/api/?name=Sofia+P&background=fef3c7&color=d97706" className="w-12 h-12 rounded-full border-2 border-white/50" alt="Socia" />
                     <div className="absolute -bottom-1 -right-1 bg-emerald-400 w-4 h-4 rounded-full border-2 border-brand-blue-dark"></div>
                   </div>
                   <div>
                     <p className="font-bold text-sm">Sofía (Velas)</p>
                     <p className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">3 viajes juntos</p>
                   </div>
                 </div>
                 <button className="bg-white text-nimbus-blue text-xs font-bold px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
                   Ver Perfil
                 </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
