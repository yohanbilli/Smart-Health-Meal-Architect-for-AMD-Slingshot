import { Card } from '../ui/Card';
import { BioMetricChip } from '../ui/BioMetricChip';
import { HeartPulse, Droplet, Flame } from 'lucide-react';

export const VitalsWidget = () => {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold mb-6 flex items-center justify-between">
        <span className="text-white">Core Vitals</span>
        <BioMetricChip state="active" label="Syncing..." />
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heart Rate */}
        <Card layer="low" className="p-6 relative group hover:shadow-glow/50 transition-all duration-500 hover:-translate-y-1 block">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-surface-container-high rounded-xl text-primary">
              <HeartPulse className="w-6 h-6" />
            </div>
            <BioMetricChip state="calm" label="Stable" />
          </div>
          <div>
            <div className="font-display text-5xl text-white font-bold mb-1 group-hover:text-primary transition-colors">68</div>
            <div className="text-on-surface-variant text-sm font-medium tracking-wide uppercase">Heart Rate / BPM</div>
          </div>
          <div className="mt-8 h-1 w-full bg-surface-container block rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[35%] rounded-full shadow-glow"></div>
          </div>
        </Card>

        {/* Hydration */}
        <Card layer="lowest" className="p-6 hover:bg-surface-container-low transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-surface-container rounded-xl text-secondary">
              <Droplet className="w-6 h-6" />
            </div>
            <BioMetricChip state="calm" label="Optimal" />
          </div>
          <div>
            <div className="font-display text-5xl text-white font-bold mb-1">2.4<span className="text-3xl text-secondary">L</span></div>
            <div className="text-on-surface-variant text-sm font-medium tracking-wide uppercase">Daily Hydration</div>
          </div>
        </Card>

        {/* Stress Level */}
        <Card layer="highest" className="p-6 border border-tertiary/10 hover:border-tertiary/30 transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-surface rounded-xl text-tertiary">
              <Flame className="w-6 h-6" />
            </div>
            <BioMetricChip state="warning" label="Elevated" />
          </div>
          <div>
            <div className="font-display text-5xl text-white font-bold mb-1">74</div>
            <div className="text-on-surface-variant text-sm font-medium tracking-wide uppercase">Stress Score</div>
          </div>
          <div className="mt-6 px-4 py-3 rounded-lg bg-tertiary/10 border border-tertiary/20">
            <p className="text-xs text-tertiary font-medium">Recommend 5m resonance breathing.</p>
          </div>
        </Card>
      </div>
    </section>
  );
};
