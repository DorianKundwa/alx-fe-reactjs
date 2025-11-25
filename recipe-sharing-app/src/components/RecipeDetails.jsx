import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'
import { useParams } from 'react-router-dom'

function RecipeDetails({ recipeId: propId }) {
  const { id: routeId } = useParams()
  const id = propId ?? Number(routeId)
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id))

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.title}</h1>
      <p>ID: {recipe.id}</p>
      <p>{recipe.description}</p>
      <EditRecipeForm recipeId={id} />
      <DeleteRecipeButton recipeId={id} />
    </div>
  )
}

export default RecipeDetails
