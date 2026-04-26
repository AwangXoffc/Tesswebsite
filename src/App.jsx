import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import halaman publik
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Certificates from './Pages/Certificates';
import Comments from './Pages/Comments';

// Import halaman admin
import Login from './Pages/Login';
import Dashboard from './Pages/dashboard/Dashboard';
import AdminProjects from './Pages/dashboard/AdminProjects';
import AdminCertificates from './Pages/dashboard/AdminCertificates';
import AdminComments from './Pages/dashboard/AdminComments';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/comments" element={<Comments />} />

          {/* Admin Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/projects" element={<AdminProjects />} />
          <Route path="/dashboard/certificates" element={<AdminCertificates />} />
          <Route path="/dashboard/comments" element={<AdminComments />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;