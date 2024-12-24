export type MenuOptions = '/' | '/about-me' | '/projects' | '/contact-me'

export type TSubMenuOptions =
  | 'personal-info'
  | 'professional-info'
  | 'hobbies-info'
  | 'contact-me'

export interface ISubMenuOption {
  id: number
  name: string
  url: string
  icon: string
  arrow: boolean
}

export type ISubMenu = {
  [K in TSubMenuOptions]: ISubMenuOption[]
}
