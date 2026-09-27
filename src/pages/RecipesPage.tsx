import { useMemo, useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import RecipeCard from '@/components/RecipeCard';
import { mockRecipes, type Recipe } from '@/data/mockData';

type RecipesPageProps = {
  onRecipeClick: (recipe: Recipe) => void;
};

const FILTERS = ['All', 'Vegetarian', 'Vegan', 'Breakfast', 'Dinner', '30-min', 'No-cook'];

export default function RecipesPage({ onRecipeClick }: RecipesPageProps) {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'quick' | 'servings'>('recommended');

  const recipes = useMemo(() => {
    let result = [...mockRecipes];

    if (filter !== 'All') {
      result = result.filter((r) => r.tags.includes(filter));
    }

    if (sortBy === 'quick') {
      result.sort((a, b) => parseInt(a.cookTime) - parseInt(b.cookTime));
    } else if (sortBy === 'servings') {
      result.sort((a, b) => b.servings - a.servings);
    } else {
      result.sort((a, b) => {
        const aUses = (a.usesExpiringIngredients ?? []).length;
        const bUses = (b.usesExpiringIngredients ?? []).length;
        return bUses - aUses;
      });
    }

    return result;
  }, [filter, sortBy]);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          title="Recipes"
          description={`${mockRecipes.length} recipes to cook with what you have`}
          icon={<UtensilsCrossed className="h-6 w-6" />}
        />

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-stone-400">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="recommended">Recommended</option>
              <option value="quick">Quickest first</option>
              <option value="servings">Most servings</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6">
          {recipes.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-white py-16 text-center">
              <UtensilsCrossed className="h-10 w-10 text-stone-300" />
              <p className="mt-3 text-sm text-stone-500">No recipes match this filter.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => onRecipeClick(recipe)}
                  highlighted={!!recipe.usesExpiringIngredients?.length}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
