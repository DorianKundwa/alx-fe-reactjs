import { useRecipeStore } from './recipeStore'

function RecommendationsList() {
  const recommendations = useRecipeStore(state => state.recommendations)
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)

  return (
    <div style={{ marginTop: '16px' }}>
      <h2>Recommendations</h2>
      <button onClick={generateRecommendations} style={{ marginBottom: '12px' }}>
        Generate Recommendations
      </button>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      {recommendations.length === 0 && <p>No recommendations yet.</p>}
    </div>
  )
}

export default RecommendationsList
