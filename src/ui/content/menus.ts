import menusJson from '../../../content/menus.json'

export const menuData = menusJson

export type MenuItem = {
  name: string
  description?: string
  price: string
}

export type MenuCategory = {
  name: string
  items: MenuItem[]
}

export type Menu = {
  title: string
  subtitle: string
  categories: MenuCategory[]
}
