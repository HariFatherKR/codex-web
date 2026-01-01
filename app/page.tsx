import CTASection from './components/CTASection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ReferenceSection from './components/ReferenceSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a1020] text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_82%_8%,rgba(79,70,229,0.14),transparent_38%),radial-gradient(circle_at_50%_82%,rgba(63,63,70,0.16),transparent_32%)]" />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <ReferenceSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
