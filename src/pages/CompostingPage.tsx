import { Leaf, Sprout, Droplets, Layers, Truck, Wrench, CheckCircle2, XCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { mockCompostTips, compostableItems, doNotCompost } from '@/data/mockData';

const ICON_MAP = {
  green: Sprout,
  brown: Leaf,
  water: Droplets,
  layer: Layers,
  harvest: Truck,
  troubleshoot: Wrench,
};

const ICON_COLORS = {
  green: 'bg-emerald-50 text-emerald-600',
  brown: 'bg-amber-50 text-amber-700',
  water: 'bg-sky-50 text-sky-600',
  layer: 'bg-violet-50 text-violet-600',
  harvest: 'bg-orange-50 text-orange-600',
  troubleshoot: 'bg-red-50 text-red-600',
};

export default function CompostingPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <PageHeader
            title="Composting Guide"
            description="Turn food scraps into garden gold"
            icon={<Leaf className="h-6 w-6" />}
          />
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-stone-600">
                Composting is nature's way of recycling. When you compost food scraps instead of throwing them away, you reduce landfill waste and create nutrient-rich soil for your garden. About 30% of what we throw away could be composted instead.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-emerald-600">30%</p>
                  <p className="text-sm text-stone-400">of waste is compostable</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-600">3-6</p>
                  <p className="text-sm text-stone-400">months to finished compost</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-600">1:3</p>
                  <p className="text-sm text-stone-400">green to brown ratio</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/28214180/pexels-photo-28214180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Rich organic compost"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Tips grid */}
        <h2 className="text-xl font-bold text-stone-900">Six essentials for great compost</h2>
        <p className="mt-1 text-sm text-stone-500">Follow these principles and your pile will thrive.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mockCompostTips.map((tip) => {
            const Icon = ICON_MAP[tip.icon];
            const color = ICON_COLORS[tip.icon];
            return (
              <div
                key={tip.id}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-stone-900">{tip.title}</h3>
                <p className="mt-2 text-sm text-stone-500">{tip.description}</p>
              </div>
            );
          })}
        </div>

        {/* What to compost / what not to */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-stone-900">Yes — compost these</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {compostableItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <h2 className="text-lg font-bold text-stone-900">No — keep these out</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {doNotCompost.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compost bin image */}
        <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.pexels.com/photos/38319851/pexels-photo-38319851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Compost bin in a lush garden"
            className="aspect-[16/5] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
