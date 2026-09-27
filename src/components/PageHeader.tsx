type PageHeaderProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: React.ReactNode;
};

export default function PageHeader({ title, description, icon, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
          {icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900">{title}</h1>
          <p className="text-sm text-stone-500">{description}</p>
        </div>
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
