import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DrinksDetailsBanner } from '../components/DrinksDetailsBanner';
import { useApi } from '../hooks';

import logoSvg from '../assets/logo.svg'

type DrinksBannerProps = {
  idDrink?: string;
  strDrink?: string;
  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions: string;
  strDrinkThumb?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strMeasure1?: string;
  strMeasure2?: string;
}

export function DetailsDrinks() {
  const [drinks, setDrinks] = useState<DrinksBannerProps[]>([])
  const params = useParams()

  const api = useApi()

  useEffect(() => {
    api.get(`lookup.php?i=${params.idDrink}`)
      .then(response => setDrinks(response.data.drinks))
  })

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-18'>
      <div className='my-10 flex gap-2 flex-row'>
        <img src={logoSvg} alt="" />
        <h1 className='text-3xl text-white font-black'>
          Details
        </h1>
      </div>

      {
        drinks?.map(drink => {
          return (
            <DrinksDetailsBanner
              key={drink.idDrink}
              {...drink}
            />
          )
        })
      }
    </div>
  )
}