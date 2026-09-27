import { Clock, Users, Flame } from 'lucide-react';
import type { Recipe } from '@/data/mockData';
import Badge from './Badge';

type RecipeCardProps = {
  recipe: Recipe;
  onClick: () => void;
  highlighted?: boolean;
};

export default function RecipeCard({ recipe, onClick, highlighted = false }: RecipeCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white text-left shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {highlighted && (
          <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
            Cook before it expires
          </span>
        )}
        <div className="absolute right-3 top-3 flex gap-1.5">
          {recipe.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-stone-900/70 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-stone-900 group-hover:text-emerald-700">
          {recipe.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-stone-500">
          {recipe.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-stone-400">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {recipe.cookTime}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {recipe.servings} servings
          </span>
          <span className="inline-flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {recipe.difficulty}
          </span>
        </div>

        {recipe.usesExpiringIngredients && recipe.usesExpiringIngredients.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-stone-100 pt-3">
            <span className="text-xs font-medium text-stone-400">Uses:</span>
            {recipe.usesExpiringIngredients.slice(0, 3).map((ing) => (
              <Badge key={ing} variant="expiring">{ing}</Badge>
            ))}
            {recipe.usesExpiringIngredients.length > 3 && (
              <span className="text-xs text-stone-400">+{recipe.usesExpiringIngredients.length - 3} more</span>
            )}
          </div>
        )}
      </div>
    </button>
  );
}
