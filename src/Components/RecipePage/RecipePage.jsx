import recipeImg from "../../assets/images/image-omelette.jpeg";
import "./recipepage.css";

export default function RecipePage() {
  return (
    <>
      <main className="recipe-component">
        <img
          className="recipe-img"
          alt="image of an omelette"
          src={recipeImg}
        />
        <div className="recipe-text">
          <h1 className="recipe-name">Simple Omelette Recipe</h1>

          <p className="recipe-description">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <section className="preperation-time-container">
            <h3 className="preperation-time-header">Preparation time</h3>

            <ul className="preperation-time-list">
              <li className="preperation-time-list-item">
                <span>
                  <strong>Total: </strong>Approximately 10 minutes
                </span>
              </li>

              <li className="preperation-time-list-item">
                <strong>Preparation: </strong>5 minutes
              </li>

              <li className="preperation-time-list-item">
                <strong>Cooking: </strong>5 minutes
              </li>
            </ul>
          </section>

          <section className="ingredients-container">
            <h2 className="section-title">Ingredients</h2>
            <ol className="ingredient-list">
              <li className="ingredient">2-3 large eggs</li>
              <li className="ingredient">Salt, to taste</li>
              <li className="ingredient">Pepper, to taste</li>
              <li className="ingredient"> 1 tablespoon of butter or oil</li>
              <li className="ingredient">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ol>
          </section>

          <hr className="section-septarator" />

          <section className="instructions-container">
            <h2 className="section-title">Instructions</h2>
            <ol className="instruction-list">
              <li className="instruction-step">
                <strong>Beat the eggs:</strong>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </li>

              <li className="instruction-step">
                <strong>Heat the pan:</strong>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>

              <li className="instruction-step">
                <strong>Cook the omelette:</strong>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>

              <li className="instruction-step">
                <strong>Add fillings (optional):</strong>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>

              <li className="instruction-step">
                <strong>Fold and serve:</strong>
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>

              <li className="instruction-step">
                <strong>Enjoy:</strong>
                Serve hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </section>

          <hr className="section-septarator" />

          <section className="nutrition-container">
            <h2 className="section-title">Nutrition</h2>
            <p>Calories 277kcal Carbs 0g Protein 20g Fat 22g</p>
          </section>
        </div>
      </main>
    </>
  );
}
