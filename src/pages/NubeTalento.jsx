import React, { useState } from 'react';
import { 
  Search, 
  HandHeart, 
  Coins, 
  Sparkles, 
  BadgeCheck, 
  Cloudy, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export default function NubeTalento() {
  const [balance, setBalance] = useState(450);
  const [contacted, setContacted] = useState({});

  const seeking = [
    { id: 1, title: 'Necesito fotos para mis bolsas de material reciclado', reward: 50, user: 'Claudia', avatar: 'https://ui-avatars.com/api/?name=Claudia&background=fce7f3&color=db2777' },
    { id: 2, title: 'Ayuda con mi registro de marca', reward: 100, user: 'Elena', avatar: 'https://ui-avatars.com/api/?name=Elena&background=fbcfe8&color=9d174d' },
    { id: 3, title: 'Se busca redactor para 3 posts de blog', reward: 80, user: 'Javier', avatar: 'https://ui-avatars.com/api/?name=Javier&background=dcfce7&color=16a34a' }
  ];

  const offering = [
    { id: 4, title: 'Soy experto en Canva, diseño tus banners', cost: 30, user: 'Pedro', avatar: 'https://ui-avatars.com/api/?name=Pedro&background=e0e7ff&color=4338ca' },
    { id: 5, title: 'Asesoría en pautas de Instagram', cost: 60, user: 'Ana', avatar: 'https://ui-avatars.com/api/?name=Ana&background=fef3c7&color=d97706' },
    { id: 6, title: 'Revisión técnica de página web', cost: 120, user: 'Mateo', avatar: 'https://ui-avatars.com/api/?name=Mateo&background=c7d2fe&color=3730a3' }
  ];

  const handleMatch = (taskId, amount, isOffering) => {
    if (contacted[taskId]) return;
    
    // Simulate transaction
    setTimeout(() => {
      setContacted(prev => ({ ...prev, [taskId]: true }));
      setBalance(prev => isOffering ? prev - amount : prev + amount);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50/50 to-cyan-100 py-8 font-sans relative overflow-hidden">
      {/* Decorative Clouds */}
      <div className="absolute top-10 left-10 text-white/40 animate-float-slow"><Cloudy size={120} /></div>
      <div className="absolute top-40 right-20 text-white/30 animate-float"><Cloudy size={80} /></div>
      <div className="absolute top-1/2 left-4 text-white/50 animate-float-slow"><Cloudy size={60} /></div>
      <div className="absolute bottom-20 left-1/4 text-white/50 animate-float-slow" style={{ animationDelay: '2s' }}><Cloudy size={100} /></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Balance Widget */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white/90 backdrop-blur-md rounded-3xl shadow-sm border border-brand-blue-light/30 p-8 mb-8 relative group overflow-hidden">
          
          <div className="flex items-center gap-6 z-10">
            <div className="w-32 h-32 hidden md:block">
              <img src="/nubehug_3d_talento_transparent.png" alt="Mascota Talento" className="w-full h-full object-contain animate-float hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-brand-blue-dark tracking-tight mb-2 flex items-center gap-3">
                 Nube<span className="text-nimbus-blue">Talento 🎯</span>
              </h1>
              <p className="text-lg text-slate-600 font-medium max-w-xl">
                Marketplace de Micro-tareas. Comparte tus talentos, pide ayuda y crece junto a la comunidad.
              </p>
            </div>
          </div>

          {/* NubeCréditos Widget */}
          <div className="mt-6 md:mt-0 bg-gradient-to-r from-amber-100 to-yellow-50 border border-amber-200 p-5 rounded-2xl shadow-sm flex flex-col items-end z-10 group/widget hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-1">
              <Coins className="text-amber-500 animate-pulse" size={24} />
              <p className="text-sm font-bold text-slate-600 uppercase tracking-wider">Tu Saldo</p>
            </div>
            <div className={`text-4xl font-black text-amber-600 flex items-center gap-2 transition-all duration-500`}>
              {balance} <span className="text-xl">NC</span>
            </div>
            <button className="mt-3 text-xs font-bold text-amber-700 bg-amber-200/50 hover:bg-amber-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
              ¿Cómo ganar más?
            </button>
          </div>
        </div>

        {/* Double Action Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-brand-blue-light/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4 group">
            <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-100 transition-colors">
              <Search className="h-8 w-8 text-nimbus-blue group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-nimbus-blue transition-colors">Necesito Ayuda</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">Publica una tarea que no sabes hacer</p>
            </div>
          </button>

          <button className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-brand-blue-light/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4 group">
            <div className="bg-emerald-50 p-4 rounded-2xl group-hover:bg-emerald-100 transition-colors">
              <HandHeart className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-emerald-700 transition-colors">Quiero Ayudar</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">Gana NubeCréditos ofreciendo tu talento</p>
            </div>
          </button>
        </div>

        {/* Tinder-style Matchmaking Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Se busca */}
          <div className="bg-blue-50/50 backdrop-blur-md rounded-3xl p-6 border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
              <Search className="text-nimbus-blue" /> Se Busca
            </h2>
            <div className="space-y-4">
              {seeking.map((task) => (
                <div key={task.id} className="relative perspective-1000">
                  <div className={`bg-white rounded-2xl p-5 border border-slate-100 shadow-sm transition-all duration-500 transform ${contacted[task.id] ? 'rotate-y-180 opacity-0 absolute inset-0' : 'hover:shadow-md hover:-translate-y-1'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <img src={task.avatar} alt={task.user} className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Usuario</p>
                          <p className="text-sm font-bold text-slate-800">{task.user}</p>
                        </div>
                      </div>
                      <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0">
                        <Coins size={12} /> +{task.reward} NC
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{task.title}</h3>
                    <button 
                      onClick={() => handleMatch(task.id, task.reward, false)}
                      className="w-full bg-nimbus-blue hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 group"
                    >
                      Postularme <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Match Success Card (Back of the card) */}
                  <div className={`bg-emerald-50 rounded-2xl p-5 border border-emerald-200 shadow-sm transition-all duration-500 transform ${contacted[task.id] ? 'rotate-y-0 relative' : '-rotate-y-180 absolute inset-0 opacity-0 pointer-events-none'} flex flex-col items-center justify-center text-center min-h-[180px]`}>
                    <BadgeCheck className="w-12 h-12 text-emerald-500 mb-2" />
                    <h3 className="text-lg font-bold text-emerald-900">¡Match realizado!</h3>
                    <p className="text-sm text-emerald-700 mb-4 font-medium">Chatea con {task.user} para coordinar los detalles de la tarea.</p>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 w-full rounded-xl transition-colors flex items-center justify-center gap-2">
                       <MessageSquare size={16} /> Abrir Chat
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Se ofrece */}
          <div className="bg-purple-50/50 backdrop-blur-md rounded-3xl p-6 border border-purple-100 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
              <Sparkles className="text-purple-500" /> Se Ofrece
            </h2>
            <div className="space-y-4">
              {offering.map((task) => (
                <div key={task.id} className="relative perspective-1000">
                  <div className={`bg-white rounded-2xl p-5 border border-slate-100 shadow-sm transition-all duration-500 transform ${contacted[task.id] ? 'rotate-y-180 opacity-0 absolute inset-0' : 'hover:shadow-md hover:-translate-y-1'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <img src={task.avatar} alt={task.user} className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experto</p>
                          <p className="text-sm font-bold text-slate-800">{task.user}</p>
                        </div>
                      </div>
                      <div className="bg-amber-50 border border-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0">
                        <Coins size={12} /> -{task.cost} NC
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{task.title}</h3>
                    <button 
                      onClick={() => handleMatch(task.id, task.cost, true)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 group"
                    >
                      Contratar experto <HandHeart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>

                  {/* Match Success Card (Back of the card) */}
                  <div className={`bg-purple-50 rounded-2xl p-5 border border-purple-200 shadow-sm transition-all duration-500 transform ${contacted[task.id] ? 'rotate-y-0 relative' : '-rotate-y-180 absolute inset-0 opacity-0 pointer-events-none'} flex flex-col items-center justify-center text-center min-h-[180px]`}>
                    <HandHeart className="w-12 h-12 text-purple-500 mb-2" />
                    <h3 className="text-lg font-bold text-purple-900">¡Conexión exitosa!</h3>
                    <p className="text-sm text-purple-700 mb-4 font-medium">Acabas de invertir {task.cost} NC en la asesoría de {task.user}.</p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 w-full rounded-xl transition-colors flex items-center justify-center gap-2">
                       <MessageSquare size={16} /> Escribir a {task.user}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
