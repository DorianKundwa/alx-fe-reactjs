import { useState } from 'react'
import { useRecipeStore } from './recipeStore'
import { useParams, useNavigate } from 'react-router-dom'

function EditRecipeForm({ recipeId: propId }) {
  const { id: routeId } = useParams()
  const id = propId ?? Number(routeId)
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id))
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault()
    updateRecipe({ id, title, description })
    navigate('/')
  }

  if (!recipe) return null

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '12px' }}>
      <input
        type="text"
        value={title !== '' ? title : (recipe?.title ?? '')}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description !== '' ? description : (recipe?.description ?? '')}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditRecipeForm
