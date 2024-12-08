import type { FC } from 'react'
import type { ISubMenuOption } from '@interfaces/menu'
import clsx from 'clsx'

interface Props {
  item: ISubMenuOption
  pathname: string
}

const SubMenuItem: FC<Props> = ({ item, pathname }) => {
  return (
    <li className="flex">
      {item.arrow && (
        <img src="/icons/chevron-right-icon.svg" alt="right arrow" />
      )}
      <img
        src={item.icon}
        alt={item.name}
        className={clsx('ml-3', {
          '!ml-5': !item.arrow,
        })}
      />
      <a
        href={item.url}
        className={clsx('text-secondary text-labels ml-3 hover:text-white', {
          '!text-white': pathname === item.url,
        })}
      >
        {item.name}
      </a>
    </li>
  )
}

export default SubMenuItem
