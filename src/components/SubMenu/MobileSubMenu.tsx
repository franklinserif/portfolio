import { type FC, useState } from 'react'
import SubMenuItem from '@components/SubMenu/SubMenuItem'
import type { ISubMenuOption } from '@interfaces/menu'

interface Props {
  menu: [string, ISubMenuOption[]]
  pathname: string
}

const MobileSubMenu: FC<Props> = ({ menu, pathname }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full" key={menu[0]}>
      <button
        className="text-white text-snippets flex items-center gap-2 h-[35px] bg-lines w-full mb-1"
        onClick={() => {
          setIsMenuOpen((prev) => !prev)
        }}
      >
        <img
          src="/icons/white-arrow-icon.svg"
          alt="white arrow"
          className="ml-6"
        />
        {menu[0]}
      </button>
      {isMenuOpen && (
        <ul className="flex flex-col gap-3 ml-3 mb-4 pt-2">
          {menu[1].map((item, index) => (
            <SubMenuItem item={item} pathname={pathname} key={index} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default MobileSubMenu
