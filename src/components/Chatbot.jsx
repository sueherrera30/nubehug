import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Sparkles, User, Cloud } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola! Soy Nubi, tu asistente virtual. ☁️ ¿En qué te puedo ayudar hoy?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Context-aware greeting when route changes
  useEffect(() => {
    if (messages.length <= 1) return; // Don't interrupt if already chatting
    
    let contextMessage = '';
    if (location.pathname === '/dashboard') contextMessage = 'Veo que estás revisando tus finanzas en el Dashboard. ¿Tienes dudas con algún número?';
    if (location.pathname === '/academy') contextMessage = '¡Qué bueno verte por la Academy! ¿Buscas algún curso en específico?';
    if (location.pathname === '/alianzas') contextMessage = 'En Nube Alianzas puedes ahorrar colaborando con otros. ¿Te ayudo a publicar un pedido?';
    if (location.pathname === '/talento') contextMessage = '¡Encuentra a los mejores expertos aquí en NubeTalento! ¿Qué servicio necesitas hoy?';

    if (contextMessage && !isOpen) {
        // Maybe add a badge or notification dot later
    }
  }, [location.pathname]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulated bot response logic
    setTimeout(() => {
      let botResponse = '¡Entendido! Nuestro equipo humano está revisando tu solicitud y te contactará pronto. Si tienes otra duda sobre la app, dime.';
      
      const lowerInput = userMsg.text.toLowerCase();
      if (lowerInput.includes('hola') || lowerInput.includes('buenos dias')) {
          botResponse = '¡Hola! Qué gusto saludarte. ¿Qué te trae por NubeHug hoy?';
      } else if (lowerInput.includes('dashboard') || lowerInput.includes('finanzas') || lowerInput.includes('dinero')) {
          botResponse = 'En tu Dashboard puedes ver el resumen de tus ingresos y gastos. Los NubeCréditos son tu moneda virtual de la plataforma. ¿Necesitas ayuda leyendo tus gráficas?';
      } else if (lowerInput.includes('academy') || lowerInput.includes('curso') || lowerInput.includes('aprender')) {
          botResponse = 'NubeHug Academy te ofrece cursos cortos y prácticos para que crezcas. ¡Te recomiendo el de "Administra tu inventario como experta"!';
      } else if (lowerInput.includes('alianzas') || lowerInput.includes('envío') || lowerInput.includes('compartir')) {
          botResponse = '¡Nube Alianzas es genial para ahorrar! Solo ve al mapa, busca un emprendedor cerca de ti que tenga espacio en su envío, y hazle "Match".';
      } else if (lowerInput.includes('talento') || lowerInput.includes('crédito') || lowerInput.includes('nc')) {
          botResponse = 'En NubeTalento puedes ganar NubeCréditos ayudando a otros, y luego usarlos para contratar servicios (como diseño o pautas en redes). ¡Es un ganar-ganar!';
      } else if (lowerInput.includes('gracias')) {
          botResponse = '¡De nada! Recuerda que estoy aquí 24/7 flotando en mi nube para ti. ☁️💙';
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[100] w-16 h-16 rounded-full bg-nimbus-blue text-white shadow-2xl shadow-blue-500/50 flex items-center justify-center hover:scale-110 hover:shadow-blue-500/70 transition-all duration-300 group ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare size={28} className="group-hover:animate-bounce" />
        {/* Helper popup */}
        <div className="absolute -top-12 -left-32 w-48 bg-white text-slate-700 text-xs font-bold py-2 px-3 rounded-2xl shadow-lg opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none after:content-[''] after:absolute after:-bottom-2 after:right-8 after:border-8 after:border-transparent after:border-t-white">
          ¡Hola! ¿Necesitas ayuda?
        </div>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-[100] w-full max-w-[360px] md:max-w-[400px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-blue-100/50 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-nimbus-blue to-[#1565c0] p-4 flex items-center justify-between relative overflow-hidden">
          {/* Decorative small clouds */}
          <Cloud className="absolute top-2 right-12 text-white/20" size={32} />
          <Cloud className="absolute bottom-1 left-24 text-white/10" size={48} />
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center p-1 border border-white/30 relative">
               <img src="/nubehug_3d_assistant_transparent.png" alt="Nubi" className="w-full h-full object-contain drop-shadow-md animate-float" />
               <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#1565c0] rounded-full"></div>
            </div>
            <div>
              <h3 className="font-extrabold text-white flex items-center gap-1">
                Nubi <Sparkles size={14} className="text-amber-300" />
              </h3>
              <p className="text-xs text-blue-100 font-medium">Asistente en línea</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors relative z-10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 bg-slate-50 p-4 overflow-y-auto hide-scrollbar flex flex-col gap-4">
          <div className="text-center text-xs text-slate-400 font-medium my-2">Hoy</div>
          
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
              <div className={`flex gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center p-1 translate-y-1">
                    <img src="/nubehug_3d_assistant_transparent.png" alt="bot" className="w-full h-full object-contain" />
                  </div>
                )}
                
                <div 
                  className={`p-3 rounded-2xl text-sm font-medium ${
                    msg.sender === 'user' 
                      ? 'bg-nimbus-blue text-white rounded-tr-sm' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex gap-2 max-w-[85%] flex-row">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center p-1 translate-y-1">
                  <img src="/nubehug_3d_assistant_transparent.png" alt="bot" className="w-full h-full object-contain" />
                </div>
                <div className="bg-white text-slate-700 shadow-sm border border-slate-100 p-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-slate-100">
          <form onSubmit={handleSend} className="flex gap-2">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              className="flex-1 bg-slate-100 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-nimbus-blue/30 text-slate-700 placeholder-slate-400 font-medium"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-nimbus-blue hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-3 rounded-2xl transition-colors flex flex-shrink-0 items-center justify-center"
            >
              <Send size={18} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5" : ""} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
