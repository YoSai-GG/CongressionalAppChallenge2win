import { useEffect, useMemo, useState } from 'react';
import { Package, Search, Plus, X } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import IngredientCard from '@/components/IngredientCard';
import { mockIngredients, type Ingredient } from '@/data/mockData';
import { getDaysUntilExpiry } from '@/pages/DashboardPage';
import {
  loadIngredients,
  saveIngredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
} from '@/lib/pantryStore';

const CATEGORIES = ['All', 'Produce', 'Dairy', 'Meat', 'Pantry', 'Bakery'];
const LOCATIONS = ['All', 'Fridge', 'Pantry', 'Counter'];

const CATEGORY_OPTIONS = ['Produce', 'Dairy', 'Meat', 'Pantry', 'Bakery'];
const LOCATION_OPTIONS = ['Fridge', 'Pantry', 'Counter'];
const UNITS = ['pieces', 'bags', 'box', 'lbs', 'grams', 'liters', 'ml', 'oz', 'loaf', 'head', 'box'];

type FormState = {
  name: string;
  quantity: string;
  unit: string;
  category: string;
  expirationDate: string;
  location: string;
};

const emptyForm: FormState = {
  name: '',
  quantity: '1',
  unit: 'pieces',
  category: 'Produce',
  expirationDate: '',
  location: 'Fridge',
};

function toForm(ing: Ingredient): FormState {
  return {
    name: ing.name,
    quantity: String(ing.quantity),
    unit: ing.unit,
    category: ing.category,
    expirationDate: ing.expirationDate,
    location: ing.location,
  };
}

function todayISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + 3);
  return d.toISOString().split('T')[0];
}

export default function PantryPage() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIngredients(loadIngredients(mockIngredients));
  }, []);

  const persist = (next: Ingredient[]) => {
    setIngredients(next);
    saveIngredients(next);
  };

  const filtered = useMemo(() => {
    return ingredients
      .map((ing) => ({ ingredient: ing, days: getDaysUntilExpiry(ing.expirationDate) }))
      .filter(({ ingredient }) => {
        const matchesSearch = ingredient.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'All' || ingredient.category === category;
        const matchesLocation = location === 'All' || ingredient.location === location;
        return matchesSearch && matchesCategory && matchesLocation;
      })
      .sort((a, b) => a.days - b.days);
  }, [ingredients, search, category, location]);

  const openAdd = () => {
    setEditingId(null);
    setForm({ ...emptyForm, expirationDate: todayISO() });
    setError(null);
    setModalOpen(true);
  };

  const openEdit = (ing: Ingredient) => {
    setEditingId(ing.id);
    setForm(toForm(ing));
    setError(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    if (!name) {
      setError('Please enter an ingredient name.');
      return;
    }
    const qty = Number(form.quantity);
    if (!Number.isFinite(qty) || qty <= 0) {
      setError('Quantity must be a positive number.');
      return;
    }
    if (!form.expirationDate) {
      setError('Please choose an expiration date.');
      return;
    }

    const payload = {
      name,
      quantity: qty,
      unit: form.unit,
      category: form.category,
      expirationDate: form.expirationDate,
      location: form.location,
    };

    if (editingId) {
      persist(updateIngredient(ingredients, editingId, payload));
    } else {
      persist([...ingredients, createIngredient(payload)]);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    persist(deleteIngredient(ingredients, id));
  };

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          title="Pantry"
          description={`${ingredients.length} items in your pantry`}
          icon={<Package className="h-6 w-6" />}
        />

        {/* Add button */}
        <div className="mt-6">
          <button
            onClick={openAdd}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            <Plus className="h-4 w-4" />
            Add Ingredient
          </button>
        </div>

        {/* Filters */}
        <div className="mt-4 space-y-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ingredients..."
              className="w-full rounded-lg border border-stone-300 py-2.5 pl-10 pr-4 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-medium text-stone-500">Category</label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      category === cat
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-medium text-stone-500">Location</label>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocation(loc)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      location === loc
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-6">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-white py-16 text-center">
              <Package className="h-10 w-10 text-stone-300" />
              <p className="mt-3 text-sm text-stone-500">No ingredients match your filters.</p>
            </div>
          ) : (
            <>
              <p className="mb-3 text-sm text-stone-400">
                Showing {filtered.length} of {ingredients.length} items
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {filtered.map(({ ingredient, days }) => (
                  <IngredientCard
                    key={ingredient.id}
                    ingredient={ingredient}
                    daysUntilExpiry={days}
                    onEdit={() => openEdit(ingredient)}
                    onDelete={() => handleDelete(ingredient.id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Add/Edit modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-stone-900">
                {editingId ? 'Edit ingredient' : 'Add ingredient'}
              </h2>
              <button
                onClick={closeModal}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-stone-500">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="e.g. Spinach"
                  className="w-full rounded-lg border border-stone-300 py-2.5 px-3 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-stone-500">Quantity</label>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={form.quantity}
                    onChange={(e) => updateField('quantity', e.target.value)}
                    className="w-full rounded-lg border border-stone-300 py-2.5 px-3 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-stone-500">Unit</label>
                  <input
                    type="text"
                    list="unit-options"
                    value={form.unit}
                    onChange={(e) => updateField('unit', e.target.value)}
                    className="w-full rounded-lg border border-stone-300 py-2.5 px-3 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <datalist id="unit-options">
                    {UNITS.map((u) => (
                      <option key={u} value={u} />
                    ))}
                  </datalist>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-stone-500">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => updateField('category', e.target.value)}
                    className="w-full rounded-lg border border-stone-300 py-2.5 px-3 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  >
                    {CATEGORY_OPTIONS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-stone-500">Location</label>
                  <select
                    value={form.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    className="w-full rounded-lg border border-stone-300 py-2.5 px-3 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  >
                    {LOCATION_OPTIONS.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-stone-500">Expiration date</label>
                <input
                  type="date"
                  value={form.expirationDate}
                  onChange={(e) => updateField('expirationDate', e.target.value)}
                  className="w-full rounded-lg border border-stone-300 py-2.5 px-3 text-sm text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700"
                >
                  {editingId ? 'Save changes' : 'Add ingredient'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
