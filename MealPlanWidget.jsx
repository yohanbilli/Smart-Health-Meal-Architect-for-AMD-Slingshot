import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Utensils, CheckCircle } from 'lucide-react';

export const MealPlanWidget = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-semibold text-white">Bio-Rhythm Meal Plan</h2>
        <Button variant="ghost" className="text-sm">View Full Plan</Button>
      </div>

      <Card layer="low" className="p-1">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 rounded-[10px] overflow-hidden">
          {/* Active Meal (take up 3 cols) */}
          <div className="lg:col-span-3 bg-surface-container-highest p-8 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 p-8 text-primary opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12 duration-700">
              <Utensils className="w-64 h-64" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Next Meal · 12:30 PM</div>
                <h3 className="font-display text-3xl font-bold text-white mb-6 leading-tight">Cyber-Kelp &<br/>Quinoa Bowl</h3>
                
                <div className="flex gap-4 mb-8">
                  <div className="px-3 py-1.5 bg-surface-variant/50 backdrop-blur rounded border border-outline-variant/30 text-sm"><span className="text-white font-bold block">450</span> <span className="text-[10px] uppercase text-on-surface-variant">kcal</span></div>
                  <div className="px-3 py-1.5 bg-surface-variant/50 backdrop-blur rounded border border-outline-variant/30 text-sm"><span className="text-primary font-bold block">32g</span> <span className="text-[10px] uppercase text-on-surface-variant">Protein</span></div>
                  <div className="px-3 py-1.5 bg-surface-variant/50 backdrop-blur rounded border border-outline-variant/30 text-sm"><span className="text-secondary font-bold block">45g</span> <span className="text-[10px] uppercase text-on-surface-variant">Carbs</span></div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <Button variant="primary">Start Preparation</Button>
                <Button variant="secondary" className="px-4 py-2 border-outline/30 text-white/70 hover:text-white">Ingredients</Button>
              </div>
            </div>
          </div>

          {/* Past/Upcoming Meals Mini List (takes up 2 cols) */}
          <div className="lg:col-span-2 bg-surface-container p-6 flex flex-col justify-center space-y-4">
            <h4 className="font-display text-sm uppercase tracking-wider text-on-surface mb-2">Today's Sequence</h4>
            
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl opacity-50 relative before:content-[''] before:absolute before:left-[-1rem] before:top-1/2 before:w-4 before:h-[1px] before:bg-outline/20">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-on-surface-variant mb-1">08:00 AM</div>
                <div className="text-white/80 font-semibold text-sm">Matcha Protein Synthesis</div>
              </div>
              <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
            </div>

            <div className="flex items-center justify-between p-4 bg-surface-bright rounded-xl border-l-2 border-primary shadow-lg shadow-black/20">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-primary mb-1">12:30 PM</div>
                <div className="text-white font-semibold text-sm">Cyber-Kelp & Quinoa Bowl</div>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-glow flex-shrink-0 ml-4"></div>
            </div>

            <div className="flex items-center justify-between p-4 bg-surface-container-highest rounded-xl">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-on-surface-variant mb-1">19:00 PM</div>
                <div className="text-white/80 font-semibold text-sm">Synthetic Omega Salmon</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
