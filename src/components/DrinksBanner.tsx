interface DrinksBannerProps {
  strDrinkThumb?: string;
  strCategory?: string;

}

export function DrinksBanner({strDrinkThumb, strCategory}: DrinksBannerProps){
  return (
    <a href={strCategory} className="relative rounded-lg overflow-hidden">
    <img src={strDrinkThumb} alt="" />

      <div className='w-full pt-16 pb-4 px-4 bg-drink-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>{strCategory}</strong>
      </div>
  </a>
  )
}