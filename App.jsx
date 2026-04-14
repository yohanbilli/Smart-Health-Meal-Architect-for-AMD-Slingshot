import { DashboardLayout } from './components/DashboardLayout';
import { VitalsWidget } from './components/widgets/VitalsWidget';
import { MealPlanWidget } from './components/widgets/MealPlanWidget';
import { Home, Layers, Settings, Activity } from 'lucide-react';

function App() {
  const sidebarContent = (
    <nav className="flex flex-col gap-2 px-4">
      <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-variant/50 text-primary border border-outline-variant/30 font-medium">
        <Home className="w-5 h-5" /> Dashboard
      </a>
      <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-white transition-colors font-medium">
        <Activity className="w-5 h-5" /> Bio-Metrics
      </a>
      <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-white transition-colors font-medium">
        <Layers className="w-5 h-5" /> Genetic Plan
      </a>
      <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-white transition-colors font-medium opacity-50 cursor-not-allowed">
        <Settings className="w-5 h-5" /> System Prefs
      </a>
    </nav>
  );

  return (
    <DashboardLayout sidebar={sidebarContent}>
      {/* Header section with greeting */}
      <header className="mb-4">
        <h1 className="font-display text-4xl font-bold text-white mb-2">System Optimal</h1>
        <p className="text-on-surface-variant text-lg tracking-wide">Vitals normalized. Ready for the next phase.</p>
      </header>

      {/* Widgets */}
      <VitalsWidget />
      <MealPlanWidget />
    </DashboardLayout>
  );
}

export default App;
