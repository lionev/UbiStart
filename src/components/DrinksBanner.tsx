import { Link, LinkProps } from 'react-router-dom'

interface DrinksBannerProps extends LinkProps {
  strDrinkThumb?: string;
  strCategory?: string;
  strDrink?: string;
}

export function DrinksBanner({ strDrinkThumb, strCategory, strDrink, ...rest }: DrinksBannerProps) {
  return (
    <Link {...rest} className="rounded-lg overflow-hidden">
      <img src={strDrinkThumb} alt="" />

      <div className='w-full py-2 px-4 bg-drink-gradient bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{strDrink}</strong>
        <strong className='font-bold text-white block'>{strCategory}</strong>
      </div>
    </Link>
  )
}