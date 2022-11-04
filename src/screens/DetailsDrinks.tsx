import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DrinksDetailsBanner } from '../components/DrinksDetailsBanner';
import { useApi } from '../hooks';

import { ArrowLeft } from 'phosphor-react'

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

  const navigate = useNavigate()

  const api = useApi()

  useEffect(() => {
    api.get(`lookup.php?i=${params.idDrink}`)
      .then(response => setDrinks(response.data.drinks))
  })

  function handleBackButton() {
    navigate(-1)
  }

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-18'>
      <div className='flex flex-row w-full gap-2'>
        <button onClick={handleBackButton}>
          <ArrowLeft
            size={24}
            color='white'
          />
        </button>

        <div className='my-10 flex gap-2 flex-row '>
          <img src={logoSvg} alt="" />
          <h1 className='text-3xl text-white font-black'>
            Details
          </h1>
        </div>
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