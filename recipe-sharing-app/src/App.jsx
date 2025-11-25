import { useEffect } from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import { useRecipeStore } from './components/recipeStore'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes)

  useEffect(() => {
    setRecipes([
      { id: 1, title: 'Pasta Primavera', description: 'Fresh veggies with pasta.' },
      { id: 2, title: 'Chocolate Cake', description: 'Rich and moist cake.' }
    ])
  }, [setRecipes])

  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
