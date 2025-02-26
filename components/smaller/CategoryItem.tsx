
import Link from "next/link"

interface CategoryItemProps {
    id?: number,
    label: string,
    cover?: string
    bgColor: string,
    loadingPage: boolean
}
const CategoryItem: React.FC<CategoryItemProps> = ({
  id,
  label,
  cover,
  bgColor,
  loadingPage
}) => {
  return (
    loadingPage ? (
      <div
        className={`
          bg-${bgColor}
          w-[10.4rem] 
          min-w-[10.4rem] 
          min-h-[10.4rem] 
          h-[10.4rem] 
          rounded-xl
          text-left 
          text-white 
          font-black 
          text-xl py-5 
          px-6 
          tracking-widest
          bg-opacity-60
        `}>
        {label}
      </div>
    ) : (
        <Link 
      href={"/categories/"}
      style={{backgroundColor: `${bgColor}`}} 
      className={`
        w-[10.4rem] 
        min-w-[10.4rem] 
        min-h-[10.4rem] 
        h-[10.4rem] 
        rounded-xl
        text-left 
        text-white 
        font-black 
        text-xl py-5 
        px-6 
        tracking-widest
        bg-opacity-60
      `}>
      {label}
       </Link>
    )
  )
}

export default CategoryItem
