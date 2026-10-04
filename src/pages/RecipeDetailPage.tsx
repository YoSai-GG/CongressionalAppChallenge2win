import { ArrowLeft, Clock, Users, Flame, ChefHat, CheckCircle2, Leaf } from 'lucide-react';
import type { Recipe } from '@/data/mockData';
import Badge from '@/components/Badge';

type RecipeDetailPageProps = {
  recipe: Recipe;
  onBack: () => void;
  backLabel?: string;
};

export default function RecipeDetailPage({ recipe, onBack, backLabel = 'Back' }: RecipeDetailPageProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50">
      {/* Hero image */}
      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
        <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
        <div className="absolute left-4 top-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-stone-700 backdrop-blur-sm transition-colors hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="mx-auto max-w-4xl">
            {recipe.usesExpiringIngredients && recipe.usesExpiringIngredients.length > 0 && (
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  <Leaf className="h-3 w-3" />
                  Cook before it expires
                </span>
              </div>
            )}
            <h1 className="text-2xl font-bold text-white sm:text-3xl">{recipe.title}</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-xs text-stone-400">Cook time</p>
              <p className="text-sm font-semibold text-stone-900">{recipe.cookTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-xs text-stone-400">Servings</p>
              <p className="text-sm font-semibold text-stone-900">{recipe.servings}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Flame className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-xs text-stone-400">Difficulty</p>
              <p className="text-sm font-semibold text-stone-900">{recipe.difficulty}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-stone-600">{recipe.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="tag">{tag}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          {/* Ingredients */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-lg font-bold text-stone-900">
                <ChefHat className="h-5 w-5 text-emerald-600" />
                Ingredients
              </h2>
              <ul className="mt-4 space-y-3">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>

              {recipe.usesExpiringIngredients && recipe.usesExpiringIngredients.length > 0 && (
                <div className="mt-5 border-t border-stone-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    Uses expiring ingredients
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {recipe.usesExpiringIngredients.map((name) => (
                      <Badge key={name} variant="expiring">{name}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-stone-900">Instructions</h2>
              <ol className="mt-4 space-y-5">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-stone-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
