import { InputHTMLAttributes } from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  listOptions: DrinksInputProps[];
  idDrink?: string;
  strDrink?: string;
  strDrinkThumb?: string;
}

interface DrinksInputProps {
  idDrink?: string;
  strDrink?: string;
  strDrinkThumb?: string;
}

export function Input({ children, listOptions, strDrink, idDrink, strDrinkThumb, ...rest }: InputProps) {

  return (
    <div className='self-stretch w-full'>
      <div className='flex flex-row w-[1344px] items-center self-stretch rounded-lg mt-9 overflow-hidden bg-zinc-400 absolute'>
        <input
          {...rest}
          className='bg-zinc-400 py-4 px-4 w-full rounded-t-sm text-sm placeholder:text-zinc-600'
        />
        {children}
      </div>
      <div
        className='rounded-lg rounded-t-none gap-2 flex flex-col bg-zinc-400 mb-2 mt-20 max-h-80 overflow-y-scroll scrollbar-hide'
      >
        {
          !!listOptions.length && listOptions.map((drink: DrinksInputProps) => {
            console.log(drink)
            return (
              <Link
                to={`/DetailsDrinks/${drink.idDrink}`}
                key={drink.idDrink}
                className="m-2 mt-4 flex flex-row items-center gap-5"
              >
                <img src={drink.strDrinkThumb} alt="" width={50} height={50} />
                {drink.strDrink}
              </Link>

            )
          })
        }
      </div>
    </div>
  )
}