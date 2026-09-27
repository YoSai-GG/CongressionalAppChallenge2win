import { useMemo, useState } from 'react';
import { Package, Search } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import IngredientCard from '@/components/IngredientCard';
import { mockIngredients } from '@/data/mockData';
import { getDaysUntilExpiry } from '@/pages/DashboardPage';

const CATEGORIES = ['All', 'Produce', 'Dairy', 'Meat', 'Pantry', 'Bakery'];
const LOCATIONS = ['All', 'Fridge', 'Pantry', 'Counter'];

export default function PantryPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');

  const filtered = useMemo(() => {
    return mockIngredients
      .map((ing) => ({ ingredient: ing, days: getDaysUntilExpiry(ing.expirationDate) }))
      .filter(({ ingredient }) => {
        const matchesSearch = ingredient.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'All' || ingredient.category === category;
        const matchesLocation = location === 'All' || ingredient.location === location;
        return matchesSearch && matchesCategory && matchesLocation;
      })
      .sort((a, b) => a.days - b.days);
  }, [search, category, location]);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          title="Pantry"
          description={`${mockIngredients.length} items in your pantry`}
          icon={<Package className="h-6 w-6" />}
        />

        {/* Filters */}
        <div className="mt-6 space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ingredients..."
              className="w-full rounded-lg border border-stone-300 py-2.5 pl-10 pr-4 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-medium text-stone-500">Category</label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      category === cat
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-medium text-stone-500">Location</label>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocation(loc)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      location === loc
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-6">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-white py-16 text-center">
              <Package className="h-10 w-10 text-stone-300" />
              <p className="mt-3 text-sm text-stone-500">No ingredients match your filters.</p>
            </div>
          ) : (
            <>
              <p className="mb-3 text-sm text-stone-400">
                Showing {filtered.length} of {mockIngredients.length} items
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {filtered.map(({ ingredient, days }) => (
                  <IngredientCard
                    key={ingredient.id}
                    ingredient={ingredient}
                    daysUntilExpiry={days}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
