import { useEffect, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { DrinksBanner } from './components/DrinksBanner'

import * as ScrollArea from '@radix-ui/react-scroll-area'

import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'
import logoSvg from './assets/logo.svg'

import { useApi } from './hooks/useApi'
import { Input } from './components/Form/Input'


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
  nameCategory: string;
}

interface DrinksInputProps {
  idDrink?: string;
  strDrink?: string;
  strDrinkThumb?: string;
}


function App() {

  const [drinks, setDrinks] = useState<DrinksBannerProps[]>([])
  const [inputDrink, setInputDrink] = useState('')
  const [listDrink, setListDrink] = useState<DrinksBannerProps[]>([])
  const [selectDrink, setSelectDrink] = useState<DrinksBannerProps[]>()
  const [drinkNames, setDrinkNames] = useState<DrinksInputProps[]>([])

  const api = useApi()

  useEffect(() => {
    if (inputDrink.length) {
      api.get(`search.php?s=${inputDrink}`)
        .then(response => {
          const drinksNames: DrinksInputProps[]
            = response.data.drinks.map((drink: DrinksBannerProps) => {
              return {
                idDrink: drink.idDrink,
                strDrink: drink.strDrink,
                strDrinkThumb: drink.strDrinkThumb
              }
            })
          setDrinkNames(drinksNames)
        })
    }
  }, [inputDrink])

  useEffect(() => {
    api.get(`list.php?c=list`)
      .then(response => {
        const newDrinks = response.data.drinks.map((drink: DrinksBannerProps) => {
          return {
            ...drink,
            strCategory: drink.strCategory?.replace('/', '_'),
            nameCategory: drink.strCategory
          }
        })
        setDrinks(newDrinks)
      })
  }, [])

  function seachDrinks(event: any) {
    event.preventDefault()
    api.get(`search.php?s=${inputDrink}`)
      .then(response => setListDrink(response.data.drinks))
    setDrinkNames([])
  }

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-18 z-10'>
      <div className='flex flex-row mt-52 w-full items-center'>
        <img src={logoSvg} alt="" />
        <h1 className='text-3xl text-white font-black ml-6'>
          SeachCocktail
        </h1>
      </div>
      <div>
        <div className='flex self-stretch mt-7 items-center w-[1344px] absolute'>
          <Input
            id='strDrink'
            type='text'
            value={inputDrink}
            onChange={(e) => setInputDrink(e.target.value)}
            placeholder='Encontre o seu drink'
            listOptions={drinkNames}
          >
            <button
              type='submit'
              onClick={seachDrinks}
              className='px-4'
            >
              <MagnifyingGlassPlus
                size={24}
                color='white'
              />
            </button>
          </Input>
        </div>

        <div className='grid grid-cols-6 gap-6 mt-40'>
          {drinks.map(drink => {
            return (
              <DrinksBanner
                key={drink.strCategory}
                to={`/DrinkForCategory/${drink.strCategory}`}
                strCategory={drink.nameCategory}
                strDrinkThumb={'https://img.freepik.com/premium-vector/drinks-background_23-2148043429.jpg?w=2000'}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
