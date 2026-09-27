import { ChefHat, Leaf } from 'lucide-react';
import type { PageId } from './NavBar';

type FooterProps = {
  onNavigate: (page: PageId) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <ChefHat className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-stone-900">
                Pantry<span className="text-emerald-600">Pilot</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-stone-500">
              Your smart kitchen companion for tracking ingredients, reducing waste, and cooking with what you have.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button onClick={() => onNavigate('dashboard')} className="text-stone-500 transition-colors hover:text-emerald-600">Dashboard</button></li>
              <li><button onClick={() => onNavigate('pantry')} className="text-stone-500 transition-colors hover:text-emerald-600">Pantry</button></li>
              <li><button onClick={() => onNavigate('recipes')} className="text-stone-500 transition-colors hover:text-emerald-600">Recipes</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900">Reduce Waste</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><button onClick={() => onNavigate('expiration')} className="text-stone-500 transition-colors hover:text-emerald-600">Expiration Tracker</button></li>
              <li><button onClick={() => onNavigate('composting')} className="text-stone-500 transition-colors hover:text-emerald-600">Composting Guide</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-stone-900">Mission</h3>
            <div className="mt-3 flex items-start gap-2 text-sm text-stone-500">
              <Leaf className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
              <span>Helping households cut food waste one ingredient at a time.</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-stone-200 pt-6 text-center text-xs text-stone-400">
          &copy; {new Date().getFullYear()} PantryPilot. Built with care for your kitchen.
        </div>
      </div>
    </footer>
  );
}
