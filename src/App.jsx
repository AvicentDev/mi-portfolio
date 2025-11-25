import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Layout from "./components/Layout";

import Contact from "./components/portfolio/ContactSection";
import Education from "./components/portfolio/EducationSection";
import Experience from "./components/portfolio/ExperienceSection";
import Projects from "./components/portfolio/ProjectsSection";
import Skills from "./components/portfolio/SkillsSection";
import Certifications from "./components/portfolio/CertificationsSection";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Footer solo visible en rutas reales, no en PDFs */}
          <Footer />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
