import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import AboutContact from './components/AboutContact';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <AboutContact />
        <SignIn />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
