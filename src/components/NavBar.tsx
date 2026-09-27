import { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Package,
  UtensilsCrossed,
  CalendarClock,
  Leaf,
  Menu,
  X,
  ChefHat,
} from 'lucide-react';

export type PageId = 'landing' | 'dashboard' | 'pantry' | 'recipes' | 'expiration' | 'composting';

type NavItem = {
  id: PageId;
  label: string;
  icon: typeof LayoutDashboard;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'pantry', label: 'Pantry', icon: Package },
  { id: 'recipes', label: 'Recipes', icon: UtensilsCrossed },
  { id: 'expiration', label: 'Expiration', icon: CalendarClock },
  { id: 'composting', label: 'Composting', icon: Leaf },
];

type NavBarProps = {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
};

export default function NavBar({ currentPage, onNavigate }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  const isLanding = currentPage === 'landing';

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleNavigate(isLanding ? 'landing' : 'dashboard')}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
              <ChefHat className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-stone-900">
              Pantry<span className="text-emerald-600">Pilot</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`relative inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'text-emerald-700'
                      : 'text-stone-500 hover:bg-stone-100 hover:text-stone-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-emerald-600" />
                  )}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-stone-600 transition-colors hover:bg-stone-100 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-stone-100 bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="space-y-1 px-4 py-3">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-600" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
