import { Package, CalendarClock, UtensilsCrossed, Leaf, ArrowRight, AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { useMemo } from 'react';
import type { PageId } from '@/components/NavBar';
import PageHeader from '@/components/PageHeader';
import StatCard from '@/components/StatCard';
import IngredientCard from '@/components/IngredientCard';
import RecipeCard from '@/components/RecipeCard';
import { mockIngredients, mockRecipes, type Ingredient, type Recipe } from '@/data/mockData';

type DashboardPageProps = {
  onNavigate: (page: PageId) => void;
  onRecipeClick: (recipe: Recipe) => void;
};

export function getDaysUntilExpiry(dateStr: string): number {
  const expiry = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export default function DashboardPage({ onNavigate, onRecipeClick }: DashboardPageProps) {
  const { expiringSoon, expired, fresh, expiringWithRecipes } = useMemo(() => {
    const withDays = mockIngredients.map((ing) => ({
      ingredient: ing,
      days: getDaysUntilExpiry(ing.expirationDate),
    }));

    const expired = withDays.filter((x) => x.days < 0);
    const expiringSoon = withDays
      .filter((x) => x.days >= 0 && x.days <= 3)
      .sort((a, b) => a.days - b.days);
    const fresh = withDays.filter((x) => x.days > 3);

    const expiringNames = expiringSoon.map((x) => x.ingredient.name);
    const expiringWithRecipes = mockRecipes
      .filter((r) => r.usesExpiringIngredients?.some((name) => expiringNames.includes(name)))
      .sort((a, b) => {
        const aMatch = (a.usesExpiringIngredients ?? []).filter((name) => expiringNames.includes(name)).length;
        const bMatch = (b.usesExpiringIngredients ?? []).filter((name) => expiringNames.includes(name)).length;
        return bMatch - aMatch;
      });

    return { expiringSoon, expired, fresh, expiringWithRecipes };
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          title="Dashboard"
          description="An overview of your kitchen at a glance"
          icon={<Package className="h-6 w-6" />}
        />

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            label="Total items"
            value={mockIngredients.length}
            icon={<Package className="h-5 w-5" />}
            accent="emerald"
            subtext="Across your pantry"
          />
          <StatCard
            label="Expiring soon"
            value={expiringSoon.length}
            icon={<Clock className="h-5 w-5" />}
            accent="amber"
            subtext="Within 3 days"
          />
          <StatCard
            label="Expired"
            value={expired.length}
            icon={<AlertCircle className="h-5 w-5" />}
            accent="red"
            subtext="Needs attention"
          />
          <StatCard
            label="Recipes ready"
            value={expiringWithRecipes.length}
            icon={<UtensilsCrossed className="h-5 w-5" />}
            accent="blue"
            subtext="From expiring items"
          />
        </div>

        {/* Cook Before It Expires - main user flow */}
        {expiringSoon.length > 0 && (
          <div className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white shadow-sm">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-stone-900">Cook Before It Expires</h2>
                    <p className="text-sm text-stone-500">
                      {expiringSoon.length} {expiringSoon.length === 1 ? 'item needs' : 'items need'} using up soon
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('expiration')}
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-medium text-amber-700 transition-colors hover:bg-amber-50"
                >
                  View all expiring
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {expiringSoon.slice(0, 6).map(({ ingredient, days }) => (
                  <IngredientCard key={ingredient.id} ingredient={ingredient} daysUntilExpiry={days} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recommended recipes from expiring ingredients */}
        {expiringWithRecipes.length > 0 && (
          <div className="mt-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5 text-emerald-600" />
                <h2 className="text-lg font-bold text-stone-900">Recommended recipes</h2>
              </div>
              <button
                onClick={() => onNavigate('recipes')}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
              >
                All recipes
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {expiringWithRecipes.slice(0, 3).map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => onRecipeClick(recipe)}
                  highlighted
                />
              ))}
            </div>
          </div>
        )}

        {/* Quick links */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <QuickLinkCard
            title="Browse Pantry"
            description={`${mockIngredients.length} ingredients tracked`}
            icon={<Package className="h-5 w-5" />}
            onClick={() => onNavigate('pantry')}
          />
          <QuickLinkCard
            title="All Recipes"
            description={`${mockRecipes.length} recipes to explore`}
            icon={<UtensilsCrossed className="h-5 w-5" />}
            onClick={() => onNavigate('recipes')}
          />
          <QuickLinkCard
            title="Composting Guide"
            description="Learn to compost food scraps"
            icon={<Leaf className="h-5 w-5" />}
            onClick={() => onNavigate('composting')}
          />
        </div>
      </div>
    </div>
  );
}

function QuickLinkCard({
  title,
  description,
  icon,
  onClick,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 text-left shadow-sm transition-all hover:shadow-md hover:border-emerald-300"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
        <p className="text-xs text-stone-400">{description}</p>
      </div>
      <ArrowRight className="h-4 w-4 text-stone-300 transition-colors group-hover:text-emerald-600" />
    </button>
  );
}
