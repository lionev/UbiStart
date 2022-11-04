interface DrinksDetailsBannerProps {
  idDrink?: string;
  strDrink?: string;
  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;

}

export function DrinksDetailsBanner({
  strDrinkThumb,
  strDrink,
  strCategory,
  strGlass,
  strAlcoholic,
  strInstructions,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  idDrink,
  strMeasure1,
  strMeasure2,
  strMeasure3,
}: DrinksDetailsBannerProps) {
  return (

    <div className="w-full h-full flex overflow-hidden bg-zinc-900">
      <img src={strDrinkThumb} className="rounded-lg bg-red-500 resize max-w-lg" />


      <div className="flex flex-col p-24">
        <strong className="text-white">{strDrink}</strong>
        <h1 className="text-white">{strAlcoholic}</h1>

        <div className="mt-1">
          <p className="text-zinc-300">Category: {''} {strCategory}</p>
          <p className="text-zinc-300"> Glass: {strGlass}</p>
        </div>

        <div className="mt-6">
          <strong className="text-white">Instructions</strong>
          <p className="text-zinc-300">{strInstructions}</p>
        </div>

        <div className="mt-6">
          <strong className="text-white">Ingredients</strong>
          <ul>
            <li className="text-zinc-300">{strIngredient1}</li>
            <li className="text-zinc-300">{strIngredient2}</li>
            <li className="text-zinc-300">{strIngredient3}</li>
            <li className="text-zinc-300">{strIngredient4}</li>
          </ul>
        </div>

        <div className="mt-6">
          <strong className="text-white">Measure</strong>
          <ul>
            <li className="text-zinc-300">{strMeasure1}</li>
            <li className="text-zinc-300">{strMeasure2}</li>
            <li className="text-zinc-300">{strMeasure3}</li>
          </ul>
        </div>

      </div>
    </div>
  )
}