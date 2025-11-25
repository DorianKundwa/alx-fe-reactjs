import { create } from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set(state => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(r => r.title.toLowerCase().includes(term.toLowerCase()))
  })),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(r => r.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
  })),
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
