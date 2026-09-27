type StatCardProps = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  accent?: 'emerald' | 'amber' | 'red' | 'blue';
  subtext?: string;
};

const ACCENT_STYLES = {
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
  red: 'bg-red-50 text-red-600',
  blue: 'bg-sky-50 text-sky-600',
};

export default function StatCard({ label, value, icon, accent = 'emerald', subtext }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-stone-500">{label}</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-stone-900">{value}</p>
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${ACCENT_STYLES[accent]}`}>
          {icon}
        </div>
      </div>
      {subtext && <p className="mt-2 text-xs text-stone-400">{subtext}</p>}
    </div>
  );
}
