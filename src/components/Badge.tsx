import { AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

type BadgeVariant = 'expired' | 'expiring' | 'fresh' | 'category' | 'difficulty' | 'tag';

type BadgeProps = {
  variant: BadgeVariant;
  children: React.ReactNode;
};

const STYLES: Record<BadgeVariant, string> = {
  expired: 'bg-red-100 text-red-700 border border-red-200',
  expiring: 'bg-amber-100 text-amber-700 border border-amber-200',
  fresh: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  category: 'bg-stone-100 text-stone-600 border border-stone-200',
  difficulty: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  tag: 'bg-stone-50 text-stone-500 border border-stone-200',
};

const ICONS: Partial<Record<BadgeVariant, typeof AlertCircle>> = {
  expired: AlertCircle,
  expiring: Clock,
  fresh: CheckCircle2,
};

export default function Badge({ variant, children }: BadgeProps) {
  const Icon = ICONS[variant];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${STYLES[variant]}`}>
      {Icon && <Icon className="h-3 w-3" />}
      {children}
    </span>
  );
}
