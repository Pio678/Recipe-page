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
              <li className="preperation-time-item">
                <span>
                  <strong>Total: </strong>Approximately 10 minutes
                </span>
              </li>

              <li className="preperation-time-item">
                <span>
                  <strong>Preparation: </strong>5 minutes
                </span>
              </li>

              <li className="preperation-time-item">
                <span>
                  <strong>Cooking: </strong>5 minutes
                </span>
              </li>
            </ul>
          </section>

          <section className="ingredients-container">
            <h2 className="section-title">Ingredients</h2>
            <ul className="ingredient-list">
              <li className="ingredient">
                <span>2-3 large eggs</span>
              </li>
              <li className="ingredient">
                <span>Salt, to taste</span>
              </li>
              <li className="ingredient">
                <span>Pepper, to taste</span>
              </li>
              <li className="ingredient">
                {" "}
                <span>1 tablespoon of butter or oil</span>
              </li>
              <li className="ingredient">
                <span>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </section>

          <hr className="section-separator" />

          <section className="instructions-container">
            <h2 className="section-title">Instructions</h2>
            <ol className="instruction-list">
              <li className="instruction-step">
                <span>
                  <strong>Beat the eggs: </strong>
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </span>
              </li>

              <li className="instruction-step">
                <span>
                  <strong>Heat the pan: </strong>
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </span>
              </li>

              <li className="instruction-step">
                <span>
                  <strong>Cook the omelette: </strong>
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </span>
              </li>

              <li className="instruction-step">
                <span>
                  <strong>Add fillings (optional): </strong>
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </span>
              </li>

              <li className="instruction-step">
                <span>
                  <strong>Fold and serve: </strong>
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.
                </span>
              </li>

              <li className="instruction-step">
                <span>
                  <strong>Enjoy: </strong>
                  Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
            </ol>
          </section>

          <hr className="section-separator" />

          <section className="nutrition-container">
            <h2 className="section-title">Nutrition</h2>
            <p className="nutrition-description">
              The table below shows nutritional values per serving without the
              additional fillings
            </p>
            <table className="nutrition-table">
              <tr className="nutrition-table-row">
                <th className="nutrition-category">Calories</th>
                <td className="nutrition-data">277kcal </td>
              </tr>
              <tr className="nutrition-table-row">
                <th className="nutrition-category">Carbs</th>
                <td className="nutrition-data">0g </td>
              </tr>
              <tr className="nutrition-table-row">
                <th className="nutrition-category">Protein</th>
                <td className="nutrition-data">20g </td>
              </tr>
              <tr className="nutrition-table-row">
                <th className="nutrition-category">Fat</th>
                <td className="nutrition-data">22g </td>
              </tr>
            </table>
          </section>
        </div>
      </main>
    </>
  );
}
