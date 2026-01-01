import CTASection from './components/CTASection';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import ReferenceSection from './components/ReferenceSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.08),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.1),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.08),transparent_35%)]" />
      <div className="relative z-10">
        <HeroSection />
        <FeatureSection />
        <ReferenceSection />
        <CTASection />
      </div>
    </main>
  );
}
