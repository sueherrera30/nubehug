import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch {
      setError('Error al crear la cuenta. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex justify-center mb-6">
          <img src="/nubehug-logo.png?v=4" alt="NubeHug" className="h-20 w-auto mix-blend-multiply" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-blue-dark tracking-tight">
          Crea tu cuenta segura
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600 font-medium">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-semibold text-[#00bcd4] hover:text-brand-blue-dark transition-colors">
            Inicia sesión aquí
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-brand-blue-light/20 sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm font-medium border border-red-100">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-brand-blue-dark">
                Nombre Completo
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-blue-dark focus:outline-none focus:ring-4 focus:ring-brand-blue-light/50 sm:text-sm font-medium transition-all"
                  placeholder="Tu Nombre"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-blue-dark">
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-blue-dark focus:outline-none focus:ring-4 focus:ring-brand-blue-light/50 sm:text-sm font-medium transition-all"
                  placeholder="ejemplo@empresa.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-brand-blue-dark">
                Contraseña
              </label>
              <div className="mt-2 text-left">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-brand-blue-dark focus:outline-none focus:ring-4 focus:ring-brand-blue-light/50 sm:text-sm font-medium transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-xl bg-gradient-to-r from-[#00bcd4] to-[#029ab0] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand-cyan/20 hover:from-[#029ab0] hover:to-[#00bcd4] focus:outline-none focus:ring-4 focus:ring-brand-cyan/30 disabled:opacity-70 transition-all transform hover:-translate-y-0.5"
              >
                {isLoading ? 'Registrando...' : 'Crear Cuenta'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
