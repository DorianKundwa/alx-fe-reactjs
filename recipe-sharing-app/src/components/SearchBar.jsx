import { useRecipeStore } from './recipeStore'

function SearchBar() {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
  const filterRecipes = useRecipeStore(state => state.filterRecipes)

  const handleChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    filterRecipes()
  }

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{ marginBottom: '12px', padding: '8px', width: '100%' }}
    />
  )
}

export default SearchBar
