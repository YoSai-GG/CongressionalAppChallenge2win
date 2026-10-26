import type { Ingredient } from '@/data/mockData';

const STORAGE_KEY = 'pantrypilot.ingredients.v1';

function generateId(): string {
  return 'u' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}

export function loadIngredients(seed: Ingredient[]): Ingredient[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveIngredients(seed);
      return [...seed];
    }
    const parsed = JSON.parse(raw) as Ingredient[];
    if (!Array.isArray(parsed)) {
      saveIngredients(seed);
      return [...seed];
    }
    return parsed;
  } catch {
    return [...seed];
  }
}

export function saveIngredients(ingredients: Ingredient[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ingredients));
  } catch {
    // ignore quota / private-mode errors
  }
}

export function createIngredient(
  input: Omit<Ingredient, 'id'>
): Ingredient {
  return { ...input, id: generateId() };
}

export function updateIngredient(
  ingredients: Ingredient[],
  id: string,
  patch: Partial<Omit<Ingredient, 'id'>>
): Ingredient[] {
  return ingredients.map((ing) =>
    ing.id === id ? { ...ing, ...patch } : ing
  );
}

export function deleteIngredient(
  ingredients: Ingredient[],
  id: string
): Ingredient[] {
  return ingredients.filter((ing) => ing.id !== id);
}
