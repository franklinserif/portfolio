import type { FC } from 'react'
import { clsx } from 'clsx'
import SubMenuItem from '@components/SubMenu/SubMenuItem'
import MobileSubMenu from '@components/SubMenu/MobileSubMenu'
import { SUB_MENU, SUB_MENU_CONTACT } from '@constants/menus'
import type { TSubMenuOptions } from '@interfaces/menu'

interface Props {
  pathname: string
}

const SubMenu: FC<Props> = ({ pathname }) => {
  const path =
    (pathname?.split('/')[2] as TSubMenuOptions) ||
    (pathname?.split('/')[1] as TSubMenuOptions)

  const menuList = SUB_MENU[path]

  const subMenuList = Object.entries(SUB_MENU)

  return (
    <section
      className={clsx('min-w-[248px] border-r border-r-lines', {
        'min-w-[310px]': path === 'contact-me',
      })}
    >
      <nav className="hidden xl:block">
        <div className="h-[35px] border-b border-b-lines flex items-center">
          <img
            src="/icons/white-arrow-icon.svg"
            className="w-2 mx-2 ml-3"
            alt="white arrow"
          />
          <h4 className="text-white text-snippets">{path}</h4>
        </div>
        <ul className="flex flex-col gap-3 ml-3 pt-3">
          {menuList?.map((item) => (
            <SubMenuItem key={item.id} item={item} pathname={pathname} />
          ))}
        </ul>
        {path !== 'contact-me' && (
          <div className="h-[35px] border-y border-y-lines flex items-center mt-6">
            <img
              src="/icons/white-arrow-icon.svg"
              className="w-2 mx-2 ml-3"
              alt="white arrow"
            />
            <h4 className="text-white text-snippets">contacts</h4>
          </div>
        )}
        {path !== 'contact-me' && (
          <ul className="flex flex-col gap-3 ml-3 pt-3">
            {SUB_MENU_CONTACT.map((item) => (
              <SubMenuItem key={item.id} item={item} pathname={pathname} />
            ))}
          </ul>
        )}
      </nav>
      <nav className="block xl:hidden w-full">
        {subMenuList.map((item, index) => (
          <MobileSubMenu menu={item} pathname={pathname} key={item[0]} />
        ))}
      </nav>
    </section>
  )
}

export default SubMenu
