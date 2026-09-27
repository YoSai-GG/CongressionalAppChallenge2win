import {
  ChefHat,
  Package,
  CalendarClock,
  UtensilsCrossed,
  Leaf,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Clock,
} from 'lucide-react';
import type { PageId } from '@/components/NavBar';

type LandingPageProps = {
  onNavigate: (page: PageId) => void;
};

const FEATURES = [
  {
    icon: Package,
    title: 'Smart Pantry Tracking',
    description: 'Know exactly what you have at home. Track quantities, categories, and storage locations — all in one place.',
  },
  {
    icon: CalendarClock,
    title: 'Expiration Alerts',
    description: 'Never let food go bad again. Get a clear view of what is expiring soon and act before it does.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Recipe Recommendations',
    description: 'Discover recipes that use the ingredients you already have, especially the ones that need using up fast.',
  },
  {
    icon: Leaf,
    title: 'Composting Guide',
    description: 'When food does reach the end of its life, learn how to compost it right and give back to the earth.',
  },
];

const STEPS = [
  { num: '01', title: 'See what is expiring', description: 'Your dashboard highlights ingredients nearing their expiration date.' },
  { num: '02', title: 'Cook before it expires', description: 'Tap any expiring item to get a recommended recipe that uses it up.' },
  { num: '03', title: 'Reduce your food waste', description: 'Cook smarter, waste less, and compost what remains. It is that simple.' },
];

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                Your kitchen, waste-free
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Stop wasting food.<br />
                <span className="text-emerald-600">Start cooking smarter.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-stone-600">
                PantryPilot helps you track what is in your pantry, see what is expiring, and find recipes to use it up — before it becomes waste.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-[0.98]"
                >
                  Go to Dashboard
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onNavigate('recipes')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-base font-semibold text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-50 active:scale-[0.98]"
                >
                  Browse Recipes
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-stone-500">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-emerald-600" />
                  <span>Reduce food waste</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span>Save time & money</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-stone-300/50">
                <img
                  src="https://images.pexels.com/photos/6654138/pexels-photo-6654138.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Fresh produce organized in a kitchen"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <CalendarClock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400">Expiring soon</p>
                    <p className="text-sm font-bold text-stone-900">4 ingredients</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-5 -top-5 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <UtensilsCrossed className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400">Recipes ready</p>
                    <p className="text-sm font-bold text-stone-900">6 suggestions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">Everything you need to manage your kitchen</h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-500">Four powerful tools working together to keep your food fresh, organized, and delicious.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-stone-500">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">How it works</h2>
            <p className="mx-auto mt-3 max-w-2xl text-stone-500">Three simple steps from expiring food to a delicious meal.</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="absolute left-full top-12 hidden h-px w-full -translate-x-1/2 bg-gradient-to-r from-emerald-300 to-transparent md:block" />
                )}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-600/20">
                  {step.num}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-stone-900">{step.title}</h3>
                <p className="mt-2 text-sm text-stone-500">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('dashboard')}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-[0.98]"
            >
              Try it now — it is free
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-700 px-8 py-16 text-center shadow-xl sm:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative">
            <ChefHat className="mx-auto h-12 w-12 text-emerald-200" />
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Ready to take control of your kitchen?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-emerald-100">
              Join the movement to reduce food waste. Track your pantry, cook smarter, and make every ingredient count.
            </p>
            <button
              onClick={() => onNavigate('dashboard')}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50 hover:shadow-xl active:scale-[0.98]"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
