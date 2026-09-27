import { AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import type { Ingredient } from '@/data/mockData';
import Badge from './Badge';

type IngredientCardProps = {
  ingredient: Ingredient;
  daysUntilExpiry: number;
  onClick?: () => void;
};

export default function IngredientCard({ ingredient, daysUntilExpiry, onClick }: IngredientCardProps) {
  const expired = daysUntilExpiry < 0;
  const expiringSoon = daysUntilExpiry >= 0 && daysUntilExpiry <= 3;

  const Icon = expired ? AlertCircle : expiringSoon ? Clock : CheckCircle2;
  const iconColor = expired ? 'text-red-500' : expiringSoon ? 'text-amber-500' : 'text-emerald-500';

  const expiryLabel = expired
    ? `${Math.abs(daysUntilExpiry)} day${Math.abs(daysUntilExpiry) === 1 ? '' : 's'} ago`
    : daysUntilExpiry === 0
    ? 'Today'
    : `In ${daysUntilExpiry} day${daysUntilExpiry === 1 ? '' : 's'}`;

  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={`flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 text-left shadow-sm transition-all ${
        onClick ? 'hover:shadow-md hover:border-stone-300 cursor-pointer' : 'cursor-default'
      }`}
    >
      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-stone-50 ${iconColor}`}>
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-stone-900">{ingredient.name}</h3>
          <Badge variant={expired ? 'expired' : expiringSoon ? 'expiring' : 'fresh'}>
            {expiryLabel}
          </Badge>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-400">
          <span>{ingredient.quantity} {ingredient.unit}</span>
          <span className="h-1 w-1 rounded-full bg-stone-300" />
          <span>{ingredient.category}</span>
          <span className="h-1 w-1 rounded-full bg-stone-300" />
          <span>{ingredient.location}</span>
        </div>
      </div>
    </button>
  );
}
