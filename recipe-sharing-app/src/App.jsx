import { useEffect } from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { useRecipeStore } from './components/recipeStore'

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes)

  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Pasta Primavera', description: 'Fresh veggies with pasta.' },
      { id: 2, title: 'Chocolate Cake', description: 'Rich and moist cake.' }
    ])
  }, [setRecipes])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default App
