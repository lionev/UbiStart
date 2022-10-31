import { useEffect, useState, InputHTMLAttributes, FormHTMLAttributes } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { DrinksBanner } from './components/DrinksBanner'

import * as ScrollArea from '@radix-ui/react-scroll-area'

import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'
import logoSvg from './assets/logo.png'

import { useApi } from './hooks/useApi'
import { SeachButton } from './components/SeachButton'
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
}

function App() {

  const [drinks, setDrinks] = useState<DrinksBannerProps[]>([])
  const [inputDrink, setInputDrink] = useState('')
  const [listDrink, setListDrink] = useState<DrinksBannerProps[]>([])
  const [selectDrink, setSelectDrink] = useState<DrinksBannerProps[]>()

  const api = useApi()

  useEffect(() => {
    api.get(`list.php?c=list`)
      .then(response => setDrinks(response.data.drinks))
  }, [])

  useEffect(() => {
    console.log(listDrink)
  }, [listDrink])

  function seachDrinks(event: any){
    event.preventDefault()
    api.get(`search.php?s=${inputDrink}`)
    .then(response => setListDrink(response.data.drinks))
  }

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-18'>
      <img src={logoSvg} alt="" />
      <h1 className='text-3xl text-white font-black'>
        Encontre seu <span className='bg-seach-gradient text-transparent bg-clip-text'>Coquetel</span> aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {drinks.map(drink => {
          return (
            <DrinksBanner
              key={drink.strCategory}
              strCategory={drink.strCategory}
              strDrinkThumb={'https://img.freepik.com/premium-vector/drinks-background_23-2148043429.jpg?w=2000'}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <SeachButton />

        <Dialog.Portal >
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Pesquise um drink</Dialog.Title>

              <form className='mt-8 flex flex-col gap-4'> 
                <div className='flex flex-col gap-2'>
                  <label htmlFor="strDrink" className='font-semibold'>Qual drink você procura?</label>
                  <Input
                    id='strDrink'
                    type='text'
                    value={inputDrink}
                    onChange={(e) => setInputDrink(e.target.value)}
                    placeholder='Escreva o drink'
                  /> 
                </div>
                
                  <div className= 'overflow-y-scroll scroll-smooth gap-2 block w-[400px] h-50 px-5 max-h-60'>
                  {
                    listDrink.map((item) => {
                      return (
                        
                          <a
                            href='#'
                            key={item.idDrink}
                            className="rounded-lg flex flex-row justify-between items-center hover:scale-110 duration-300 bg-zinc-700 mb-2" 
                          >
                            <strong className='px-4'>{item.strDrink}</strong>
                            <img src={item.strDrinkThumb} alt=""width={60} height={10}/>
                          </a>
                      )
                    })
                  }
                  </div>
  
                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close 
                    type='button'
                    className='bg-zinc-500 px-5 h-12 rounded-md font-semibold'
                  >
                    Cancelar
                  </Dialog.Close >

                  <button 
                    type='submit'
                    onClick={seachDrinks}
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  >
                    <MagnifyingGlassPlus 
                      size={24}
                    />
                    Encontrar o drink
                  </button>
                </footer>
              </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
