import type { ISubMenuOption, ISubMenu } from '@interfaces/menu'

export const SUB_MENU_CONTACT: ISubMenuOption[] = [
  {
    id: 1,
    url: 'mailto:franklinserif@gmail.com',
    name: 'franklinserif',
    icon: '/icons/mail-icon.svg',
    arrow: false,
  },
  {
    id: 2,
    url: 'tel:+1-847-555-5555',
    name: '+584141649969',
    icon: '/icons/phone-icon.svg',
    arrow: false,
  },
]

export const SUB_MENU_PERSONAL_INFO: ISubMenuOption[] = [
  {
    id: 1,
    url: '/about-me/personal-info',
    name: 'bio',
    icon: '/icons/folder-salmon-icon.svg',
    arrow: true,
  },
  {
    id: 2,
    name: 'interest',
    url: '/about-me/personal-info/interest',
    icon: '/icons/folder-green-icon.svg',

    arrow: true,
  },
  {
    id: 3,
    url: '/about-me/personal-info/education',
    name: 'education',
    icon: '/icons/folder-blue-icon.svg',

    arrow: true,
  },
  {
    id: 4,
    url: '/about-me/personal-info/hight-school',
    name: 'hight-school',
    icon: '/icons/m-down-icon.svg',

    arrow: false,
  },
  {
    id: 5,
    url: '/about-me/personal-info/university',
    name: 'university',
    icon: '/icons/m-down-icon.svg',

    arrow: false,
  },
]

export const SUB_MENU_PROFESSIONAL_INFO: ISubMenuOption[] = [
  {
    id: 1,
    url: '/about-me/professional-info',
    name: 'experience',
    icon: '/icons/folder-salmon-icon.svg',
    arrow: true,
  },
  {
    id: 2,
    url: '/about-me/professional-info/hard-skills',
    name: 'hard-skilss',
    icon: '/icons/folder-green-icon.svg',
    arrow: true,
  },
  {
    id: 3,
    url: '/about-me/professional-info/soft-skills',
    name: 'soft-skills',
    icon: '/icons/folder-blue-icon.svg',
    arrow: true,
  },
]

export const SUB_MENU_HOBBIES_INFO: ISubMenuOption[] = [
  {
    id: 1,
    url: '/about-me/hobbies-info',
    name: 'sports',
    icon: '/icons/folder-salmon-icon.svg',
    arrow: true,
  },
  {
    id: 2,
    url: '/about-me/hobbies-info/favorite-games',
    name: 'favorite-games',
    icon: '/icons/folder-green-icon.svg',
    arrow: true,
  },
]

export const SUB_MENU: ISubMenu = {
  'personal-info': SUB_MENU_PERSONAL_INFO,
  'professional-info': SUB_MENU_PROFESSIONAL_INFO,
  'hobbies-info': SUB_MENU_HOBBIES_INFO,
}
