import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLayout from './components/admin/Layout';
import AdminLogin from './components/admin/Login';
import AdminDashboard from './components/admin/Dashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <Home />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/about" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <About />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/services" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <Services />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/testimonials" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <Testimonials />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/blog" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <Blog />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                <Contact />
              </main>
              <Footer />
            </div>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            {/* Additional admin routes will be added here */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;