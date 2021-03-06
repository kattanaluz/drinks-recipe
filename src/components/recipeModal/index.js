import css from "./recipe.module.css";
import Image from "../image";
import Modal from "react-modal";
import Button from "../button";
import { useState } from "react";

export default function RecipeModal({ data }) {
  const [state, setState] = useState(false);
  function openModal() {
    setState(true);
  }
  function closeModal() {
    setState(false);
  }
  return (
    <div className={css.recipeResults}>
      <div className={css.recipeHeader}>
        <Image src={data.strDrinkThumb} className={css.drinkImage} />
        <p className={css.recipeType}>{data.strAlcoholic}</p>
        <h2 className={css.recipeH2} onClick={openModal}>
          {data.strDrink}
        </h2>
        <div className={css.division}></div>
        <Button
          className={css.openModalBtn}
          onClick={openModal}
          text="quick look"
        />
      </div>
      <Modal isOpen={state} className={css.modalRecipe}>
        <div className={css.recipeWrapper}>
          <Button
            onClick={closeModal}
            className={css.closeModalRecipeBtn}
            text="close"
          />
          <h3>{data.strDrink} Recipe</h3>
          <div className={css.ingredients}>
            <p className={css.ingredientsParagraph}>Ingredients</p>
            <ul>
              <li>
                {data.strMeasure1} {data.strIngredient1}
              </li>
              <li>
                {data.strMeasure2} {data.strIngredient2}
              </li>
              <li>
                {data.strMeasure3} {data.strIngredient3}
              </li>
              <li>
                {data.strMeasure4} {data.strIngredient4}
              </li>
              <li>
                {data.strMeasure5} {data.strIngredient5}
              </li>
              <li>
                {data.strMeasure6} {data.strIngredient6}
              </li>
              <li>
                {data.strMeasure7} {data.strIngredient7}
              </li>
              <li>
                {data.strMeasure8} {data.strIngredient8}
              </li>
              <li>
                {data.strMeasure9} {data.strIngredient9}
              </li>
              <li>
                {data.strMeasure10} {data.strIngredient10}
              </li>
            </ul>
          </div>
          <p className={css.methodParagraph}>Method</p>
          <p> {data.strInstructions} </p>
        </div>
      </Modal>
    </div>
  );
}
