import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Academy from './pages/Academy';
import NubeAlianzas from './pages/NubeAlianzas';
import NubeTalento from './pages/NubeTalento';
import ProtectedRoute from './components/ProtectedRoute';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/academy"
              element={
                <ProtectedRoute>
                  <Academy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alianzas"
              element={
                <ProtectedRoute>
                  <NubeAlianzas />
                </ProtectedRoute>
              }
            />
            <Route
              path="/talento"
              element={
                <ProtectedRoute>
                  <NubeTalento />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Chatbot />
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
