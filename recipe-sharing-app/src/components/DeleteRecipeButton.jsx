import { useRecipeStore } from './recipeStore'
import { useParams, useNavigate } from 'react-router-dom'

function DeleteRecipeButton({ recipeId: propId }) {
  const { id: routeId } = useParams()
  const id = propId ?? Number(routeId)
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteRecipe(id)
    navigate('/')
  }

  return (
    <button onClick={handleDelete} style={{ marginTop: '12px' }}>
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton
