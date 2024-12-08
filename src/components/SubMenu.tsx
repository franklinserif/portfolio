import type { FC } from 'react'
import SubMenuItem from '@components/SubMenuItem'
import { SUB_MENU, SUB_MENU_CONTACT } from '@constants/menus'
import type { TSubMenuOptions } from '@interfaces/menu'

interface Props {
  pathname: string
}

const SubMenu: FC<Props> = ({ pathname }) => {
  const path = pathname?.split('/')[2] as TSubMenuOptions

  const menuList = SUB_MENU[path]

  return (
    <section className="w-[248px] border-r border-r-lines">
      <nav>
        <div className="h-[35px] border-b border-b-lines flex items-center">
          <img
            src="/icons/white-arrow-icon.svg"
            className="w-2 mx-2 ml-3"
            alt="white arrow"
          />
          <h4 className="text-white text-snippets">{path}</h4>
        </div>

        <ul className="flex flex-col gap-3 ml-3 pt-3">
          {menuList.map((item) => (
            <SubMenuItem key={item.id} item={item} pathname={pathname} />
          ))}
        </ul>

        <div className="h-[35px] border-y border-y-lines flex items-center mt-6">
          <img
            src="/icons/white-arrow-icon.svg"
            className="w-2 mx-2 ml-3"
            alt="white arrow"
          />
          <h4 className="text-white text-snippets">contacts</h4>
        </div>
        <ul className="flex flex-col gap-3 ml-3 pt-3">
          {SUB_MENU_CONTACT.map((item) => (
            <SubMenuItem key={item.id} item={item} pathname={pathname} />
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default SubMenu
