import { useMemo } from 'react';
import { CalendarClock, ArrowRight, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import type { PageId } from '@/components/NavBar';
import type { Recipe } from '@/data/mockData';
import PageHeader from '@/components/PageHeader';
import StatCard from '@/components/StatCard';
import IngredientCard from '@/components/IngredientCard';
import RecipeCard from '@/components/RecipeCard';
import { mockIngredients, mockRecipes } from '@/data/mockData';
import { getDaysUntilExpiry } from '@/pages/DashboardPage';

type ExpirationPageProps = {
  onNavigate: (page: PageId) => void;
  onRecipeClick: (recipe: Recipe) => void;
};

export default function ExpirationPage({ onRecipeClick }: ExpirationPageProps) {
  const { expired, expiringSoon, fresh } = useMemo(() => {
    const withDays = mockIngredients.map((ing) => ({
      ingredient: ing,
      days: getDaysUntilExpiry(ing.expirationDate),
    }));
    return {
      expired: withDays.filter((x) => x.days < 0).sort((a, b) => a.days - b.days),
      expiringSoon: withDays.filter((x) => x.days >= 0 && x.days <= 3).sort((a, b) => a.days - b.days),
      fresh: withDays.filter((x) => x.days > 3).sort((a, b) => a.days - b.days),
    };
  }, []);

  const expiringNames = expiringSoon.map((x) => x.ingredient.name);
  const recommendedRecipes = mockRecipes
    .filter((r) => r.usesExpiringIngredients?.some((name) => expiringNames.includes(name)))
    .sort((a, b) => {
      const aMatch = (a.usesExpiringIngredients ?? []).filter((n) => expiringNames.includes(n)).length;
      const bMatch = (b.usesExpiringIngredients ?? []).filter((n) => expiringNames.includes(n)).length;
      return bMatch - aMatch;
    });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          title="Expiration"
          description="Track what is expiring and act before it goes to waste"
          icon={<CalendarClock className="h-6 w-6" />}
        />

        {/* Summary stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <StatCard
            label="Expired"
            value={expired.length}
            icon={<AlertCircle className="h-5 w-5" />}
            accent="red"
          />
          <StatCard
            label="Expiring soon"
            value={expiringSoon.length}
            icon={<Clock className="h-5 w-5" />}
            accent="amber"
          />
          <StatCard
            label="Fresh"
            value={fresh.length}
            icon={<CheckCircle2 className="h-5 w-5" />}
            accent="emerald"
          />
        </div>

        {/* Expired section */}
        {expired.length > 0 && (
          <section className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <h2 className="text-lg font-bold text-stone-900">Expired</h2>
              <span className="text-sm text-stone-400">({expired.length})</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {expired.map(({ ingredient, days }) => (
                <IngredientCard key={ingredient.id} ingredient={ingredient} daysUntilExpiry={days} />
              ))}
            </div>
          </section>
        )}

        {/* Expiring soon section */}
        {expiringSoon.length > 0 && (
          <section className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-500" />
              <h2 className="text-lg font-bold text-stone-900">Expiring soon</h2>
              <span className="text-sm text-stone-400">({expiringSoon.length})</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {expiringSoon.map(({ ingredient, days }) => (
                <IngredientCard key={ingredient.id} ingredient={ingredient} daysUntilExpiry={days} />
              ))}
            </div>

            {/* Cook before it expires */}
            {recommendedRecipes.length > 0 && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-stone-900">Cook before it expires</h3>
                </div>
                <p className="mt-1 text-sm text-stone-500">
                  These recipes use your expiring ingredients — cook them tonight.
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendedRecipes.map((recipe) => (
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
          </section>
        )}

        {/* Fresh section */}
        {fresh.length > 0 && (
          <section className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <h2 className="text-lg font-bold text-stone-900">Fresh</h2>
              <span className="text-sm text-stone-400">({fresh.length})</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {fresh.map(({ ingredient, days }) => (
                <IngredientCard key={ingredient.id} ingredient={ingredient} daysUntilExpiry={days} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
