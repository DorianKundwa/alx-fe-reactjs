import { create } from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  setSearchTerm: (term) => set(state => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(r => r.title.toLowerCase().includes(term.toLowerCase()))
  })),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
  })),
  addFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId) ? state.favorites : [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5)
    return { recommendations: recommended }
  }),
  addRecipe: (newRecipe) => set(state => {
    const nextRecipes = [...state.recipes, newRecipe]
    const nextFiltered = nextRecipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    return { recipes: nextRecipes, filteredRecipes: nextFiltered }
  }),
  updateRecipe: (updated) => set(state => {
    const nextRecipes = state.recipes.map(r => r.id === updated.id ? { ...r, ...updated } : r)
    const nextFiltered = nextRecipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    return { recipes: nextRecipes, filteredRecipes: nextFiltered }
  }),
  deleteRecipe: (id) => set(state => {
    const nextRecipes = state.recipes.filter(r => r.id !== id)
    const nextFiltered = nextRecipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    return { recipes: nextRecipes, filteredRecipes: nextFiltered }
  }),
  setRecipes: (recipes) => set(state => ({
    recipes,
    filteredRecipes: recipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
  }))
}))
