import { useState } from 'react';
import NavBar, { type PageId } from '@/components/NavBar';
import Footer from '@/components/Footer';
import LandingPage from '@/pages/LandingPage';
import DashboardPage from '@/pages/DashboardPage';
import PantryPage from '@/pages/PantryPage';
import RecipesPage from '@/pages/RecipesPage';
import RecipeDetailPage from '@/pages/RecipeDetailPage';
import ExpirationPage from '@/pages/ExpirationPage';
import CompostingPage from '@/pages/CompostingPage';
import type { Recipe } from '@/data/mockData';

export default function App() {
  const [page, setPage] = useState<PageId>('landing');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleNavigate = (next: PageId) => {
    setSelectedRecipe(null);
    setPage(next);
    window.scrollTo({ top: 0 });
  };

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({ top: 0 });
  };

  const renderPage = () => {
    if (selectedRecipe) {
      return <RecipeDetailPage recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />;
    }

    switch (page) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} onRecipeClick={handleRecipeClick} />;
      case 'pantry':
        return <PantryPage />;
      case 'recipes':
        return <RecipesPage onRecipeClick={handleRecipeClick} />;
      case 'expiration':
        return <ExpirationPage onNavigate={handleNavigate} onRecipeClick={handleRecipeClick} />;
      case 'composting':
        return <CompostingPage />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  const showFooter = page !== 'landing' || selectedRecipe !== null;

  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <NavBar currentPage={page} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      {showFooter && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}
