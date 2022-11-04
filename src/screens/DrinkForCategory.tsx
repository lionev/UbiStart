import react, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DrinksBanner } from '../components/DrinksBanner'
import { useApi } from '../hooks';
import logoSvg from '../assets/logo.svg'
import { ArrowLeft } from 'phosphor-react';


type DrinksBannerProps = {
  idDrink?: string;
  strDrink?: string;
  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strDrinkThumb?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strMeasure1?: string;
  strMeasure2?: string;
}




export function DrinkForCategory() {
  const [drinks, setDrinks] = useState<DrinksBannerProps[]>([])
  const params = useParams()

  const api = useApi()

  const navigate = useNavigate()

  function handleBackButton() {
    navigate(-1)
  }


  const category = params.strCategory?.replace('_', '/')

  useEffect(() => {
    api.get(`/filter.php?c=${category}`)
      .then(response => setDrinks(response.data.drinks))

  }, [category])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-18'>
      <div className='flex flex-row w-full items-center mt-10 gap-2'>
        <button onClick={handleBackButton}>
          <ArrowLeft
            size={24}
            color='white'
          />
        </button>
        <div className='flex gap-2 flex-row'>
          <img src={logoSvg} alt="" />
          <h1 className='text-3xl text-white font-black'>
            {category}
          </h1>
        </div>
      </div>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {drinks?.map(drink => {
          return (
            <DrinksBanner
              key={drink.idDrink}
              to={`/DetailsDrinks/${drink.idDrink}`}
              strDrink={drink.strDrink}
              strDrinkThumb={drink.strDrinkThumb}
            />
          )
        })}
      </div>
    </div>
  )
}